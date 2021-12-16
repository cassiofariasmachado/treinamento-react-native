import React, { useRef } from 'react';

function App() {
  const inputContainer = useRef<HTMLInputElement>(null);

  const onClick = () => inputContainer.current?.focus();

  return (
    <div>

      <h2>1. Utilizando useRef</h2>

      <input ref={inputContainer} type="text" />
      <button onClick={onClick}>Foco no input!</button>

      <h2>2. Utilizando useImperativeHandle</h2>

      




    </div>
  );
}

export default App;
