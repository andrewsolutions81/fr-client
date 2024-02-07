//apiAuth.ts
import { signupInput , loginInput} from "../types";
import BASE_URL from "../services/apiConfig";
import apiUserById from "./apiUserById";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/features/authSlice";

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
      document.cookie = `token=${token}; path=/; secure; HttpOnly; SameSite=Strict`;
    }

    // fetch/get user info
    const userId = data.data.id;
    const userData = await apiUserById(userId);
    console.log("userData.data",userData.data)
    return userData.data
  } catch (error: any) {
    console.error("❌ apiLogin error :", error);
    return new Error(error)
  }
}
