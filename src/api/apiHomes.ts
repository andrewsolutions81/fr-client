//apiHomes.ts
import BASE_URL from "../services/apiConfig";

const apiHomes = async ()=> {
  try {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `${BASE_URL}/api/homes`,
      requestOptions
    );
    if (!response.ok) {
      return new Error(`❌ apiHomes response.status: ${response.status}`);
    }

    const res = await response.json();
    return res

  } catch (error:any) {
    console.error("❌ apiHomes error :", error);
    return new Error(error);
  }
}

export default apiHomes
