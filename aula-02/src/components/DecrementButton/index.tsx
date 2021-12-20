import { useCounter } from "../../contexts/counterContext";

export const DecrementButton: React.FC = () => {
  const { decrement } = useCounter();

  return (
    <button onClick={decrement}>Decrementar contador</button>
  );
}
