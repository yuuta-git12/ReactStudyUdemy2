import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
  color:"black"
}

// memoでコンポーネントを囲むことでpropsの更新以外で
// 子コンポーネントの再レンダリングされることを防ぐことができる
export const ChildArea = memo((props) => {
  const {open, onClickClose } = props;

  console.log("ChildAreaがレンダリングされた")

  // 2000件のデータをコンソールに表示する処理
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...")
  })

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null }
    </>    
  );
});