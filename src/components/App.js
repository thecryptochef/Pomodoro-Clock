import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import { useInterval } from '../Hooks/useInterval';
import TimeSet from './TimeSet';
import Controls from './Controls';
import Timer from './Timer';
import RoosterCrowing from './RoosterCrowing.mp3';
import './App.css';

const App = () => {
  const beep = useRef();
  const [active, setActive] = useState(
    false
  );
  const [
    sessionVal,
    setSessionVal
  ] = useState(25);
  const [time, setTime] = useState(
    sessionVal * 60 * 1000
  );
  const [mode, setMode] = useState(
    'session'
  );
  const [breakVal, setBreakVal] = useState(
    5
  );

  useInterval(
    () => setTime(time - 1000),
    active ? 1000 : null
  );

  useEffect(() => {
    setTime(sessionVal * 60 * 1000);
  }, [sessionVal]);

  useEffect(() => {
    if (time===0 & mode==='session') {
      beep.current.play()
      setMode('break')
      setTime(breakVal*60*1000)
    } else if (time===0 & mode==='break') {
      beep.current.play()
      setMode('session')
      setTime(sessionVal * 60 * 1000)
    }
  }, [sessionVal, breakVal, time, mode])

  const handleReset = () => {
    beep.current.pause();
    beep.current.currentTime = 0;
    setActive(false);
    setSessionVal(25);
    setBreakVal(5);
    setMode('session');
    setTime(25 * 60 * 1000);
  };

  return (
    <React.Fragment>
      <div className="container text-center">
        <header>
          <h1>Pomodoro Clock</h1>
        </header>
      </div>
      <main>
        <div className="time-wrapper text-center">
          <Timer
            currentMode={[mode, setMode]}
            currentTime={[time, setTime]}
          />
          <Controls
            activeStat={[active, setActive]}
            handleReset={handleReset}
          />
        </div>
        <div className="time-control text-center">
          <TimeSet type={'Break'} value={[breakVal, setBreakVal]} />
          <TimeSet type={'Session'} value={[sessionVal, setSessionVal]} />
        </div>
      </main>
      <audio
        id="beep"
        src={RoosterCrowing}
        ref={beep}
      />
    </React.Fragment>
  );
};

export default App;
