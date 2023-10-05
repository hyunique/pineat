import "../css/Ingredients.css";
import { useState } from "react";

function Ingredients({ data, addIng }) {
  const [ingInput, setIngInput] = useState("");
  const [amountInput, setAmountInput] = useState("");

  function handleIngChange(e) {
    setIngInput(e.target.value);
  }
  function handleAmountChange(e) {
    setAmountInput(e.target.value);
  }
  const handleAddIng = () => {
    addIng(ingInput, amountInput);
    // Clear the input field
    setIngInput("");
    setAmountInput("");
  };
  return (
    <div className="section-card">
      <div className="ingInput">
        <div className="input-wrap">
          <label className="label">Ingredient</label>
          <input
            className="input"
            id="name"
            value={ingInput}
            onChange={handleIngChange}
            name="name"
            placeholder="e.g. Potato"
            required
          />
        </div>
        <div className="input-wrap">
          <label className="label">Amount</label>
          <input
            className="input"
            value={amountInput}
            onChange={handleAmountChange}
            id="amount"
            placeholder="e.g. 1 kg"
            required
          />
        </div>
        <div className="btn-wrap">
          <button className="addIngBtn" onClick={handleAddIng}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
      <hr />
      {data.map((ing) => (
        <div className="renderContainer" key={ing.id}>
          <div className="input-wrap">
            <input
              value={ing.name}
              className="input"
              name="name"
              placeholder="e.g. Potato"
            />
          </div>
          <div className="input-wrap">
            <input
              value={ing.amount}
              className="input"
              placeholder="e.g. 1 kg"
            />
          </div>
          <div className="btnContainer">
            <button className="deleteBtn material-symbols-outlined">
              close
            </button>
          </div>
        </div>
      ))}
      {/* {data.map((ing) => (
        <div className="renderContainer" key={ing.id}>
          <div className="dataContainer">
            <div className="renderData">{ing.name}</div>
            <div className="renderData">{ing.amount}</div>
          </div>
          <div className="btnContainer">
            <button className="editBtn material-symbols-outlined">edit</button>
            <button className="deleteBtn material-symbols-outlined">
              close
            </button>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default Ingredients;
