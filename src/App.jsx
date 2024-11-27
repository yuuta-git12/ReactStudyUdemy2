import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ChildArea } from "./ChildArea"

function App() {
  const [text, setText] = useState("");
  const [open ,setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);
  
  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="App"></div>
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open}/>
    </>
  );
}

export default App;
