import { signupInput , loginInput} from "../types";
import BASE_URL from "../services/apiConfig";
import { isTokenStored } from "../services/loggedUserService";



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

    const data = await response.json();

    if (data.token) {
      document.cookie = `token=${data.token}; path=/; secure; HttpOnly; SameSite=Strict`;
    } else {
      return new Error(`❌ apiSignup  token error.`);
    }

    return data;
  } catch (error: any) {
    console.error("❌ apiSignup error :", error);
    return new Error(error);
  }
};

export const apiLogin = async (user: loginInput) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(`${BASE_URL}/auth/local/login`, options);
    const data = await response.json();

    if (data.token) {
      document.cookie = `token=${data.token}; path=/; secure; HttpOnly; SameSite=Strict`;
    }
    if(!isTokenStored){
      console.error("❌ apiLogin error, no cookie token stored.");
    }

    return data
  } catch (error: any) {
    console.error("❌ apiLogin error :", error);
    return new Error(error)
  }
}
