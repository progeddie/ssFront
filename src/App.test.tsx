import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Divide count", () => {
  render(<App />);
  const linkElement = screen.getByText(/Divide count/i);
  expect(linkElement).toBeInTheDocument();
});
