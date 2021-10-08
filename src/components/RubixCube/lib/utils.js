import Cell from "../components/Cell";
export const generateCubeFace = (face, colour) => {
  return [
    Array(3).fill({ face: face, colour: colour }),
    Array(3).fill({ face: face, colour: colour }),
    Array(3).fill({ face: face, colour: colour }),
  ];
};

export const renderFaces = (cube) => {
  const topRow = [];
  const midRow = [];
  const bottomRow = [];

  topRow.push(
    <div className="top-row-item">
      <div key={2}>{setFace(cube[2])}</div>
    </div>
  );

  midRow.push(
    <div className="mid-row-item">
      <div key={4}>{setFace(cube[4])}</div>
    </div>
  );

  midRow.push(
    <div className="mid-row-item">
      <div key={0}>{setFace(cube[0])}</div>
    </div>
  );

  midRow.push(
    <div className="mid-row-item">
      <div key={1}>{setFace(cube[1])}</div>
    </div>
  );

  midRow.push(
    <div className="mid-row-item">
      <div key={3}>{setFace(cube[3])}</div>
    </div>
  );

  bottomRow.push(
    <div className="bottom-row-item">
      <div key={5}>{setFace(cube[5])}</div>
    </div>
  );

  const faces = [];
  faces.push(<div className="top-row">{topRow}</div>);
  faces.push(<div className="mid-row">{midRow}</div>);
  faces.push(<div className="bottom-row">{bottomRow}</div>);

  return <div className="faces">{faces}</div>;
};

export const setFace = (face) => {
  const row1 = [];
  const row2 = [];
  const row3 = [];
  const rows = [];
  const r1 = face[0];
  const r2 = face[1];
  const r3 = face[2];
  let cells = [];
  for (let i = 0; i < 3; i++) {
    let cell = r1[i];
    cells.push(
      <td>
        <Cell colour={cell.colour} />
      </td>
    );
  }
  row1.push(<tr>{cells}</tr>);
  cells = [];
  for (let i = 0; i < 3; i++) {
    let cell = r2[i];
    cells.push(
      <td>
        <Cell colour={cell.colour} />
      </td>
    );
  }
  row2.push(<tr>{cells}</tr>);

  cells = [];
  for (let i = 0; i < 3; i++) {
    let cell = r3[i];
    cells.push(
      <td>
        <Cell colour={cell.colour} />
      </td>
    );
  }
  row3.push(<tr>{cells}</tr>);
  rows.push(row1, row2, row3);
  const cubeFace = (
    <table style={{ borderCollapse: "collapse", borderSpacing: 0 }}>
      <tbody>{rows}</tbody>
    </table>
  );
  return cubeFace;
};
