//import { useState } from 'react'
import useKeyPress from './useKeyPress';

function App() {
  const isEnterPressed = useKeyPress('Enter');

  return (
    <div>
      <h1>Tieni premuto 'Enter' per testare il custom</h1>
      <p>{isEnterPressed ? 'Enter premuto! ✅' : 'Aspettando input... ⌨️'}</p>
    </div>
  );
}

export default App
