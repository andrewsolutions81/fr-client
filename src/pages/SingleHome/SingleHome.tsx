// SingleHome.tsx
import "./SingleHome.style.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { Home } from "../../types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Gallery from "react-image-gallery";

const SingleHome = () => {
  const { id } = useParams();
  const [home, setHome] = useState<null | Home>(null);
  const [loading, setLoading] = useState(false);
  const isAdmin = true;

  useEffect(() => {
    // Simulating an API call to fetch home data by id
    const fetchHomeData = async () => {
      // Replace the following with your actual API call
      // const data = await apiHomeById(id);
      const data = {
        id: "123",
        title: "Beautiful Home",
        available: true,
        description:
          "Great house with great view, amazing space for the location at a reasonable price.",
        neighborhood: "Santa Barbara",
        address: "123 Main Street",
        notes: "Some important notes about the home.",
        images_url: [
          {
            secure_url:
              "https://upload.wikimedia.org/wikipedia/commons/e/ee/Red_Power_Wagon_WM-100.jpg",
          },
          {
            secure_url:
              "https://upload.wikimedia.org/wikipedia/commons/3/31/1966_Chevrolet_C10_pickup_truck_%289581019245%29.jpg",
          },
        ],
        price: 200000,
        area: 150,
        floor: 2,
        rooms: 3,
        bathrooms: 2,
        storage: 1,
        antiquity: 5,
        parking_spots: 2,
        favorite_users: [],
        createdAt: "2022-01-01",
        updatedAt: "2022-01-10",
      };

      setHome(data as any);
      setLoading(false);
    };

    fetchHomeData();
  }, []);

  return (
    <section className="singlehome">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h3 className="singlehome__title">{home?.title}</h3>
          <div className="singlehome__image--container">
            {home?.images_url && (
              <Gallery
                items={home.images_url.map((image) => ({
                  original: image.secure_url,
                  thumbnail: image.secure_url,
                }))}
              />
            )}
          </div>
          <div className="singlehome__info--container">
            <p className="singlehome__description--span">
              Descripción general:
            </p>
            <p className="singlehome__description">{home?.description}</p>
            <section className="singlehome__grid--container">
              {/* admin section  */}
              {isAdmin && (
                <>
                  <div className="singlehome__grid--item name notes">
                    <span className="material-icons icon description-icon red">
                      description
                    </span>
                    Notas:
                  </div>
                  <div className="singlehome__grid--item value notes">
                    {home?.notes}
                  </div>

                  <div className="singlehome__grid--item name address">
                    <span className="material-icons icon explore-icon red">
                      explore
                    </span>
                    Direccion:
                  </div>
                  <div className="singlehome__grid--item value address">
                    {home?.address}
                  </div>

                  <div className="singlehome__grid--item name createdAt">
                    <span className="material-icons icon add_circle-icon red">
                      add_circle
                    </span>
                    Creado el :
                  </div>
                  <div className="singlehome__grid--item value createdAt">
                    {home?.createdAt}
                  </div>

                  <div className="singlehome__grid--item name updatedAt">
                    <span className="material-icons icon sync_alt-icon red">
                      sync_alt
                    </span>
                    Modificado el :
                  </div>
                  <div className="singlehome__grid--item value updatedAt">
                    {home?.updatedAt}
                  </div>
                </>
              )}
              {/* user section */}
              <div className="singlehome__grid--item name id">
                <span className="material-icons icon tag-icon">tag</span>
                Id:
              </div>
              <div className="singlehome__grid--item value id">{home?.id}</div>

              <div className="singlehome__grid--item name available">
                <span className="material-icons icon check_box-icon">
                  check_box
                </span>
                Disponible :
              </div>
              <div className="singlehome__grid--item value available">
                {home?.available ? "Si" : "No"}
              </div>
              <div className="singlehome__grid--item name id">
                <span className="material-icons icon paid-icon">paid</span>
                Precio :
              </div>
              <div className="singlehome__grid--item value id">
                $ {home?.price} COP millones de pesos
              </div>
              <div className="singlehome__grid--item name area">
                <span className="material-icons icon crop_3_2-icon">
                  crop_3_2
                </span>
                Area :
              </div>
              <div className="singlehome__grid--item value area">
                {home?.area}m²
              </div>
              <div className="singlehome__grid--item name floor">
                <span className="material-icons icon stairs-icon">stairs</span>
                Piso :
              </div>
              <div className="singlehome__grid--item value floor">
                {home?.floor} piso
              </div>
              <div className="singlehome__grid--item name rooms">
                <span className="material-icons icon bed-icon">bed</span>
                Cuartos :
              </div>
              <div className="singlehome__grid--item value rooms">
                {home?.rooms}
              </div>
              <div className="singlehome__grid--item name bathrooms">
                <span className="material-icons icon shower-icon">shower</span>
                Baños :
              </div>
              <div className="singlehome__grid--item value bathrooms">
                {home?.bathrooms}
              </div>
              <div className="singlehome__grid--item name antiquity">
                <span className="material-icons icon history-icon">
                  history
                </span>
                Antiguedad :
              </div>
              <div className="singlehome__grid--item value antiquity">
                {home?.antiquity} años
              </div>
              <div className="singlehome__grid--item name storage">
                <span className="material-icons icon warehouse-icon">
                  warehouse
                </span>
                Depositos :
              </div>
              <div className="singlehome__grid--item value storage">
                {home?.storage}
              </div>
              <div className="singlehome__grid--item name parking_spots">
                <span className="material-icons icon local_parking-icon">
                  local_parking
                </span>
                Parqueaderos :
              </div>
              <div className="singlehome__grid--item value parking_spots">
                {home?.parking_spots}
              </div>
              <div className="singlehome__grid--item name neighborhood">
                <span className="material-icons icon location_on-icon">
                    location_on
                </span>
                neighborhood :
              </div>
              <div className="singlehome__grid--item value neighborhood">
                {home?.neighborhood}
              </div>
            </section>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleHome;
