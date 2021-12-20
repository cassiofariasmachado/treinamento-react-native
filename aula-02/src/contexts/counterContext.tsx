import { createContext, useCallback, useContext, useState } from "react";

interface UseCounter {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const CounterContext = createContext<UseCounter>({} as UseCounter);

const useCounter = (): UseCounter =>
    useContext(CounterContext);

const CounterProvider: React.FC = ({ children }) => {
    const [count, setCount] = useState<number>(1);

    const increment = useCallback(
        () => {
            setCount(prevCounter => prevCounter + 1);
        }, []);

    const decrement = useCallback(
        () => {
            setCount(prevCounter => prevCounter - 1);
        }, []);

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};

export { CounterProvider, useCounter };