import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition (newMode) {
  
    setMode(newMode);
  }

  function back() {
    if ( history.length < 2) {
      return;
    }
    
    setHistory(history.slice(0,history.length - 1))
    setMode(history[history.length - 2])
  }
  return { mode, transition, back };
};
