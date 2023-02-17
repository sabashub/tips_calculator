import React from "react";
import "./Card.css";
import Input from "./input/Input";
import Result from "./result/Result";
import { useState } from "react";
const Card = () => {
  const [bill, setBill] = useState(null);
  const [people, setPeople] = useState(null);
  const [tip, setTip] = useState(0);

  const tipAmount = ((bill * tip) / people).toFixed(2);
  const total = ((bill * (1 + tip)) / people).toFixed(2);
  return (
    <div className="card">
      <Input
        setBill={setBill}
        setPeople={setPeople}
        setTip={setTip}
        bill={bill}
        people={people}
        tip={tip}
      />
      <Result
        tipAmount={tipAmount}
        total={total}
        setBill={setBill}
        setPeople={setPeople}
        setTip={setTip}
      />
    </div>
  );
};

export default Card;
