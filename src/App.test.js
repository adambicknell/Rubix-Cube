import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders rubix cube title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Rubix Cube Simulator/i);
  expect(linkElement).toBeInTheDocument();
});

test("check the correct number of faces are rendered", () => {
  render(<App />);
  const tables = screen.getAllByRole("table");
  if (tables.length != 6) {
    throw new Error("There was an incorrect number of faces.");
  }
});

test("check all rotation buttons work", () => {
  render(<App />);
  const rotateFront = screen.getAllByRole("button", {
    name: /F/i,
  });
  const rotateRight = screen.getAllByRole("button", {
    name: /R/i,
  });
  const rotateUp = screen.getAllByRole("button", {
    name: /U/i,
  });
  const rotateBack = screen.getAllByRole("button", {
    name: /B/i,
  });
  const rotateLeft = screen.getAllByRole("button", {
    name: /L/i,
  });
  const rotateDown = screen.getAllByRole("button", {
    name: /D/i,
  });

  fireEvent.click(rotateFront[0]); //Front Clockwise
  fireEvent.click(rotateFront[1]); //Front Counter Clockwise
  fireEvent.click(rotateRight[0]); //Right Clockwise
  fireEvent.click(rotateRight[1]); //Right Counter Clockwise
  fireEvent.click(rotateUp[0]); //Up Clockwise
  fireEvent.click(rotateUp[1]); //Up Counter Clockwise
  fireEvent.click(rotateBack[0]); //Back Clockwise
  fireEvent.click(rotateBack[1]); //Back Counter Clockwise
  fireEvent.click(rotateLeft[0]); //Left Clockwise
  fireEvent.click(rotateLeft[1]); //Left Counter Clockwise
  fireEvent.click(rotateDown[0]); //Down Clockwise
  fireEvent.click(rotateDown[1]); //Down Counter Clockwise
});
