// import "../styles/Preview.css";
import { PreviewA4 } from "@diagoriente/react-preview-a4";
import "../css/Preview.css";
function Preview({ basicInfo, ingredient, instruction, note }) {
  return (
    <div className="preview-wrap">
      <section className="a4">
        <div>
          <PreviewA4>
            <div className="basicInfo-container">
              <h2 className="view-title">{basicInfo.title}</h2>
              <p className="view-subtitle">{basicInfo.summary}</p>
              <div className="info-box">
                <p className="view-portion">
                  <span className="material-symbols-outlined">
                    restaurant_menu
                  </span>
                  {basicInfo.portion + " portions"}
                </p>
                {/* <p className="view-prep">
                  <span className="material-symbols-outlined">schedule</span>
                  {"Prep :" + basicInfo.preptime + " mins"}
                </p> */}
                <p className="view-cook">
                  <span className="material-symbols-outlined">schedule</span>
                  {basicInfo.cooktime + " mins"}
                </p>
              </div>
            </div>

            <div className="detailInfo">
              <div className="view-ingredients">
                Ingredients
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
