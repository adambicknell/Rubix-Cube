const Cell = (props) => {
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
