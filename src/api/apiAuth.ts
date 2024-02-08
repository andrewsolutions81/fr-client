//apiAuth.ts
import { signupInput , loginInput} from "../types";
import BASE_URL from "../services/apiConfig";
import apiUserById from "./apiUserById";

const getToken = () => document.cookie

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

    console.log("data in apiSignup: ",data)
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

    //store the token
    if (data.token) {
      const token = data.token
      // document.cookie = `token=${token}; path=/; secure; HttpOnly; SameSite=Strict`;
      document.cookie = `token=${token}`;
    }

    // fetch/get user info
    const userId = data.data.id;
    const userData = await apiUserById(userId);
    return userData.data
  } catch (error: any) {
    console.error("❌ apiLogin error :", error);
    return new Error(error)
  }
}

export const apiSecureLogin = async (user: loginInput) => {
  try {
    const token = getToken();
    console.log("🚀 ~ apiSecureLogin ~ token:", token)

    if (!token) {
      throw new Error("Token not available");
    }

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(user),//this can't be done
    };

    const response = await fetch(`${BASE_URL}/auth/local/login/secure/`, options);

    if (!response.ok) {
      throw new Error(`❌ apiSecureRoute response.status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data from secure route:", data);

    return data;
  } catch (error: any) {
    console.error("❌ apiSecureRoute error:", error);
    return new Error(error);
  }
};
