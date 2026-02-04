import { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import style from './FocusMonitor.module.css';

function FocusMonitor() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [status, setStatus] = useState("Loading models...");

  const distractionStart = useRef(null);
  const alertShown = useRef(false);

  // Load face detection models
  useEffect(() => {
    const loadModels = async () => {
      setStatus("Loading models...");
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      ]);
      setStatus("Starting webcam...");
      startVideo();
    };

    loadModels();
  }, []);

  // Start the webcam
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setStatus("Initializing camera...");
      })
      .catch((err) => {
        console.error("Webcam error:", err);
        setStatus("Webcam access denied");
      });
  };

  // Detect face continuously
  useEffect(() => {
    let intervalId = null;

    const handlePlay = () => {
      setStatus("Detecting face...");
      const canvas = canvasRef.current;
      const displaySize = { width: 480, height: 480 };
      faceapi.matchDimensions(canvas, displaySize);

      intervalId = setInterval(async () => {
  const result = await faceapi
    .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks();

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (result) {
    const resized = faceapi.resizeResults(result, displaySize);
    faceapi.draw.drawDetections(canvas, resized);
    faceapi.draw.drawFaceLandmarks(canvas, resized);

    //  Face detected
    if (status !== "Focused") setStatus("Focused");
    
    distractionStart.current = null;
    alertShown.current = false;
  } else {
    //  No face detected
    if (!distractionStart.current) {
      distractionStart.current = Date.now();
    }

    const elapsed = Date.now() - distractionStart.current;

    if (elapsed > 30000 && !alertShown.current) {
      alertShown.current = true;
      setStatus("Distracted!");

      // Show alert AND reset distraction values after ok button click of the alert popup
      setTimeout(() => {
        alert("You're distracted! Please stay focused.");
        // Reset after alert so next detection can evaluate fresh
        distractionStart.current = null;
        alertShown.current = false;
        setStatus("Possibly distracted...");
      }, 100);
    } else if (!alertShown.current) {
      setStatus("Possibly distracted...");
    }
  }
}, 1000);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("play", handlePlay);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("play", handlePlay);
      }
      clearInterval(intervalId);
    };
  }, [status]);

  return (
    <div className={style.monitorAndChecker}>
      <video ref={videoRef} autoPlay muted width="480" height="480" id={style.video} />
      <canvas ref={canvasRef} width="480" height="480" id={style.canvas} />
      <div className={style.status}>
        <p>Status: <strong>{status}</strong></p>
      </div>
    </div>
  );
}

export default FocusMonitor;
