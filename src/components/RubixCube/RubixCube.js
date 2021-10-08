import React, { useEffect, useState } from "react";
import Tools from "./components/Tools";
import { sleep, renderFaces, generateCube } from "./lib/utils";
import { Faces, Clockwise, CounterClockwise } from "./lib/consts";
import { rotateFace } from "./lib/rotation";

const RubixCube = () => {
  const [cube, setCube] = useState([]);
  const [faces, setFaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasRanAnimation, setHasRanAnimation] = useState(false);

  function animateButtonClicks(face, direction) {
    const newCube = rotateFace(cube, face, direction);
    updateCube(newCube);
  }

  //Generate Rubix Cube and set UI on initial load
  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
      setCube(generateCube());
      return null;
    }
  }, [isLoading]);

  useEffect(async () => {
    if (!isLoading && !hasRanAnimation) {
      setHasRanAnimation(true);
      await sleep(1000);
      animateButtonClicks(Faces[0], Clockwise);
      await sleep(2000);
      animateButtonClicks(Faces[1], CounterClockwise);
      await sleep(2000);
      animateButtonClicks(Faces[2], Clockwise);
      await sleep(2000);
      animateButtonClicks(Faces[3], CounterClockwise);
      await sleep(2000);
      animateButtonClicks(Faces[4], Clockwise);
      await sleep(2000);
      animateButtonClicks(Faces[5], CounterClockwise);
      return null;
    }
  }, [isLoading]);

  //Update Rubix Cube faces when cube state changed
  useEffect(() => {
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
