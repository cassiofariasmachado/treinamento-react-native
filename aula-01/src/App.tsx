import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter () {
    setCounter(old => old + 1);
  }

  function clearCounter () {
    setCounter(0);
  }

  useEffect(() => {
    if(counter === 10){
      alert('O contador chegou a 10 🎉');
    }
  }, [counter]);

  return (
    <div className="app">
      <p className="title">O contador está em: {counter}</p>
      <button className="button" onClick={incrementCounter}>Incrementar</button>
      <button className="button" onClick={clearCounter}>Limpar contador</button>
    </div>
  );
}

export default App;
