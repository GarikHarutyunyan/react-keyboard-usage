import classes from './App.module.css';
import React from 'react';
import { KeyVisualizer } from './components/KeyVisualizer/KeyVisualizer.tsx';

export default function App() {
  
  return (
    <div className={classes.container}>
      <KeyVisualizer />
    </div>
  );
}