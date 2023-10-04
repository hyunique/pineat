function Notes({ data, onChange }) {
  return (
    <div className="section-card">
      <div className="input-wrap">
        <label className="label ">Note</label>
        <textarea
          className="textarea"
          name="note"
          id="note"
          value={data}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Notes;
