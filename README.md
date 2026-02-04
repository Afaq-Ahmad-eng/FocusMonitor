# FocusMonitor

## Overview

**FocusMonitor** is an AI-powered application that leverages computer vision to monitor and enhance user focus and productivity. Using advanced facial recognition and landmark detection models, the system analyzes user attention patterns in real-time and provides actionable insights to maintain concentration.

This project is developed as a semester project for an Artificial Intelligence course, demonstrating practical applications of machine learning and deep learning techniques.

## Features

- **Real-Time Face Detection**: Utilizes TinyFaceDetector for efficient facial detection across various lighting conditions
- **Facial Landmark Analysis**: Employs face landmark detection to identify eye gaze direction and facial expressions
- **Focus Monitoring**: Tracks user attention patterns and identifies distractions in real-time
- **Performance Analytics**: Provides insights into focus duration, distraction frequency, and concentration patterns
- **User-Friendly Interface**: Modern, responsive web-based interface for seamless user experience

## Technical Stack

### Frontend
- **React**: UI framework for building interactive components
- **Vite**: Modern build tool for fast development and optimized production builds
- **CSS Modules**: Scoped styling for component-level CSS isolation

### AI/ML Libraries
- **face-api.js**: JavaScript library for face detection and landmark recognition
- **TinyFaceDetector**: Lightweight face detection model optimized for real-time inference
- **Face Landmark 68 Model**: Pre-trained model for detecting 68 facial landmarks

### Development Tools
- **ESLint**: Code quality and consistency enforcement
- **Node.js**: JavaScript runtime environment

## Project Structure

```
FocusMonitor/
├── src/
│   ├── components/
│   │   ├── App.jsx           # Main application component
│   │   ├── App.module.css    # App component styles
│   │   ├── FocusMonitor.jsx  # Core focus monitoring logic
│   │   └── FocusMonitor.module.css  # FocusMonitor styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Application entry point
├── public/
│   └── models/               # Pre-trained ML models
│       ├── tiny_face_detector_model-shard1
│       ├── tiny_face_detector_model-weights_manifest.json
│       ├── face_landmark_68_model-shard1
│       └── face_landmark_68_model-weights_manifest.json
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser with webcam access

### Installation Steps

1. **Clone the repository**
   ```bash
   cd FocusMonitor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Usage

1. Launch the application in your browser
2. Allow camera access when prompted
3. Ensure adequate lighting for optimal face detection
4. The application will begin monitoring your focus in real-time
5. View analytics and recommendations on the dashboard

## How It Works

### Face Detection
The TinyFaceDetector model identifies faces in the video stream with minimal computational overhead, making it suitable for real-time applications.

### Landmark Detection
The Face Landmark model extracts 68 key points from detected faces, enabling analysis of:
- Eye position and gaze direction
- Head orientation
- Facial expressions indicating concentration or distraction

### Focus Analysis
The system processes landmark data to determine:
- Whether the user is looking at the screen
- Duration of sustained attention
- Distraction events and frequency

## Performance Considerations

- **Real-Time Processing**: Optimized inference for sub-second latency
- **Browser-Based**: No server dependency; all processing occurs client-side
- **Privacy-Focused**: Video data is not transmitted or stored externally
- **Lightweight Models**: Compact model sizes ensure fast loading and execution

## Academic Context

This project demonstrates:
- Implementation of pre-trained deep learning models in a web environment
- Real-time computer vision processing
- Integration of ML frameworks with modern web technologies
- Data visualization and analytics
- Software engineering best practices

## Limitations & Future Enhancements

### Current Limitations
- Performance depends on camera quality and lighting conditions
- May face challenges with glasses, heavy makeup, or extreme angles

### Future Enhancements
- Integration with break reminders and productivity suggestions
- Historical analytics and trend analysis
- Multi-user support with personalized profiles
- Mobile application version
- Enhanced eye-tracking accuracy
- Integration with task management systems

## Demo

<p align="center">
  <video src="./Demo-AI-Focus-Monitoring-System.mp4" controls width="720">
    Your browser does not support the video tag. Download the demo here: <a href="./Demo-AI-Focus-Monitoring-System.mp4">Demo-AI-Focus-Monitoring-System.mp4</a>
  </video>
</p>

## References

- [face-api.js Documentation](https://github.com/justadudewhohacks/face-api.js)
- [TinyFaceDetector Paper](https://arxiv.org/abs/1509.02915)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## License

This project is provided for educational and semester evaluation purposes.

## Authors

**Afaq Ahmad**

**Instructor**: Dr. Muhammad Sajjad

**Institution**: Islamia College Peshawar

**Semester**: 6th Semester, Artificial Intelligence Course

---


