import { useCounter } from "../../contexts/counterContext";

export const DisplayCounter: React.FC = () => {
  const { count } = useCounter();

  return (
    <div>O contador está em: {count}</div>
  );
}
