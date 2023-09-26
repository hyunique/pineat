function Instruction({ formData, onChange }) {
  return (
    <div className="section-card">
      <div className="input-wrap">
        <label className="label ">Instruction</label>
        <textarea
          className="textarea"
          value={formData.instruction}
          name="instruction"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Instruction;
