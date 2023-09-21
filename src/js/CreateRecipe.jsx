import { useState } from "react";
import "../css/CreateRecipe.css";
function CreateRecipe({ onCreate }) {
  const [description, setDescription] = useState({
    title: "",
    summary: "",
    portion: 0,
    time: 0,
    ingredient: "",
    amount: 0,
    instruction: "",
    note: "",
  });

  function handleTitleChange(e) {
    setDescription({
      ...description,
      title: e.target.value,
    });
  }
  function handleSummaryChange(e) {
    setDescription({
      ...description,
      summary: e.target.value,
    });
  }
  function handlePortionChange(e) {
    setDescription({
      ...description,
      portion: e.target.value,
    });
  }
  function handleTimeChange(e) {
    setDescription({
      ...description,
      time: e.target.value,
    });
  }
  function handleIngredientChange(e) {
    setDescription({
      ...description,
      ingredient: e.target.value,
    });
  }
  function handleAmountChange(e) {
    setDescription({
      ...description,
      amount: e.target.value,
    });
  }
  function handleInstructionChange(e) {
    setDescription({
      ...description,
      instruction: e.target.value,
    });
  }
  function handleNoteChange(e) {
    setDescription({
      ...description,
      note: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(description);
    setDescription({
      title: "",
      summary: "",
      portion: 0,
      time: 0,
      ingredient: "",
      amount: 0,
      instruction: "",
      note: "",
    });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="input-wrap">
          <label className="label">Recipe Title</label>
          <input
            className="input"
            value={description.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="input-wrap">
          <label className="label">Summary</label>
          <input
            className="input"
            value={description.summary}
            onChange={handleSummaryChange}
          />
        </div>
        <div className="section">
          <div>
            <label className="label">Portion</label>
            <input
              className="input"
              value={description.portion}
              onChange={handlePortionChange}
            />
          </div>
          <div>
            <label className="label">Prep Time</label>
            <input
              className="input"
              value={description.time}
              onChange={handleTimeChange}
            />
          </div>
          <div>
            <label className="label">Cook Time</label>
            <input
              className="input"
              value={description.time}
              onChange={handleTimeChange}
            />
          </div>
        </div>
        <div className="input-wrap">
          <label className="label">Ingredient</label>
          <input
            className="input"
            placeholder="e.g. Potato"
            value={description.ingredient}
            onChange={handleIngredientChange}
          />
          <label className="label">Amount</label>
          <input
            className="input"
            placeholder="e.g. 1 kg"
            value={description.amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className="input-wrap">
          <label className="label ">Instruction</label>
          <textarea
            className="textarea"
            value={description.instruction}
            onChange={handleInstructionChange}
          />
        </div>
        <div className="input-wrap">
          <label className="label ">Note</label>
          <textarea
            className="textarea"
            value={description.note}
            onChange={handleNoteChange}
          />
        </div>
        {/* <RenderButtons /> */}
      </form>
    </div>
  );
}

export default CreateRecipe;
