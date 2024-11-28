import { useState, useCallback, useMemo } from 'react';
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

  // useCallbackによる再レンダリング（関数のmemo化)　第２引数は見張る値
  const onClickClose = useCallback(() => setOpen(false),[setOpen])

  // useMemoを使うことで変数をmemo化できる
  const temp = useMemo(() => 1 + 3,[]);
  console.log(temp);

  return (
    <>
      <div className="App"></div>
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </>
  );
}

export default App;
