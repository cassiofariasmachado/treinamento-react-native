import React, { useRef } from 'react';
import { DecrementButton } from './components/DecrementButton';
import { DisplayCounter } from './components/DisplayCounter';
import { IncrementButton } from './components/IncrementButton';
import TextInput, { TextInputRef } from './components/TextInput';

function App() {

  const textInputRef = useRef<TextInputRef>(null);

  const onSetValue = () => textInputRef.current?.setValue("Xablau!")

  return (
    <div>
      <h2>Exercício 2 - Criar componente TextInput</h2>
      <TextInput ref={textInputRef} />
      <button onClick={onSetValue}>Forçar valor</button>

      <h2>Exercício 3 - Adaptar Exercício 1 para utilizar Context</h2>
      <DisplayCounter />
      <IncrementButton />
      <DecrementButton />
    </div>
  );
}

export default App;
