export const Practice4 = () => {
  const clcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => clcTotalFee(1000);

  return (
    <div>
      <p>練習問題: 設定ファイルをいじる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
