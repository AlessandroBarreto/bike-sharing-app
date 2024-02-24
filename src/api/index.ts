import axios, { AxiosResponse } from "axios";

export interface Network {
  location: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  name: string;
  id: string;
}

interface NetworkResponse {
  networks: Network[];
}

const API_URL = "https://api.citybik.es/v2";

export const fetchNetworks = async (): Promise<Network[]> => {
  try {
    const response: AxiosResponse<NetworkResponse> = await axios.get(
      `${API_URL}/networks`
    );
    return response.data.networks;
  } catch (error) {
    console.error("Error fetching networks:", error);
    throw error;
  }
};
