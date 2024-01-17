import React, { useState, useEffect } from "react";
import "./Homes.style.scss";
import Loading from "../Loading/Loading";
import HomeCard from "../HomeCard/HomeCard";
import { fetchHomes } from "../../api/apiHomes";
import { Home, HomesResponse } from "../../types";

const Homes: React.FC = () => {
  const [homesData, setHomesData] = useState<HomesResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHomes()
      .then((data: HomesResponse) => {
        setHomesData(data);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching homes:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="homes">
      {loading ? (
        <Loading />
      ) : homesData ? (
        homesData.data.map((home: Home) => {
          console.log("Homes.tsx home.id:", home.id);
          return (
            <HomeCard
              key={home.id}
              images_url={home.images_url}
              available={home.available}
              price={home.price}
              area={home.area}
              title={home.title}
              neighborhood={home.neighborhood}
              id={home.id}
              description={home.description}
              address={home.address}
              notes={home.notes}
              floor={home.floor}
              rooms={home.rooms}
              bathrooms={home.bathrooms}
              storage={home.storage}
              antiquity={home.antiquity}
              parking_spots={home.parking_spots}
              favorite_users={home.favorite_users}
              createdAt={home.createdAt}
              updatedAt={home.updatedAt}
            />
          );
        })
      ) : (
        <span className="error-message">No Hay casas para mostrar</span>
      )}
    </main>
  );
};

export default Homes;
