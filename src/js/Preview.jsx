// import "../styles/Preview.css";
import { PreviewA4 } from "@diagoriente/react-preview-a4";
import "../css/Preview.css";
function Preview({ recipe }) {
  return (
    <section className="a4">
      <div>
        <PreviewA4>
          <h2 className="title">Recipe title{recipe.title}</h2>
          <p className="view-subtitle is-5">
            Summary explanation of the dish{recipe.summary}
          </p>
          <h2>{recipe.portion}</h2>
          <h2>{recipe.time}</h2>

          <h2>
            {recipe.ingredient}
            {recipe.amount}
          </h2>

          <h2>{recipe.instruction}</h2>
          <h2>{recipe.note}</h2>
        </PreviewA4>
      </div>
    </section>
  );
}
export default Preview;
