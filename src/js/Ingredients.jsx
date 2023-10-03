import "../css/Ingredients.css";

function ingredients({ data, addIng }) {
  return (
    <div className="section-card">
      <div className="ingInput">
        <div className="ingInput-wrap">
          <label className="label">Ingredient</label>
          <input
            className="input"
            id="name"
            placeholder="e.g. Potato"
            name="name"
          />
        </div>
        <div className="input-wrap">
          <label className="label">Amount</label>
          <input
            className="input"
            id="amount"
            placeholder="e.g. 1 kg"
            name="amount"
          />
        </div>
        <button className="addIngBtn" onClick={addIng}>
          +
        </button>
      </div>

      {data.map((ing) => (
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
      ))}
    </div>
  );
}

export default ingredients;
