function BasicInfo({ data, onChange }) {
  return (
    <div className="section-card">
      <div className="input-wrap">
        <label className="label">Recipe Title</label>
        <input
          className="input"
          value={data.title}
          name="title"
          onChange={onChange}
        />
      </div>
      <div className="input-wrap">
        <label className="label">Summary</label>
        <input
          className="input"
          value={data.summary}
          name="summary"
          onChange={onChange}
        />
      </div>
      <div className="subSection">
        <div>
          <label className="label">Portion</label>
          <input
            className="input"
            value={data.portion}
            name="portion"
            onChange={onChange}
          />
        </div>
        <div>
          <label className="label">Prep Time</label>
          <input
            className="input"
            value={data.preptime}
            name="preptime"
            onChange={onChange}
          />
        </div>
        <div>
          <label className="label">Cook Time</label>
          <input
            className="input"
            value={data.cooktime}
            name="cooktime"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
