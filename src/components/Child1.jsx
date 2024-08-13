import { memo } from 'react';



export const Child1 = memo((props) => {

  console.log('Child1 レンダリング');


  const { subtractNum, resetNum } = props;


  return (
    <div className="mt-2">
      <h2 className="text-3xl font-bold">Child1</h2>

      <button className="mt-2 border-8 border-red-600 rounded-xl p-4 bg-pink-300 text-xl font-bold" type="button" onClick={subtractNum}>-1 ボタン</button>

      <button className="mt-2 ml-4 border-8 border-gray-600 rounded-xl p-4 bg-gray-200 text-xl font-bold" type="button" onClick={resetNum}>リセットボタン</button>
    </div>
  );

});
