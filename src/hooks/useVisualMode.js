import { useState } from "react";


export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    setHistory(prevHistory => {
      const updatedHistory = replace
        ? [...prevHistory.slice(0, prevHistory.length - 1), newMode]
        : [...prevHistory, newMode];
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


// export default function useVisualMode(initialMode) {
//   const [mode, setMode] = useState(initialMode);
//   const [history, setHistory] = useState([initial]);
//   function transition(newMode) {
//     setMode(newMode);
//     setHistory(prevHistory => [...prevHistory, newMode]);
//   }

//   function back() {
//     if (history.length > 1) {
//       const newHistory = [...history.slice(0, history.length - 1)];
//       setHistory(newHistory);
//       setMode(newHistory[newHistory.length - 1]);
//     }
//   }

//   return { mode, transition, back };
// }