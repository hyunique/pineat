// import "../styles/Preview.css";
import { PreviewA4 } from "@diagoriente/react-preview-a4";
import "../css/Preview.css";
function Preview({ recipe }) {
  const {
    title,
    summary,
    portion,
    preptime,
    cooktime,
    ingredient,
    amount,
    instruction,
    note,
  } = recipe;
  return (
    <section className="a4">
      <div>
        <PreviewA4>
          <h2 className="title">Recipe title{title}</h2>
          <p className="view-subtitle is-5">
            Summary explanation of the dish{summary}
          </p>
          <h2>{portion}</h2>
          <h2>{preptime}</h2>
          <h2>{cooktime}</h2>
          <h2>
            {ingredient}
            {amount}
          </h2>

          <h2>{instruction}</h2>
          <h2>{note}</h2>
        </PreviewA4>
      </div>
    </section>
  );
}
export default Preview;
