import React, { useState, useEffect } from "react";
import "./Homes.style.scss"
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
      .catch((error) => {
        console.error("Error fetching homes:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="homes">
      {loading ? (
        <Loading />
      ) : homesData ? (
        homesData.data.map((home: Home) => (
          <HomeCard
            key={home.id}
            images_url={home.images_url}
            available={home.available}
            price={home.price}
            area={home.area}
            title={home.title}
            neighborhood={home.neighborhood} id={""} description={""} address={""} notes={""} floor={0} rooms={0} bathrooms={0} storage={0} antiquity={0} parking_spots={0} favorite_users={[]} createdAt={""} updatedAt={""}          />
        ))
      ) : (
        <span className="error-message">No Hay casas para mostrar</span>
      )}
    </main>
  );
};

export default Homes;
