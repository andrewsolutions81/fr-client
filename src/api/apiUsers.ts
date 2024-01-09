import BASE_URL from "../services/apiConfig";

const apiUsers = async () => {
  try {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `${BASE_URL}/api/users/`,
      requestOptions
    );
    if (!response.ok) {
      return new Error(`❌ apiUsers response.status: ${response.status}`);
    }

    const res = await response.json();
    // console.log("apiUsers: ",res);
    return res
  } catch (error:any) {
    console.error("❌ apiUsers error :", error);
    return new Error(error);
  }
};

export default apiUsers
