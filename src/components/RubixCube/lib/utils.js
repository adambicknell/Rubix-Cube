import Cell from "../components/Cell";

/**
 * Generates the initial Rubix cube data structure
 * @param {String} colour
 * @returns
 */
export const generateCubeFace = (colour) => {
  return [
    Array(3).fill({ colour: colour }),
    Array(3).fill({ colour: colour }),
    Array(3).fill({ colour: colour }),
  ];
};

/**
 * Renders the faces in the required order.
 * @param {Array} cube
 * @returns
 */
export const renderFaces = (cube) => {
  const topRow = [];
  const midRow = [];
  const bottomRow = [];

  topRow.push(
    <div key={2} className="top-row-item">
      <div>{setFace(cube[2])}</div>
    </div>
  );

  midRow.push(
    <div key={4} className="mid-row-item">
      <div>{setFace(cube[4])}</div>
    </div>
  );

  midRow.push(
    <div key={0} className="mid-row-item">
      <div>{setFace(cube[0])}</div>
    </div>
  );

  midRow.push(
    <div key={1} className="mid-row-item">
      <div>{setFace(cube[1])}</div>
    </div>
  );

  midRow.push(
    <div key={3} className="mid-row-item">
      <div>{setFace(cube[3])}</div>
    </div>
  );

  bottomRow.push(
    <div key={5} className="bottom-row-item">
      <div>{setFace(cube[5])}</div>
    </div>
  );

  const faces = [];
  faces.push(
    <div key={1} className="top-row">
      {topRow}
    </div>
  );
  faces.push(
    <div key={2} className="mid-row">
      {midRow}
    </div>
  );
  faces.push(
    <div key={3} className="bottom-row">
      {bottomRow}
    </div>
  );

  return <div className="faces">{faces}</div>;
};

/**
 * Sets the faces of the rubix cube
 * @param Array face
 * @returns
 */
export const setFace = (face) => {
  const row1 = [];
  const row2 = [];
  const row3 = [];
  const rows = [];
  let cells = [];

  //Sets row 1 of the face
  for (let i = 0; i < 3; i++) {
    cells.push(
      <td key={i}>
        <Cell colour={face[0][i].colour} />
      </td>
    );
  }
  row1.push(<tr key={1}>{cells}</tr>); //Separate loops for ease of displaying in rows

  cells = []; //Clear cells
  //Sets row 2 of the face
  for (let i = 0; i < 3; i++) {
    cells.push(
      <td key={i}>
        <Cell colour={face[1][i].colour} />
      </td>
    );
  }
  row2.push(<tr key={2}>{cells}</tr>); //Separate loops for ease of displaying in rows

  cells = []; //Clear cells
  //Sets row 3 of the face
  for (let i = 0; i < 3; i++) {
    cells.push(
      <td key={i}>
        <Cell colour={face[2][i].colour} />
      </td>
    );
  }
  row3.push(<tr key={3}>{cells}</tr>); //Separate loops for ease of displaying in rows

  rows.push(row1, row2, row3);
  const cubeFace = (
    <table style={{ borderCollapse: "collapse", borderSpacing: 0 }}>
      <tbody>{rows}</tbody>
    </table>
  );
  return cubeFace;
};
