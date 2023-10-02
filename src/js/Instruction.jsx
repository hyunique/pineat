function Instruction({ data, addContent }) {
  return (
    <div className="section-card">
      <div className="input-wrap">
        <label className="label ">Instruction</label>
        <textarea className="textarea" name="instruction" id="instruction" />
      </div>
      <button onClick={addContent}>+</button>
      <>
        {data.map((ins) => {
          <div key={ins.id}>
            <h2>{ins.content}</h2>
          </div>;
        })}
      </>
    </div>
  );
}

export default Instruction;
