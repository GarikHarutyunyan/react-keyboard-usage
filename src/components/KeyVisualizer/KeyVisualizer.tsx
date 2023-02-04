import React, { useCallback, useState } from "react";
import { useKeyboard } from "../../hooks/useKeyboard.tsx";
import classes from "./KeyVisualizer.module.css";

function KeyVisualizer() {
  const [lastPressedKey, setLastPressedKey] = useState<string>("");

  useKeyboard(setLastPressedKey);

  return (
    <div className={classes.container}>
      <h1>{lastPressedKey}</h1>
    </div>
  );
}

export { KeyVisualizer };
