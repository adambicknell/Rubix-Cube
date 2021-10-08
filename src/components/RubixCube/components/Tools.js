import { Faces, Clockwise, CounterClockwise } from "../lib/consts";

const Tools = (props) => {
  const clockwiseActions = [];
  const counterClockwiseActions = [];
  const buttonStyle = {
    width: "50px",
    height: "50px",
    margin: " 0 25px 5px 25px",
    cursor: "pointer",
  };
  for (let i = 0; i < 6; i++) {
    //Add buttons to rotate face clockwise
    clockwiseActions.push(
      <button
        key={i}
        style={buttonStyle}
        onClick={() => {
        }}
      >
        {Faces[i].charAt(0)}
      </button>
    );

    //Add buttons to rotate face counter-clockwise
    counterClockwiseActions.push(
      <button
        key={i}
        style={buttonStyle}
        onClick={() => {
        }}
      >
        {Faces[i].charAt(0) + "'"}
      </button>
    );
  }

  return (
    <div style={{ display: "block" }}>
      {clockwiseActions}
      <br />
      {counterClockwiseActions}
    </div>
  );
};
export default Tools;
