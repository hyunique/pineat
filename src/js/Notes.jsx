function Notes({ data, addNote }) {
  return (
    <div className="section-card">
      <div className="input-wrap">
        <label className="label ">Note</label>
        <input className="input" name="note" id="note" />
      </div>
      <button onClick={addNote}>+</button>

      {data.map((note) => (
        <div className="subSection" key={note.id}>
          <h2>{note.content}</h2>
          <button>Edit</button>
          <button>Save</button>
        </div>
      ))}
    </div>
  );
}

export default Notes;
