import "../css/Instruction.css";
function Instruction({ data, onChange }) {
  return (
    <div className="section-card">
      <div className="input-wrap">
        <label className="label ">Instruction</label>
        <textarea
          className="textarea"
          name="instruction"
          id="instruction"
          value={data}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Instruction;
{
  /* <>
        {data.map((ins) => (
          <div className="subSection" key={ins.id}>
            <div className="input-wrap">
              <h2>{ins.content}</h2>
            </div>
            <button>Edit</button>
            <button>Save</button>
          </div>
        ))}
      </> */
}
