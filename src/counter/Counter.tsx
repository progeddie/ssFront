import { Link } from "react-router-dom";
interface CounterProps {
  count: number;
  setCount(value: number): void;
}

const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
  return (
    <div>
      <h2>Count is: {count}</h2>
      <div>
        <Link to="" onClick={() => setCount(count + 1)}>
          Increment
        </Link>
      </div>
      <div>
        <Link to="" onClick={() => setCount(count - 1)}>
          Decrement
        </Link>
      </div>
    </div>
  );
};

export default Counter;
