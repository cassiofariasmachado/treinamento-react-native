import { useCounter } from "../../contexts/counterContext";

export const IncrementButton: React.FC = () => {
  const { increment } = useCounter();

  return (
    <button onClick={increment}>Incrementar contador</button>
  );
}

