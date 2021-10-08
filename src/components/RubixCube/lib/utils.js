export const generateCubeFace = (face, colour) => {
  return [
    Array(3).fill({ face: face, colour: colour }),
    Array(3).fill({ face: face, colour: colour }),
    Array(3).fill({ face: face, colour: colour }),
  ];
};
