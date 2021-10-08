import { Faces, Clockwise, CounterClockwise } from "../lib/consts";

/**
 * Rotates the current face either clockwise
 * or counter clockwise
 * @param {Array} face
 * @param {Array} cube
 * @param {Integer} direction
 * @returns
 */
const rotateCurrentFace = (face, cube, direction) => {
  const cell1 = cube[face][0][0];
  const cell2 = cube[face][0][1];
  const cell3 = cube[face][0][2];
  const cell4 = cube[face][1][0];
  const cell6 = cube[face][1][2];
  const cell7 = cube[face][2][0];
  const cell8 = cube[face][2][1];
  const cell9 = cube[face][2][2];

  cube[face][0][0] = direction === Clockwise ? cell7 : cell3;
  cube[face][0][1] = direction === Clockwise ? cell4 : cell6;
  cube[face][0][2] = direction === Clockwise ? cell1 : cell9;
  cube[face][1][0] = direction === Clockwise ? cell8 : cell2;
  cube[face][1][2] = direction === Clockwise ? cell2 : cell8;
  cube[face][2][0] = direction === Clockwise ? cell9 : cell1;
  cube[face][2][1] = direction === Clockwise ? cell6 : cell4;
  cube[face][2][2] = direction === Clockwise ? cell3 : cell7;
  return cube;
};

/**
 * Rotates the front face,
 * along with cells from other faces,
 * either clockwise or counter clockwise.
 * @param {Array} cube
 * @param {Integer} direction
 * @returns
 */
const rotateFrontFace = (cube, direction) => {
  const upFaceCell20 = cube[2][2][0];
  const upFaceCell21 = cube[2][2][1];
  const upFaceCell22 = cube[2][2][2];
  const rightFaceCell00 = cube[1][0][0];
  const rightFaceCell10 = cube[1][1][0];
  const rightFaceCell20 = cube[1][2][0];
  const downFaceCell00 = cube[5][0][0];
  const downFaceCell01 = cube[5][0][1];
  const downFaceCell02 = cube[5][0][2];
  const leftFaceCell02 = cube[4][0][2];
  const leftFaceCell12 = cube[4][1][2];
  const leftFaceCell22 = cube[4][2][2];

  cube = rotateCurrentFace(0, cube, direction);
  switch (direction) {
    case Clockwise:
      //Up Face
      cube[2][2][0] = leftFaceCell02;
      cube[2][2][1] = leftFaceCell12;
      cube[2][2][2] = leftFaceCell22;

      //Right Face
      cube[1][0][0] = upFaceCell20;
      cube[1][1][0] = upFaceCell21;
      cube[1][2][0] = upFaceCell22;

      //Down Face
      cube[5][0][0] = rightFaceCell00;
      cube[5][0][1] = rightFaceCell10;
      cube[5][0][2] = rightFaceCell20;

      //Left Face
      cube[4][0][2] = downFaceCell00;
      cube[4][1][2] = downFaceCell01;
      cube[4][2][2] = downFaceCell02;

      break;
    case CounterClockwise:
      //Up Face
      cube[2][2][0] = rightFaceCell00;
      cube[2][2][1] = rightFaceCell10;
      cube[2][2][2] = rightFaceCell20;

      //Right Face
      cube[1][0][0] = downFaceCell00;
      cube[1][1][0] = downFaceCell01;
      cube[1][2][0] = downFaceCell02;

      //Down Face
      cube[5][0][0] = leftFaceCell02;
      cube[5][0][1] = leftFaceCell12;
      cube[5][0][2] = leftFaceCell22;

      //Left Face
      cube[4][0][2] = upFaceCell20;
      cube[4][1][2] = upFaceCell21;
      cube[4][2][2] = upFaceCell22;

      break;
  }
  return cube;
};

/**
 * Rotates the right face,
 * along with cells from other faces,
 * either clockwise or counter clockwise.
 * @param {Array} cube
 * @param {Integer} direction
 * @returns
 */
const rotateRightFace = (cube, direction) => {
  const upFaceCell02 = cube[2][0][2];
  const upFaceCell12 = cube[2][1][2];
  const upFaceCell22 = cube[2][2][2];
  const frontFaceCell02 = cube[0][0][2];
  const frontFaceCell12 = cube[0][1][2];
  const frontFaceCell22 = cube[0][2][2];
  const downFaceCell02 = cube[5][0][2];
  const downFaceCell12 = cube[5][1][2];
  const downFaceCell22 = cube[5][2][2];
  const backFaceCell00 = cube[3][0][0];
  const backFaceCell10 = cube[3][1][0];
  const backFaceCell20 = cube[3][2][0];

  cube = rotateCurrentFace(1, cube, direction);

  switch (direction) {
    case Clockwise:
      //Up Face
      cube[2][0][2] = frontFaceCell02;
      cube[2][1][2] = frontFaceCell12;
      cube[2][2][2] = frontFaceCell22;

      //Front Face
      cube[0][0][2] = downFaceCell02;
      cube[0][1][2] = downFaceCell12;
      cube[0][2][2] = downFaceCell22;

      //Down Face
      cube[5][2][2] = backFaceCell00;
      cube[5][1][2] = backFaceCell10;
      cube[5][0][2] = backFaceCell20;

      //Back Face
      cube[3][2][0] = upFaceCell02;
      cube[3][1][0] = upFaceCell12;
      cube[3][0][0] = upFaceCell22;

      break;
    case CounterClockwise:
      //Up Face
      cube[2][2][2] = backFaceCell00;
      cube[2][1][2] = backFaceCell10;
      cube[2][0][2] = backFaceCell20;

      //Front Face
      cube[0][0][2] = upFaceCell02;
      cube[0][1][2] = upFaceCell12;
      cube[0][2][2] = upFaceCell22;

      //Down Face
      cube[5][0][2] = frontFaceCell02;
      cube[5][1][2] = frontFaceCell12;
      cube[5][2][2] = frontFaceCell22;

      //Back Face
      cube[3][2][0] = downFaceCell02;
      cube[3][1][0] = downFaceCell12;
      cube[3][0][0] = downFaceCell22;

      break;
  }

  return cube;
};

/**
 * Rotates the up face,
 * along with cells from other faces,
 * either clockwise or counter clockwise.
 * @param {Array} cube
 * @param {Integer} direction
 * @returns
 */
const rotateUpFace = (cube, direction) => {
  const rightFaceCell00 = cube[1][0][0];
  const rightFaceCell01 = cube[1][0][1];
  const rightFaceCell02 = cube[1][0][2];
  const frontFaceCell00 = cube[0][0][0];
  const frontFaceCell01 = cube[0][0][1];
  const frontFaceCell02 = cube[0][0][2];
  const leftFaceCell00 = cube[4][0][0];
  const leftFaceCell01 = cube[4][0][1];
  const leftFaceCell02 = cube[4][0][2];
  const backFaceCell00 = cube[3][0][0];
  const backFaceCell01 = cube[3][0][1];
  const backFaceCell02 = cube[3][0][2];

  cube = rotateCurrentFace(2, cube, direction);
  switch (direction) {
    case Clockwise:
      //Right Face
      cube[1][0][0] = backFaceCell00;
      cube[1][0][1] = backFaceCell01;
      cube[1][0][2] = backFaceCell02;

      //Front Face
      cube[0][0][0] = rightFaceCell00;
      cube[0][0][1] = rightFaceCell01;
      cube[0][0][2] = rightFaceCell02;

      //Left Face
      cube[4][0][0] = frontFaceCell00;
      cube[4][0][1] = frontFaceCell01;
      cube[4][0][2] = frontFaceCell02;

      //Back Face
      cube[3][0][0] = leftFaceCell00;
      cube[3][0][1] = leftFaceCell01;
      cube[3][0][2] = leftFaceCell02;

      break;
    case CounterClockwise:
      //Right Face
      cube[1][0][0] = frontFaceCell00;
      cube[1][0][1] = frontFaceCell01;
      cube[1][0][2] = frontFaceCell02;

      //Front Face
      cube[0][0][0] = leftFaceCell00;
      cube[0][0][1] = leftFaceCell01;
      cube[0][0][2] = leftFaceCell02;

      //Left Face
      cube[4][0][0] = backFaceCell00;
      cube[4][0][1] = backFaceCell01;
      cube[4][0][2] = backFaceCell02;

      //Back Face
      cube[3][0][0] = rightFaceCell00;
      cube[3][0][1] = rightFaceCell01;
      cube[3][0][2] = rightFaceCell02;

      break;
  }
  return cube;
};

/**
 * Rotates the back face,
 * along with cells from other faces,
 * either clockwise or counter clockwise.
 * @param {Array} cube
 * @param {Integer} direction
 * @returns
 */
const rotateBackFace = (cube, direction) => {
  const rightFaceCell02 = cube[1][0][2];
  const rightFaceCell12 = cube[1][1][2];
  const rightFaceCell22 = cube[1][2][2];
  const upFaceCell00 = cube[2][0][0];
  const upFaceCell01 = cube[2][0][1];
  const upFaceCell02 = cube[2][0][2];
  const leftFaceCell00 = cube[4][0][0];
  const leftFaceCell10 = cube[4][1][0];
  const leftFaceCell20 = cube[4][2][0];
  const downFaceCell20 = cube[5][2][0];
  const downFaceCell21 = cube[5][2][1];
  const downFaceCell22 = cube[5][2][2];

  cube = rotateCurrentFace(3, cube, direction);
  switch (direction) {
    case Clockwise:
      //Right Face
      cube[1][2][2] = downFaceCell20;
      cube[1][1][2] = downFaceCell21;
      cube[1][0][2] = downFaceCell22;

      //Up Face
      cube[2][0][0] = rightFaceCell02;
      cube[2][0][1] = rightFaceCell12;
      cube[2][0][2] = rightFaceCell22;

      //Left Face
      cube[4][2][0] = upFaceCell00;
      cube[4][1][0] = upFaceCell01;
      cube[4][0][0] = upFaceCell02;

      //Down Face
      cube[5][2][0] = leftFaceCell00;
      cube[5][2][1] = leftFaceCell10;
      cube[5][2][2] = leftFaceCell20;

      break;
    case CounterClockwise:
      //Right Face
      cube[1][0][2] = upFaceCell00;
      cube[1][1][2] = upFaceCell01;
      cube[1][2][2] = upFaceCell02;

      //Up Face
      cube[2][0][2] = leftFaceCell00;
      cube[2][0][1] = leftFaceCell10;
      cube[2][0][0] = leftFaceCell20;

      //Left Face
      cube[4][0][0] = downFaceCell20;
      cube[4][1][0] = downFaceCell21;
      cube[4][2][0] = downFaceCell22;

      //Down Face
      cube[5][2][2] = rightFaceCell02;
      cube[5][2][1] = rightFaceCell12;
      cube[5][2][0] = rightFaceCell22;
      break;
  }
  return cube;
};

/**
 * Rotates the left face,
 * along with cells from other faces,
 * either clockwise or counter clockwise.
 * @param {Array} cube
 * @param {Integer} direction
 * @returns
 */
const rotateLeftFace = (cube, direction) => {
  const frontFaceCell00 = cube[0][0][0];
  const frontFaceCell10 = cube[0][1][0];
  const frontFaceCell20 = cube[0][2][0];
  const upFaceCell00 = cube[2][0][0];
  const upFaceCell10 = cube[2][1][0];
  const upFaceCell20 = cube[2][2][0];
  const backFaceCell02 = cube[3][0][2];
  const backFaceCell12 = cube[3][1][2];
  const backFaceCell22 = cube[3][2][2];
  const downFaceCell00 = cube[5][0][0];
  const downFaceCell10 = cube[5][1][0];
  const downFaceCell20 = cube[5][2][0];

  cube = rotateCurrentFace(4, cube, direction);
  switch (direction) {
    case Clockwise:
      //Front Face
      cube[0][0][0] = upFaceCell00;
      cube[0][1][0] = upFaceCell10;
      cube[0][2][0] = upFaceCell20;

      //Up Face
      cube[2][2][0] = backFaceCell02;
      cube[2][1][0] = backFaceCell12;
      cube[2][0][0] = backFaceCell22;

      //Back Face
      cube[3][2][2] = downFaceCell00;
      cube[3][1][2] = downFaceCell10;
      cube[3][0][2] = downFaceCell20;

      //Down Face
      cube[5][0][0] = frontFaceCell00;
      cube[5][1][0] = frontFaceCell10;
      cube[5][2][0] = frontFaceCell20;

      break;
    case CounterClockwise:
      //Front Face
      cube[0][0][0] = downFaceCell00;
      cube[0][1][0] = downFaceCell10;
      cube[0][2][0] = downFaceCell20;

      //Up Face
      cube[2][0][0] = frontFaceCell00;
      cube[2][1][0] = frontFaceCell10;
      cube[2][2][0] = frontFaceCell20;

      //Back Face
      cube[3][2][2] = upFaceCell00;
      cube[3][1][2] = upFaceCell10;
      cube[3][0][2] = upFaceCell20;

      //Down Face
      cube[5][2][0] = backFaceCell02;
      cube[5][1][0] = backFaceCell12;
      cube[5][0][0] = backFaceCell22;
      break;
  }
  return cube;
};

/**
 * Rotates the down face,
 * along with cells from other faces,
 * either clockwise or counter clockwise.
 * @param {Array} cube
 * @param {Integer} direction
 * @returns
 */
const rotateDownFace = (cube, direction) => {
  const frontFaceCell20 = cube[0][2][0];
  const frontFaceCell21 = cube[0][2][1];
  const frontFaceCell22 = cube[0][2][2];
  const leftFaceCell20 = cube[4][2][0];
  const leftFaceCell21 = cube[4][2][1];
  const leftFaceCell22 = cube[4][2][2];
  const backFaceCell20 = cube[3][2][0];
  const backFaceCell21 = cube[3][2][1];
  const backFaceCell22 = cube[3][2][2];
  const rightFaceCell20 = cube[1][2][0];
  const rightFaceCell21 = cube[1][2][1];
  const rightFaceCell22 = cube[1][2][2];

  cube = rotateCurrentFace(5, cube, direction);
  switch (direction) {
    case Clockwise:
      //Front Face
      cube[0][2][0] = leftFaceCell20;
      cube[0][2][1] = leftFaceCell21;
      cube[0][2][2] = leftFaceCell22;

      //Left Face
      cube[4][2][0] = backFaceCell20;
      cube[4][2][1] = backFaceCell21;
      cube[4][2][2] = backFaceCell22;

      //Back Face
      cube[3][2][0] = rightFaceCell20;
      cube[3][2][1] = rightFaceCell21;
      cube[3][2][2] = rightFaceCell22;

      //Right Face
      cube[1][2][0] = frontFaceCell20;
      cube[1][2][1] = frontFaceCell21;
      cube[1][2][2] = frontFaceCell22;

      break;
    case CounterClockwise:
      //Front Face
      cube[0][2][0] = rightFaceCell20;
      cube[0][2][1] = rightFaceCell21;
      cube[0][2][2] = rightFaceCell22;

      //Left Face
      cube[4][2][0] = frontFaceCell20;
      cube[4][2][1] = frontFaceCell21;
      cube[4][2][2] = frontFaceCell22;

      //Back Face
      cube[3][2][0] = leftFaceCell20;
      cube[3][2][1] = leftFaceCell21;
      cube[3][2][2] = leftFaceCell22;

      //Right Face
      cube[1][2][0] = backFaceCell20;
      cube[1][2][1] = backFaceCell21;
      cube[1][2][2] = backFaceCell22;
      break;
  }
  return cube;
};


/**
 * Rotates the inputted face.
 * Exported for use with tools onClick events.
 * @param {Array} cube
 * @param {Integer} direction
 * @returns
 */
export const rotateFace = (cube, face, direction) => {
  switch (face) {
    //Front
    case Faces[0]:
      cube = rotateFrontFace(cube, direction);
      break;
    //Right
    case Faces[1]:
      cube = rotateRightFace(cube, direction);
      break;
    //Up
    case Faces[2]:
      cube = rotateUpFace(cube, direction);
      break;
    //Back
    case Faces[3]:
      cube = rotateBackFace(cube, direction);
      break;
    //Left
    case Faces[4]:
      cube = rotateLeftFace(cube, direction);
      break;
    //Down
    case Faces[5]:
      cube = rotateDownFace(cube, direction);
      break;
  }
  return cube;
};
