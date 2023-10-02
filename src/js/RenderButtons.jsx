import "../css/Button.css";
function RenderButtons({ onSubmit }) {
  return (
    <div className="button-wrap">
      <button className="" onClick={onSubmit}>
        Edit
      </button>
      <button className="">Save</button>
    </div>
  );
}

export default RenderButtons;
