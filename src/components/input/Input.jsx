import React from "react";
import "./Input.css";
import { useState } from "react";
const Input = (props) => {
  const { bill, people, tip, setBill, setPeople, setTip } = props;
  return (
    <div className="input">
      <p className="bill">Bill</p>
      <input
        className="bill_input"
        type="number"
        value={bill}
        placeholder="$"
        onChange={(e) => setBill(e.target.valueAsNumber)}
        min="0"
      />
      <p className="select_bill">Select Tip %</p>
      <div className="input_boxes">
        <button className="box" onClick={(e) => setTip(0.05)}>
          5%
        </button>
        <button className="box" onClick={(e) => setTip(0.1)}>
          10%
        </button>
        <button className="box" onClick={(e) => setTip(0.15)}>
          15%
        </button>
        <button className="box" onClick={(e) => setTip(0.25)}>
          25%
        </button>
        <button className="box" onClick={(e) => setTip(0.5)}>
          50%
        </button>
        <input
          type="number"
          onChange={(e) => setTip(e.target.valueAsNumber / 100)}
          value={tip * 100}
          className="custom_box"
        />
      </div>

      <div className="text">
        <span className="num_people">Number of People</span>
        {people == 0 ? <span className="error">Can't be zero</span> : null}
      </div>

      <input
        placeholder="Number Of People"
        type="number"
        value={people}
        onChange={(e) => setPeople(e.target.valueAsNumber)}
        className="input_people"
      />
    </div>
  );
};

export default Input;
