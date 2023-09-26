import { useState } from "react";
import "../css/CreateRecipe.css";
import RenderButtons from "./RenderButtons";
import BasicInfo from "./BasicInfo";
import Ingredients from "./Ingredients";
import Instruction from "./Instruction";
import Notes from "./Notes";

function CreateRecipe({ onCreate }) {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    portion: 0,
    preptime: 0,
    cooktime: 0,
    ingredient: "",
    amount: 0,
    instruction: "",
    note: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <BasicInfo formData={formData} onChange={handleInputChange} />
        <Ingredients formData={formData} onChange={handleInputChange} />
        <Instruction formData={formData} onChange={handleInputChange} />
        <Notes formData={formData} onChange={handleInputChange} />

        <RenderButtons />
      </form>
    </div>
  );
}

export default CreateRecipe;

/* <div className="accordion">
          <div className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => setIsActive(!isActive)}
            >
              <h1 className="acc-title">Basic Info</h1>
              <h1 className="acc-tab">{isActive ? "-" : "+"}</h1>
            </div>
            {isActive && <div className="accordion-content"></div>}
          </div>
        </div> */

{
  /* <div className="section-card">
          <div className="input-wrap">
            <label className="label">Recipe Title</label>
            <input
              className="input"
              value={formData.title}
              name="title"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrap">
            <label className="label">Summary</label>
            <input
              className="input"
              value={formData.summary}
              name="summary"
              onChange={handleInputChange}
            />
          </div>
          <div className="subSection">
            <div>
              <label className="label">Portion</label>
              <input
                className="input"
                value={formData.portion}
                name="portion"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="label">Prep Time</label>
              <input
                className="input"
                value={formData.preptime}
                name="preptime"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="label">Cook Time</label>
              <input
                className="input"
                value={formData.cooktime}
                name="cooktime"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div> */
}
