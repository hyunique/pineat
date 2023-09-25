import { useState } from "react";
import "../css/CreateRecipe.css";
import RenderButtons from "./RenderButtons";

function CreateRecipe({ onCreate }) {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    portion: 0,
    time: 0,
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
    // setFormData({
    //   title: "",
    //   summary: "",
    //   portion: 0,
    //   time: 0,
    //   ingredient: "",
    //   amount: 0,
    //   instruction: "",
    //   note: "",
    // });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
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
        <div className="section">
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
              value={formData.time}
              name="preptime"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="label">Cook Time</label>
            <input
              className="input"
              value={formData.time}
              name="cooktime"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="input-wrap">
          <label className="label">Ingredient</label>
          <input
            className="input"
            placeholder="e.g. Potato"
            value={formData.ingredient}
            name="ingredient"
            onChange={handleInputChange}
          />
          <label className="label">Amount</label>
          <input
            className="input"
            placeholder="e.g. 1 kg"
            value={formData.amount}
            name="amount"
            onChange={handleInputChange}
          />
        </div>

        <div className="input-wrap">
          <label className="label ">Instruction</label>
          <textarea
            className="textarea"
            value={formData.instruction}
            name="instruction"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-wrap">
          <label className="label ">Note</label>
          <textarea
            className="textarea"
            value={formData.note}
            name="note"
            onChange={handleInputChange}
          />
        </div>
        <RenderButtons />
      </form>
    </div>
  );
}

export default CreateRecipe;
