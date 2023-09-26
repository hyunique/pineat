import { useState } from "react";
import Header from "./Header";
import CreateRecipe from "./CreateRecipe";
import Preview from "./Preview";
import Footer from "./Footer";
import "../css/App.css";

function App() {
  const [recipe, setRecipe] = useState({});

  const createRecipe = (formData) => {
    const updatedRecipe = {
      title: formData.title,
      summary: formData.summary,
      portion: formData.portion,
      preptime: formData.preptime,
      cooktime: formData.cooktime,
      ingredient: formData.ingredient,
      amount: formData.amount,
      instruction: formData.instruction,
      note: formData.note,
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
