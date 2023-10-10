import { signupInput } from "../types";
import BASE_URL from "../services/apiConfig";

export const apiSignup = async (user: signupInput) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const response = await fetch(
      `${BASE_URL}/auth/local/signup`,
      requestOptions
    );
    console.log("requestOptions.body",requestOptions.body)
    if (!response.ok) {
      return new Error(`❌ apiSignup response.status: ${response.status}`);
    }

    const res = await response.json();
    console.log("res in apissignup: ",res);
    return res.json()
  } catch (error:any) {
    console.error("❌ apiSignup error :", error);
    return new Error(error);
  }
};
