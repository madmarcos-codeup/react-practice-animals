import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // console.log("button clicked");
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>
        <p>Count is {count}</p>
      </div>
    </div>
  );
}

export default App;
