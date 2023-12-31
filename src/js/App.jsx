import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/App.css";

import Header from "./Header";
import BasicInfo from "./BasicInfo";
import Ingredients from "./Ingredients";
import Instruction from "./Instruction";
import Notes from "./Notes";
import Preview from "./Preview";
import Footer from "./Footer";

function App() {
  const [basicInfo, setInfo] = useState({
    title: "Recipe Title",
    summary: "This is summary of recipe. Explain about the recipe.",
    portion: "2",
    preptime: "",
    cooktime: "30",
  });

  const [ingredient, setIngredient] = useState([]);
  const [instruction, setInstruction] = useState("");
  const [note, setNote] = useState("");

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const addIngredient = (ingInput, amountInput) => {
    setIngredient([
      ...ingredient,
      {
        id: uuidv4(),
        name: ingInput,
        amount: amountInput,
      },
    ]);
  };

  function modifyIngredient(e) {
    const { name, value, id } = e.target;

    // Create a copy of the ingredients array with the modification
    const updatedIngredients = ingredient.map((ingData) => {
      if (ingData.id === id) {
        // Update the corresponding ingredient's property (name or amount)
        return {
          ...ingData,
          [name]: value,
        };
      }
      return ingData;
    });

    // Update the state with the modified ingredients
    setIngredient(updatedIngredients); // Assuming you have a state variable named setData
  }

  const removeIngredient = (id) => {
    const updatedIngredients = ingredient.filter((ing) => ing.id !== id);
    setIngredient(updatedIngredients);
  };

  const handleInsChange = (e) => {
    const { value } = e.target;
    setInstruction(value);
  };
  const handleNoteChange = (e) => {
    const { value } = e.target;
    setNote(value);
  };

  const handleSubmit = (e) => {
    // To prevent reset on button clicks
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <BasicInfo data={basicInfo} onChange={handleInfoChange} />
            <Ingredients
              data={ingredient}
              addIng={addIngredient}
              removeIng={removeIngredient}
              modifyIng={modifyIngredient}
            />
            <Instruction data={instruction} onChange={handleInsChange} />
            <Notes data={note} onChange={handleNoteChange} />
          </form>
        </div>
        <Preview
          basicInfo={basicInfo}
          ingredient={ingredient}
          instruction={instruction}
          note={note}
          // handlePrint={handlePrint}
          // componentRef={componentRef}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
// const addInsContent = () => {
//   const insValue = document.querySelector("#instruction").value;
//   setInstruction([
//     ...instruction,
//     {
//       id: uuidv4(),
//       content: insValue,
//     },
//   ]);
// };

// const addNoteContent = () => {
//   const noteValue = document.querySelector("#note").value;
//   setNote([
//     ...note,
//     {
//       id: uuidv4(),
//       content: noteValue,
//     },
//   ]);
// };
