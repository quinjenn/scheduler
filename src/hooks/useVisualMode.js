import { useState, useEffect } from "react";


export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  function transition(mode, replace = false) {
    setMode(mode);
    setHistory(prev => {
      const updatedHistory = replace
        ? [...prev.slice(0, prev.length - 1), mode]
        : [...prev, mode];
      return updatedHistory;
    });
  }

  function back() {
    if (history.length > 1) {
      const newHistory = [...history.slice(0, history.length - 1)];
      setHistory(newHistory);
      setMode(newHistory[newHistory.length - 1]);
    }
  }

  return { mode, transition, back };
}
