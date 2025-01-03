import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToggleSwitch } from './ToggleSwitch/ToggleSwitch'
export const App = ()=>{

  return (
    <section className="container">
      <ToggleSwitch/>
    </section>
  );
}

export default App
