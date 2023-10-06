// import { PreviewA4 } from "@diagoriente/react-preview-a4";
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

          <div className="detailInfo">
            <div className="view-ingredients">
              Ingredients <br />
              {ingredient.map((ing) => (
                <div className="ing-container" key={ing.id}>
                  <p className="view-ing">{ing.name}</p>
                  <p className="view-amount">{ing.amount}</p>
                </div>
              ))}
            </div>
            <p className="view-instruction">
              Direction <br />
              {instruction}
            </p>
          </div>
        </div>
        <p className="view-note">
          Note <br />
          {note}
        </p>
      </section>

      <button className="pdfBtn" onClick={handlePrint}>
        <span className="material-symbols-outlined">download</span>PDF
      </button>
    </div>
  );
}
export default Preview;
