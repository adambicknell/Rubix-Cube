const Cell = (props) => {
  //Render Rubix Cube cell
  return (
    <div
    className="face-cell"
      style={{       
        backgroundColor: props.colour,
      }}
    ></div>
  );
};
export default Cell;
