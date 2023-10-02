// import "../styles/Preview.css";
import { PreviewA4 } from "@diagoriente/react-preview-a4";
import "../css/Preview.css";
function Preview({ basicInfo, ingredient, instruction, note }) {
  //   const [basicInfo, ingredient, instruction, note] = recipe;
  return (
    <section className="a4">
      <div>
        <PreviewA4>
          <h2 className="title">{basicInfo.title}</h2>
          <p className="view-subtitle is-5">{basicInfo.summary}</p>
          <h2>{basicInfo.portion}</h2>
          <h2>{basicInfo.preptime}</h2>
          <h2>{basicInfo.cooktime}</h2>

          <div className="experiences">
            {ingredient.map((ing) => (
              <div className="container" key={ing.id}>
                <h3>{ing.name}</h3>
                <h3>{ing.amount}</h3>
              </div>
            ))}
          </div>
          <h2>{instruction.content}</h2>
          <h2>{note.content}</h2>
        </PreviewA4>
      </div>
    </section>
  );
}
export default Preview;
