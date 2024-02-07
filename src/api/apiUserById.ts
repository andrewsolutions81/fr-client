//apiUserById.ts
import BASE_URL from "../services/apiConfig";


const apiUserById = async (id:string)=> {
  try {
    if(!id){
      console.error("❌ No id on apiHomeById.")
      return
    }
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `${BASE_URL}/api/users/${id}`,
      requestOptions
    );
    if (!response.ok) {
      return new Error(`❌ apiUserById response.status: ${response.status}`);
    }

    const res = await response.json();
    return res
  } catch (error:any) {
    console.error("❌ apiUserById error :", error);
    return new Error(error);
  }
}

export default apiUserById

