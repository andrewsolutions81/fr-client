import { signupInput } from "../types";
import BASE_URL from "../services/apiConfig";

export const apiSignup = async (user: signupInput) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(`${BASE_URL}/auth/local/signup`, options);

    if (!response.ok) {
      return new Error(`❌ apiSignup response.status: ${response.status}`);
    }

    return response.json();
  } catch (error: any) {
    console.error("❌ apiSignup error :", error);
    return new Error(error);
  }
};
