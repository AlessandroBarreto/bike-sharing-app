import axios, { AxiosResponse } from "axios";

interface Network {
  id: string;
  name: string;
}

interface NetworkResponse {
  networks: Network[];
}

const API_URL = "http://api.citybik.es/v2/";

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
