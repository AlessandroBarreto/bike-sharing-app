import React from "react";
import { render } from "@testing-library/react";
import NetworkDescription from "..";
import { Layer } from "../../enums";
import { Network } from "../../../../api";

jest.mock("../../../../hooks/useNetwork", () => ({
  __esModule: true,
  default: () => ({
    handlers: {
      newtorksPerCountry: jest.fn(),
    },
  }),
}));

describe("NetworkDescription component", () => {
  const network: Network = {
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

  it("should render the network name, country, and city for Layer.L1", () => {
    const { getByText } = render(
      <NetworkDescription network={network} currentLayer={Layer.L1} />
    );

    expect(getByText(`Name: ${network.name}`)).toBeTruthy();
    expect(getByText(`Country: ${network.location.country}`)).toBeTruthy();
    expect(getByText(`City: ${network.location.city}`)).toBeTruthy();
  });

  it("should render the number of stations for Layer.L2", () => {
    const { getByText } = render(
      <NetworkDescription network={network} currentLayer={Layer.L2} />
    );

    expect(getByText(`Stations(${network.company.length})`)).toBeTruthy();
    network.company.forEach((station) => {
      expect(getByText(station)).toBeTruthy();
    });
  });

  it("should render the country and networks for Layer.L3", () => {
    const { getByText } = render(
      <NetworkDescription network={network} currentLayer={Layer.L3} />
    );

    expect(getByText(`Country: ${network.location.country}`)).toBeTruthy();
    expect(getByText(`Networks : ${undefined}`)).toBeTruthy();
  });
});
