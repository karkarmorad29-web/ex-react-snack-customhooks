//import { useState } from 'react'
import useDate from "./useDate"

function App() {
  const currentDate = useDate()

  return (
    <div>
      <h1>Data e ora attuale:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
}

export default App
