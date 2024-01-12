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

const img = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Kuopio%2C_Apartment_house_in_Kuopio.JPG"
export const fetchHomes = async () => {
  return new Promise<{ message: string; data: any[] }>((resolve) => {
    setTimeout(() => {
      resolve({
        message: "✅ All homes found:",
        data: [
          {
            id: "cllckwaeg0000ug4oz7ju09f8",
            title: "Lindo apartamento",
            available: false,
            description: "el mejor apartamento del mundo",
            neighborhood: "home neighborhood example",
            address: "home address example",
            notes: "home notes example",
            images_url: [
              {
              secure_url :"https://upload.wikimedia.org/wikipedia/commons/e/ee/Red_Power_Wagon_WM-100.jpg"
            },
              {
              secure_url :"https://upload.wikimedia.org/wikipedia/commons/3/31/1966_Chevrolet_C10_pickup_truck_%289581019245%29.jpg"
            },
              {
              secure_url :img
            },
            ],
            price: 250,
            area: 100,
            floor: 3,
            rooms: 3,
            bathrooms: 3,
            storage: 1,
            antiquity: 1,
            parking_spots: 2,
            favorite_users: [
              {
                id: "clletyypt0000ugwcrxozml9p",
                username: "Sergio",
                email: "2email@example.com",
                password: "password example",
                phone_number: 313123456,
                is_admin: false,
                createdAt: "2023-08-17T07:19:01.685Z",
                updatedAt: "2023-08-17T07:19:01.685Z",
              },
              {
                id: "clleucyry0001ugr2gb9yploi",
                username: "juan",
                email: "3email@example.com",
                password: "password example",
                phone_number: 313123456,
                is_admin: false,
                createdAt: "2023-08-17T07:29:54.946Z",
                updatedAt: "2023-08-17T07:29:54.946Z",
              },
              {
                id: "cllevunhu0000ugisyex2ujx4",
                username: "new schema",
                email: "4email@example.com",
                password: "password example",
                phone_number: 313123456,
                is_admin: false,
                createdAt: "2023-08-17T08:11:39.750Z",
                updatedAt: "2023-08-17T08:11:39.750Z",
              },
              {
                id: "cllcviwbx0001ugi5uqde184f",
                username: " Martin Diaz ",
                email: "1email@example.com",
                password: "123456",
                phone_number: 313123456,
                is_admin: false,
                createdAt: "2023-08-15T22:26:58.989Z",
                updatedAt: "2023-08-23T21:52:20.641Z",
              },
            ],
            createdAt: "2023-08-15T17:29:27.974Z",
            updatedAt: "2023-08-15T17:29:27.974Z",
          },
          {
            id: "cllcp8wiy0001ugdu2dbpevs5",
            title: " third home title example",
            available: false,
            description: "home description example",
            neighborhood: "home neighborhood example",
            address: "home address example",
            notes: "home notes example",
            images_url: [
              {
              secure_url :"https://upload.wikimedia.org/wikipedia/commons/3/31/1966_Chevrolet_C10_pickup_truck_%289581019245%29.jpg"
            },
              {
              secure_url :img
            },
              {
              secure_url :img
            },
            ],
            price: 250,
            area: 100,
            floor: 3,
            rooms: 3,
            bathrooms: 3,
            storage: 1,
            antiquity: 1,
            parking_spots: 2,
            favorite_users: [
              {
                id: "clletyypt0000ugwcrxozml9p",
                username: "Sergio",
                email: "2email@example.com",
                password: "password example",
                phone_number: 313123456,
                is_admin: false,
                createdAt: "2023-08-17T07:19:01.685Z",
                updatedAt: "2023-08-17T07:19:01.685Z",
              },
              {
                id: "clleucyry0001ugr2gb9yploi",
                username: "juan",
                email: "3email@example.com",
                password: "password example",
                phone_number: 313123456,
                is_admin: false,
                createdAt: "2023-08-17T07:29:54.946Z",
                updatedAt: "2023-08-17T07:29:54.946Z",
              },
              {
                id: "cllevunhu0000ugisyex2ujx4",
                username: "new schema",
                email: "4email@example.com",
                password: "password example",
                phone_number: 313123456,
                is_admin: false,
                createdAt: "2023-08-17T08:11:39.750Z",
                updatedAt: "2023-08-17T08:11:39.750Z",
              },
            ],
            createdAt: "2023-08-15T19:31:14.986Z",
            updatedAt: "2023-08-15T19:31:14.986Z",
          },
          {
            id: "cllcve5030000ug8wacq8uj03",
            title: " fourth home title example",
            available: false,
            description: "home description example",
            neighborhood: "home neighborhood example",
            address: "home address example",
            notes: "home notes example",
            images_url: [
              {
              secure_url :img
            },
              {
              secure_url :img
            },
              {
              secure_url :img
            },
            ],
            price: 250,
            area: 100,
            floor: 3,
            rooms: 3,
            bathrooms: 3,
            storage: 1,
            antiquity: 1,
            parking_spots: 2,
            favorite_users: [
              {
                id: "clletyypt0000ugwcrxozml9p",
                username: "Sergio",
                email: "2email@example.com",
                password: "password example",
                phone_number: 313123456,
                is_admin: false,
                createdAt: "2023-08-17T07:19:01.685Z",
                updatedAt: "2023-08-17T07:19:01.685Z",
              },
              {
                id: "clleucyry0001ugr2gb9yploi",
                username: "juan",
                email: "3email@example.com",
                password: "password example",
                phone_number: 313123456,
                is_admin: false,
                createdAt: "2023-08-17T07:29:54.946Z",
                updatedAt: "2023-08-17T07:29:54.946Z",
              },
              {
                id: "cllevunhu0000ugisyex2ujx4",
                username: "new schema",
                email: "4email@example.com",
                password: "password example",
                phone_number: 313123456,
                is_admin: false,
                createdAt: "2023-08-17T08:11:39.750Z",
                updatedAt: "2023-08-17T08:11:39.750Z",
              },
            ],
            createdAt: "2023-08-15T22:23:16.933Z",
            updatedAt: "2023-08-15T22:23:16.933Z",
          },
        ],
      });
    // }, 1000); // 1000 milliseconds (1 second) delay
    }, 1);
  });
};
