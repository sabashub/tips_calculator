import React from "react";
import "./Result.css";
const Result = (props) => {
  const { tipAmount, total, setPeople, setBill, setTips } = props;
  const isOk = !(isNaN(tipAmount) || tipAmount == Infinity);

  const reset = () => {
    setBill(0);
    setPeople(0);
    setTips(0);
  };
  return (
    <div className="result_container">
      <div className="tip">
        <span className="tip_text">Tip Amount</span>
        <span className="tip_amount">{isOk ? `$${tipAmount}` : "$0.00"}</span>
      </div>
      <p className="person">/ person</p>
      <div className="total">
        <span className="total_text">Total</span>
        <span className="total_num">{isOk ? `$${total}` : "$0:00"}</span>
      </div>
      <p className="person2">/ person</p>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Result;
