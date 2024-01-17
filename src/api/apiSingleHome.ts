import BASE_URL from "../services/apiConfig";

const apiSingleHome = async (homeId:string) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `${BASE_URL}/api/homes/${homeId}`,
      requestOptions
    );
    if (!response.ok) {
      return new Error(`❌ apiSingleHome response.status: ${response.status}`);
    }

    const res = await response.json();
    return res
  } catch (error:any) {
    console.error("❌ apiSingleHome error :", error);
    return new Error(error);
  }
};

export default apiSingleHome
