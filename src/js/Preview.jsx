import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import { ComponentToPrint } from "./ComponentToPrint";

import "../css/Preview.css";

function Preview({ basicInfo, ingredient, instruction, note }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="preview-wrap">
      <section className="a4" ref={componentRef}>
        <div className="padding-wrap">
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
              <p className="view-cook">
                <span className="material-symbols-outlined">schedule</span>
                {basicInfo.cooktime + " mins"}
              </p>
            </div>
          </div>
          <hr />

          <div className="detailInfo">
            <div className="view-ingredients">
              <span className="info-title">Ingredients</span> <br />
              <br />
              {ingredient.map((ing) => (
                <div className="ing-container" key={ing.id}>
                  <p className="view-ing">{ing.name}</p>
                  <p className="view-amount">{ing.amount}</p>
                </div>
              ))}
            </div>
            <div className="view-instruction">
              <span className="info-title">Direction</span> <br />
              <br />
              <p>{instruction}</p>
            </div>
          </div>
        </div>
        <div className="view-note">
          <hr />
          <span className="info-title">Note</span> <br />
          <br />
          <p>{note}</p>
        </div>
      </section>

      <button className="pdfBtn" onClick={handlePrint}>
        <span className="material-symbols-outlined">download</span>PDF
      </button>
    </div>
  );
}
export default Preview;
