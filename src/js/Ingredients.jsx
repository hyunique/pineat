function ingredients({ formData, onChange }) {
  return (
    <div className="section-card">
      <div className="subSection">
        <div className="input-wrap">
          <label className="label">Ingredient</label>
          <input
            className="input"
            placeholder="e.g. Potato"
            value={formData.ingredient}
            name="ingredient"
            onChange={onChange}
          />
        </div>
        <div className="input-wrap">
          <label className="label">Amount</label>
          <input
            className="input"
            placeholder="e.g. 1 kg"
            value={formData.amount}
            name="amount"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ingredients;
