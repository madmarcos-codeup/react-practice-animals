import {useState} from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

const allAnimals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

function getRandomAnimal() {
  return allAnimals[Math.trunc(Math.random() * allAnimals.length)];
}

function App() {
  // const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  });

  const handleClick = () => {
    // console.log("button clicked");
    // setCount(count + 1);
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>
        {renderAnimals}
      </div>
    </div>
  );
}

export default App;
