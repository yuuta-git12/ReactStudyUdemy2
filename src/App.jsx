import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="App"></div>
      <input />
      <br />
      <br />
      <button>表示</button>
    </>
  );
}

export default App;
