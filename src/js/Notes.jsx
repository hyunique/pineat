function Notes({ data, addContent }) {
  return (
    <div className="section-card">
      <div className="input-wrap">
        <label className="label ">Note</label>
        <textarea className="textarea" name="note" id="note" />
      </div>
      <button onClick={addContent}>+</button>

      <>
        {data.map((note) => {
          <div key={note.id}>
            <h2>{note.content}</h2>
          </div>;
        })}
      </>
    </div>
  );
}

export default Notes;
