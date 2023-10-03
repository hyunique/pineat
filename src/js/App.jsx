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

  const [ingredient, setIngredient] = useState([]);
  const [instruction, setInstruction] = useState([]);
  const [note, setNote] = useState([]);

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

  const addInsContent = () => {
    const insValue = document.querySelector("#instruction").value;
    setInstruction([
      ...instruction,
      {
        id: uuidv4(),
        content: insValue,
      },
    ]);
  };

  const addNoteContent = () => {
    const noteValue = document.querySelector("#note").value;
    setNote([
      ...note,
      {
        id: uuidv4(),
        content: noteValue,
      },
    ]);
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
            <Ingredients data={ingredient} addIng={addIngredient} />
            <Instruction data={instruction} addContent={addInsContent} />
            <Notes data={note} addNote={addNoteContent} />
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
