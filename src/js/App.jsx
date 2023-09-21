import { useState } from "react";
import Header from "./Header";
import CreateRecipe from "./CreateRecipe";
import Preview from "./Preview";
import Footer from "./Footer";
import "../css/App.css";
function App() {
  const [recipe, setRecipe] = useState({});

  const createRecipe = (description) => {
    const updatedRecipe = {
      title: description.title,
      summary: description.summary,
      portion: description.portion,
      time: description.time,
      ingredient: description.ingredient,
      amount: description.amount,
      instruction: description.instruction,
      note: description.note,
    };
    setRecipe(updatedRecipe);
  };

  return (
    <>
      <Header />
      <main>
        <CreateRecipe onCreate={createRecipe} />
        <Preview recipe={recipe} />
      </main>
      <Footer />
    </>
  );
}

export default App;
