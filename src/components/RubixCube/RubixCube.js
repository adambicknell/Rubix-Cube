import React, { useEffect, useState } from "react";
import { Colours } from "./lib/consts";
import Tools from "./components/Tools";
import { renderFaces, generateCubeFace } from "./lib/utils";

const RubixCube = () => {
  const [cube, setCube] = useState([]);
  const [faces, setFaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Generate Rubix Cube and set UI on initial load
  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
      setCube([
        generateCubeFace(Colours[0]),
        generateCubeFace(Colours[1]),
        generateCubeFace(Colours[2]),
        generateCubeFace(Colours[3]),
        generateCubeFace(Colours[4]),
        generateCubeFace(Colours[5]),
      ]);
      return null;
    }
  }, [isLoading]);

  //Update Rubix Cube faces when cube state changed
  useEffect(() => {
    console.log(cube);
    if (cube.length) {
      setFaces(renderFaces(cube));
      return null;
    }
  }, [cube]);

  //Function used by child component <Tools> to update cube state
  function updateCube(cube) {
    setCube(cube);
    setFaces(renderFaces(cube));
  }

  //Render Rubix Cube
  return (
    <>
      {cube?.[0] ? (
        <>
          <h1>Rubix Cube Simulator</h1>
          <div id="rubix-cube">
            {faces}
            <Tools cube={cube} onChange={updateCube} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default RubixCube;
