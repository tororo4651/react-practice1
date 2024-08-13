import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { ColoredMessage } from './components/ColoredMessage.jsx';
import CssModules from './components/CssModules';
import { TailwindCss } from './components/TailwindCss.jsx';
import { Child1 } from './components/Child1.jsx';



export const App = () => {

  console.log('App レンダリング');



  // フラグの切り替え

  const [isFlag, setIsFlag] = useState(false);
  const switchFlag = () => {
    setIsFlag(!isFlag);
  };




  // 数値の増減・リセット

  const [num, setNum] = useState(0);

  // +1
  const handleSetNum = () => {
    setNum(num + 1);
  };

  // -1
  const subtractNum = useCallback(() => {
    setNum((prev) => {
      return prev - 1;
    });
  }, []);

  // リセット
  const resetNum = useCallback(() => {
    setNum(0);
  }, []);




  // useEffect

  // 第２引数を省略すると、レンダリングのたびに実行される。
  // 一番最後に実行される。


  // 最初のレンダリング時のみ実行される。
  useEffect(() => {
    console.log('test useEffect');
  }, []);


  // num が変更された場合のみ、実行される。
  useEffect(() => {
    console.log('test useEffect');
  }, [num]);




  // useMemo

  // 第２引数に空の依存配列を渡した場合、初回の一度のみ実行され、２度目以降のレンダリング時にはキャッシュから値（関数を実行した結果の値）を取得する。
  // 初回のレンダリング時の計算結果を使い回す。
  const result1 = useMemo(() => {
    return num + 1;
  }, []);

  console.log(result1);


  // 第２引数の依存配列が空でない場合、要素の値に変更があった場合のみ、関数を再実行する。
  const result2 = useMemo(() => {
    return num + 1;
  }, [num]);

  console.log(result2);




  return (
    <React.Fragment>

      <p className="text">class属性　段落。</p>


      <h1 style={{ marginTop: 40, color: 'red', fontSize: '2rem', fontWeight: 'bold' }}>style属性　見出し1</h1>


      <ColoredMessage marginTop="40px" color="blue">
        <b>p要素　ColoredMessage1</b>
      </ColoredMessage>

      <ColoredMessage color="pink">
        <b>p要素　ColoredMessage2</b>
      </ColoredMessage>


      <CssModules />


      <TailwindCss />


      <div className="mt-10 p-4 border-red-500 border-8 rounded-xl">
        <button className="p-5 rounded-3xl bg-blue-600 text-yellow-300 text-xl font-semibold" type="button" onClick={switchFlag}>切り替えボタン</button>

        {isFlag && <div className="mt-5 ml-5 text-lime-700 text-4xl font-black">フラグ</div>}
      </div>


      <div className="mt-10 border-8 border-yellow-700 p-5">
        <div className="text-3xl">{num}</div>

        <button className="mt-2 border-8 border-green-700 rounded-xl p-4 bg-lime-400 text-xl font-bold" type="button" onClick={handleSetNum}>+1 ボタン</button>

        <Child1 subtractNum={subtractNum} resetNum={resetNum} />
      </div>

    </React.Fragment>
  );
};
