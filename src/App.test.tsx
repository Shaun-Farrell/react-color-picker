import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header and pickers", () => {
  render(<App />);
  const title = screen.getByText(/Colour Picker/i);
  const canvas = screen.getByTestId("canvas");
  const canvasPanel = screen.getByTestId("canvasPanel");
  expect(title).toBeInTheDocument();
  expect(canvas).toBeInTheDocument();
  expect(canvasPanel).toBeInTheDocument();
});
