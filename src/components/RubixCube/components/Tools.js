import { Faces, Clockwise, CounterClockwise } from "../lib/consts";
import { rotateFace } from "../lib/rotation";
import { generateCube } from "../lib/utils";
const Tools = (props) => {
  const clockwiseActions = [];
  const counterClockwiseActions = [];
  for (let i = 0; i < 6; i++) {
    //Add buttons to rotate face clockwise
    clockwiseActions.push(
      <button
        key={i}
        className="rotate-button"
        onClick={() => {
          const cube = rotateFace(props.cube, Faces[i], Clockwise);
          props.onChange(cube);
        }}
      >
        {Faces[i].charAt(0)}
      </button>
    );

    //Add buttons to rotate face counter-clockwise
    counterClockwiseActions.push(
      <button
        key={i}
        className="rotate-button"
        onClick={() => {
          const cube = rotateFace(props.cube, Faces[i], CounterClockwise);
          props.onChange(cube);
        }}
      >
        {Faces[i].charAt(0) + "'"}
      </button>
    );
  }

  //Render rotate buttons
  return (
    <div style={{ display: "block" }}>
      {clockwiseActions}
      <br />
      {counterClockwiseActions}
      <br />
      <button
        key={14}
        className="reset-cube"
        onClick={() => {
          const cube = generateCube();
          props.onChange(cube);
        }}
      >Reset Cube</button>
    </div>
  );
};
export default Tools;
