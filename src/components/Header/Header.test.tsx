import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("should render the Header correctly", () => {
    render(<Header />);

    // Check if essential elements are rendered
    expect(screen.getByText("Hi! I am Mary Kilduff")).toBeInTheDocument();
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
    expect(
      screen.getByText("Software Developer based in USA")
    ).toBeInTheDocument();
  });
});
