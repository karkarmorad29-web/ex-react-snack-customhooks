//import { useState } from 'react'
import useCustomPointer from './useCustomPointer'

function App() {
  const customPointer = useCustomPointer('🐉')

  return (
    <div>
      <h1>Muovi il mouse per mostrare il cursore personale</h1>
      {customPointer}
    </div>
  );
}

export default App
