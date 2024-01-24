// SingleHome.tsx
import "./SingleHome.style.css";
import "react-image-gallery/styles/css/image-gallery.css"
import { Home } from "../../types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Gallery from 'react-image-gallery';

const SingleHome = () => {
  const { id } = useParams();
  const [home, setHome] = useState<null | Home>(null);
  const [loading, setLoading] = useState(false);
  const isAdmin = true

  useEffect(() => {
    // Simulating an API call to fetch home data by id
    const fetchHomeData = async () => {
      // Replace the following with your actual API call
      // const data = await apiHomeById(id);
      const data = {
        id: "123",
        title: "Beautiful Home",
        available: true,
        description: "Great house with great view, amazing space for the location at a reasonable price.",
        neighborhood: "Santa Barbara",
        address: "123 Main Street",
        notes: "Some important notes about the home.",
        images_url: [
          { secure_url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Red_Power_Wagon_WM-100.jpg" },
          { secure_url: "https://upload.wikimedia.org/wikipedia/commons/3/31/1966_Chevrolet_C10_pickup_truck_%289581019245%29.jpg" },
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
          <div className="      ">
          <p className="singlehome__description--span">
            Descripción general:
          </p>
          <p className="singlehome__description">
            {home?.description}
          </p>

          <section className="singlehome__grid--container">
            <div className="singlehome__grid--item">
              ID: {home?.id}
            </div>
            <div className="singlehome__grid--item available">
              Available: {home?.available ? "Yes" : "No"}
            </div>
            <div className="singlehome__grid--item neighborhood">
              Barrio: {home?.neighborhood}
            </div>
          </section>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleHome;
