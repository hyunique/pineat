import "../css/Ingredients.css";
import { useState } from "react";

function Ingredients({ data, addIng, removeIng, modifyIng }) {
  const [ingInput, setIngInput] = useState("");
  const [amountInput, setAmountInput] = useState("");

  function handleIngChange(e) {
    setIngInput(e.target.value);
  }
  function handleAmountChange(e) {
    setAmountInput(e.target.value);
  }

  function handleAddIng() {
    addIng(ingInput, amountInput);
    // Clear the input field
    setIngInput("");
    setAmountInput("");
  }
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
              className="input"
              name="name"
              value={ing.name}
              id={ing.id}
              onChange={(e) => modifyIng(e)}
              placeholder="e.g. Potato"
            />
          </div>
          <div className="input-wrap">
            <input
              className="input"
              name="amount"
              value={ing.amount}
              id={ing.id}
              onChange={(e) => modifyIng(e)}
              placeholder="e.g. 1 kg"
            />
          </div>
          <div className="btnContainer">
            <button
              className="deleteBtn material-symbols-outlined"
              onClick={() => removeIng(ing.id)}
            >
              close
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;
