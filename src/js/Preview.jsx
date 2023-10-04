// import "../styles/Preview.css";
import { PreviewA4 } from "@diagoriente/react-preview-a4";
import "../css/Preview.css";
function Preview({ basicInfo, ingredient, instruction, note }) {
  //   const [basicInfo, ingredient, instruction, note] = recipe;
  return (
    <div className="preview-wrap">
      <section className="a4">
        <div>
          <PreviewA4>
            <div className="basicInfo-container">
              <h2 className="view-title">{basicInfo.title}Recipe title</h2>
              <p className="view-subtitle">
                {basicInfo.summary}This is summary of recipe. explain about the
                recipe.
              </p>
              <div className="info-box">
                <p className="view-portion">
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                  {basicInfo.portion + " portion"}
                </p>
                <p className="view-prep">
                  {"Prep :" + basicInfo.preptime + " mins"}
                </p>
                <p className="view-cook">
                  <span className="material-symbols-outlined">schedule</span>
                  {"Cook :" + basicInfo.cooktime + " mins"}
                </p>
              </div>
            </div>

            <div className="detailInfo">
              <div className="view-ingredients">
                {ingredient.map((ing) => (
                  <div className="ing-container" key={ing.id}>
                    <p className="view-ing">{ing.name}</p>
                    <p className="view-amount">{ing.amount}</p>
                  </div>
                ))}
              </div>
              <p className="view-instruction">{instruction}</p>
            </div>
            <p className="view-note">{note}</p>
          </PreviewA4>
        </div>
      </section>

      <button className="pdfBtn">
        <span className="material-symbols-outlined">download</span>PDF
      </button>
    </div>
  );
}
export default Preview;
