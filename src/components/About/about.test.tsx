import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";

describe("About Component", () => {
  it("should render the About correctly", () => {
    render(<About />);

    // Check if essential elements are rendered
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("Tools I use")).toBeInTheDocument();
  });
});
