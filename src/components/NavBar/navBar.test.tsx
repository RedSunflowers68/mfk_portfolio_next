import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";

describe("NavBar Component", () => {
  it("should render the NavBar correctly", () => {
    render(<NavBar />);

    // Check if essential elements are rendered
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
