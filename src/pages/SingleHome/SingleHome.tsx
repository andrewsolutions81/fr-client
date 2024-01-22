//SingleHome.tsx
import "./SingleHome.scss"
import { Home } from "../../types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const SingleHome = () => {
  const { id } = useParams();
  const [home, setHome] = useState<null | Home>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating an API call to fetch home data by id
    const fetchHomeData = async () => {
      // Replace the following with your actual API call
      // const data = await apiHomeById(id);
      const data = {
        id: "123",
        title: "Beautiful Home",
        available: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        neighborhood: "Suburbia",
        address: "123 Main Street",
        notes: "Some important notes about the home.",
        images_url: [
          { secure_url: "https://example.com/image1.jpg" },
          { secure_url: "https://example.com/image2.jpg" },
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
  }, [id]);

  return (
    <section className="singlehome">
      {loading ? (
        <Loading />
      ) : (
        <>
          <p>Home ID: {id}</p>
          <h3 className="singlehome__title">Title</h3>
          <img src="" alt="" className="singlehome__img" />
          <span className="singlehome__description--span">
            Descripción general
          </span>
          <p className="singlehome__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos corrupti autem, odio error nam sunt debitis tenetur
            aliquam aperiam illo nostrum, placeat illum alias repellat neque
            architecto amet aliquid odit.
          </p>
          <div className="singlehome__grid--container">
            <div className="singlehome__grid--item">
              ID: {home?.id}
            </div>
            <div className="singlehome__grid--item">
              Title: {home?.title}
            </div>
            <div className="singlehome__grid--item">
              Available: {home?.available ? "Yes" : "No"}
            </div>
            <div className="singlehome__grid--item">
              Description: {home?.description}
            </div>
            <div className="singlehome__grid--item">
              Neighborhood: {home?.neighborhood}
            </div>
            {/* ... Repeat for other properties */}
          </div>
        </>
      )}
    </section>
  );
};

export default SingleHome;
