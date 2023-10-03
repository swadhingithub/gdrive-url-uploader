import axios from "axios";
import baseUrl from "./baseUrl";

export async function getAuthUrl() {
  try {
    const response = await axios.get(`${baseUrl}/api/authorize`);
    return response.data;
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}

export async function getToken(code = "") {
  try {
    const response = await axios.get(`${baseUrl}/api/token?code=${code}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}
