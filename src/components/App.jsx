import style from './App.module.css'
import FocusMonitor from './FocusMonitor';

function App() {
  return (
    <>
     <div className={style.mainContainer}>
       <div id={style.heading}>
      <h2>AI Focus Monitor</h2>
       </div>
      <FocusMonitor />
     </div>
    </>
  )
}

export default App
