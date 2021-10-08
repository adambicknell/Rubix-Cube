import React, { useEffect, useState } from "react";
import { Faces } from "./lib/consts";
import { generateCubeFace } from "./lib/utils";

const RubixCube = () => {
  const [cube, setCube] = useState([]);
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

 

  return (
    <div>
     
    </div>
  );
};

export default RubixCube;