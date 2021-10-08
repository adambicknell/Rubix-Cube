import React, { useEffect, useState } from "react";
import { Faces } from "./lib/consts";
import Tools from "./components/Tools";
import { renderFaces, generateCubeFace } from "./lib/utils";

const RubixCube = () => {
  const [cube, setCube] = useState([]);
  const [faces, setFaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    if (isLoading) {
      setIsLoading(false);
      setCube([
        generateCubeFace(Faces[0], "green"),
        generateCubeFace(Faces[1], "red"),
        generateCubeFace(Faces[2], "white"),
        generateCubeFace(Faces[3], "blue"),
        generateCubeFace(Faces[4], "orange"),
        generateCubeFace(Faces[5], "yellow"),
      ]);
      return null;
    }
  }, [isLoading]);

  useEffect(async () => {
    console.log(cube);
    if (cube.length) {
      setFaces(renderFaces(cube));
      return null;
    }
  }, [cube]);

  function updateCube(cube) {
    setCube(cube);
    setFaces(renderFaces(cube));
  }

  return (
    <div>
      {cube?.[0] ? (
        <div>
          {faces}
          <Tools cube={cube} faces={faces} onChange={updateCube} />
        </div>
      ) : null}
    </div>
  );
};

export default RubixCube;
