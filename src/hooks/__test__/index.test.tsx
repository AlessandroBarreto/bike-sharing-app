import { act, renderHook } from "@testing-library/react";
import { Network, fetchNetworks } from "../../api";
import useNetwork from "../useNetwork";

jest.mock("../../api", () => ({
  fetchNetworks: jest.fn(),
}));

const mockNetworks: Network[] = [
  {
    company: ["Company A"],
    href: "network/1",
    id: "1",
    location: {
      city: "City A",
      country: "USA",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    name: "Network A",
  },
  {
    company: ["Company B"],
    href: "network/2",
    id: "2",
    location: {
      city: "City B",
      country: "Canada",
      latitude: 45.4215,
      longitude: -75.6919,
    },
    name: "Network B",
  },
  {
    company: ["Company C"],
    href: "network/3",
    id: "3",
    location: {
      city: "City C",
      country: "USA",
      latitude: 34.0522,
      longitude: -118.2437,
    },
    name: "Network C",
  },
];

describe("useNetwork", () => {
  it("should fetch and return networks data", async () => {
    (
      fetchNetworks as jest.MockedFunction<typeof fetchNetworks>
    ).mockResolvedValue(mockNetworks);

    const { result } = renderHook(() => useNetwork());

    await act(async () => {
      await new Promise<void>((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.data.networks).toEqual(mockNetworks);
  });

  it("should return correct number of networks per country", async () => {
    (
      fetchNetworks as jest.MockedFunction<typeof fetchNetworks>
    ).mockResolvedValue(mockNetworks);

    const { result } = renderHook(() => useNetwork());

    await act(async () => {
      await new Promise<void>((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.handlers.newtorksPerCountry("USA")).toBe(2);
    expect(result.current.handlers.newtorksPerCountry("Canada")).toBe(1);
    expect(result.current.handlers.newtorksPerCountry("UK")).toBe(0);
  });
});
