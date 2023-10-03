function Instruction({ data, addContent }) {
  return (
    <div className="section-card">
      <div className="input-wrap">
        <label className="label ">Instruction</label>
        <textarea className="textarea" name="instruction" id="instruction" />
      </div>
      <button id="insBtn" onClick={addContent}>
        +
      </button>
      <>
        {data.map((ins) => (
          <div className="subSection" key={ins.id}>
            <div className="input-wrap">
              <h2>{ins.content}</h2>
            </div>
            <button>Edit</button>
            <button>Save</button>
          </div>
        ))}
      </>
    </div>
  );
}

export default Instruction;
