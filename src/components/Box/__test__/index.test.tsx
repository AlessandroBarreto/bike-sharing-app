import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Box from "..";
import { Network } from "../../../api";

jest.mock("../../../hooks/useNetwork", () => ({
  __esModule: true,
  default: () => ({
    handlers: {
      newtorksPerCountry: jest.fn(),
    },
  }),
}));

const mockNetwork: Network = {
  name: "Test Network",
  location: {
    country: "Test Country",
    city: "Test City",
    latitude: 0,
    longitude: 0,
  },
  company: ["Company A", "Company B", "Company C"],
  id: "1",
  href: "",
};

describe("Box component", () => {
  test("renders with box-container class", () => {
    const { container } = render(<Box network={mockNetwork} />);

    const boxContainer = container.getElementsByClassName("box-container");
    expect(boxContainer.length).toBe(1);
  });

  test("clicking on a layer updates the current layer", () => {
    const { getByText } = render(<Box network={mockNetwork} />);
    const layerL2 = getByText("L2");

    fireEvent.click(layerL2);

    expect(layerL2).toHaveClass("current-layer");
  });
});
