function ingredients({ data, addIng }) {
  return (
    <div className="section-card">
      <div className="subSection">
        <div className="input-wrap">
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
        <button onClick={addIng}>+</button>
      </div>

      {data.map((ing) => (
        <div className="subSection" key={ing.id}>
          <div className="input-wrap">
            <h2>{ing.name}</h2>
          </div>
          <div className="input-wrap">
            <h2>{ing.amount}</h2>
          </div>
          <button>Edit</button>
          <button>Save</button>
        </div>
      ))}
    </div>
  );
}

export default ingredients;
