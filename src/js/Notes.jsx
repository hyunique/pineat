function Notes({ formData, onChange }) {
  return (
    <div className="section-card">
      <div className="input-wrap">
        <label className="label ">Note</label>
        <textarea
          className="textarea"
          value={formData.note}
          name="note"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Notes;
