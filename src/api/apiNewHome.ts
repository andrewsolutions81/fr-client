import { newHomeInput } from "../types";
import BASE_URL from "../services/apiConfig";

export const apiNewHome = async (home: newHomeInput) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(home),
    };
    const response = await fetch(`${BASE_URL}/api/homes`, options);

    if (!response.ok) {
      return new Error(`❌ apiNewHome response.status: ${response.status}`);
    }

    const data = await response.json();

    if (data) {
      return data
    } else {
      return new Error(`❌ apiNewHome  error.`);
    }

  } catch (error: any) {
    console.error("❌ apiNewHome error :", error);
    return new Error(error);
  }
};
