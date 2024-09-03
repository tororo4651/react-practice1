import { memo } from 'react';



export const Child = memo((props) => {

  console.log('Child レンダリング');


  const { subtractNum, resetNum } = props;


  return (
    <div className="mt-2">
      <h2 className="text-3xl font-bold">Child</h2>

      <div className="mt-2">
        <button className="border-8 border-red-600 p-4 bg-pink-300 text-xl font-bold rounded-xl" type="button" onClick={subtractNum}>-1 ボタン</button>

        <button className="ml-4 border-8 border-gray-600 p-4 bg-gray-200 text-xl font-bold rounded-xl" type="button" onClick={resetNum}>リセットボタン</button>
      </div>
    </div>
  );

});
