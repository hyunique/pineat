import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/App.css";
import "../css/CreateRecipe.css";
import Header from "./Header";
import BasicInfo from "./BasicInfo";
import Ingredients from "./Ingredients";
import Instruction from "./Instruction";
import Notes from "./Notes";
// import RenderButtons from "./RenderButtons";
import Preview from "./Preview";
import Footer from "./Footer";

function App() {
  const [basicInfo, setInfo] = useState({
    title: "",
    summary: "",
    portion: 0,
    preptime: 0,
    cooktime: 0,
  });

  const [ingredient, setIngredient] = useState([
    {
      id: uuidv4(),
      name: "",
      amount: "",
    },
  ]);
  const [instruction, setInstruction] = useState([
    {
      id: uuidv4(),
      content: "",
    },
  ]);
  const [note, setNote] = useState([
    {
      id: uuidv4(),
      content: "",
    },
  ]);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const addIngredient = () => {
    let nameValue = document.querySelector("#name").value;
    let amountValue = document.querySelector("#amount").value;
    setIngredient([
      ...ingredient,
      {
        id: uuidv4(),
        name: nameValue,
        amount: amountValue,
      },
    ]);
  };

  function addInsContent() {
    const noteValue = document.querySelector("#note");
    setInstruction([
      ...instruction,
      {
        id: uuidv4(),
        content: noteValue,
      },
    ]);
  }

  function addNoteContent() {
    const insValue = document.querySelector("#instruction");

    setNote([
      ...note,
      {
        id: uuidv4(),
        content: insValue,
      },
    ]);
  }
  // const handleInstructionChange = (e) => {
  //   const { name, value } = e.target;
  //   setInstruction((prevIns) => ({
  //     ...prevIns,
  //     [name]: value,
  //   }));
  // };
  // const handleNoteChange = (e) => {
  //   const { name, value } = e.target;
  //   setNote((prevNote) => ({
  //     ...prevNote,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // createRecipe(recipe);
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
              // onChange={handleIngChange}
            />
            <Instruction data={instruction} addContent={addInsContent} />
            <Notes data={note} addContent={addNoteContent} />
            {/* <RenderButtons /> */}
          </form>
        </div>
        <Preview
          basicInfo={basicInfo}
          ingredient={ingredient}
          instruction={instruction}
          note={note}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
