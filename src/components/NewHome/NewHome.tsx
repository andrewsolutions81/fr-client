import React, { ChangeEvent, FormEvent, useState } from "react";
import "./NewHome.styles.scss";
import { apiNewHome } from "../../api/apiNewHome";
import { newHomeInput } from "../../types";

const NewHome: React.FC = () => {
  const newHomeInputInitialState: newHomeInput = {
    title: "",
    description: "",
    neighborhood: "",
    address: "",
    notes: "",
    price: "",
    area: "",
    floor: "",
    rooms: "",
    bathrooms: "",
    storage: "",
    antiquity: "",
    parking_spots: "",
    images_url: [],
  };

  const [newHomeinInput, setNewHomeinInput] = useState(
    newHomeInputInitialState
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedInput = { ...newHomeinInput, [name]: value };
    setNewHomeinInput(updatedInput);

    const hasEmptyField = Object.values(updatedInput).some(
      (input) => input === ""
    );
    if (hasEmptyField) {
      setErrorMessage("Please fill in all fields.");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const completeHome = {
      ...newHomeinInput,
      images_url: ["", ""],
      favorite_users: ["", ""],
      available: true,
    };
    const response = await apiNewHome(completeHome);
    if(response){
      console.log("api response:", response);
    }
  };

  return (
    <section className="newhome">
      <form action="" className="newhome__form" onSubmit={handleSubmit}>
        <h2 className="newhome__nueva-casa"> Nueva Casa</h2>
        <span className="newhome_error">{errorMessage}</span>
        <div className="newhome__inputs--container">
          <div className="newhome__input newhome__input__title">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newHomeinInput.title}
              placeholder={
                newHomeinInput.title ? newHomeinInput.title : "title"
              }
              onChange={handleInputChange}
            />
          </div>

          <div className="newhome__input newhome__input__description">
            <label htmlFor="description">description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={newHomeinInput.description}
              placeholder={
                newHomeinInput.description
                  ? newHomeinInput.description
                  : "description"
              }
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="newhome__input newhome__input__notes">
          <label htmlFor="notes">Notes</label>
          <span className="newhome_reminder">Solo lo ves tu.</span>
          <input
            type="text"
            id="notes"
            name="notes"
            value={newHomeinInput.notes}
            placeholder={newHomeinInput.notes ? newHomeinInput.notes : "Notes"}
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__input newhome__input__neighborhood">
          <label htmlFor="neighborhood">Neighborhood</label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            value={newHomeinInput.neighborhood}
            placeholder={
              newHomeinInput.neighborhood
                ? newHomeinInput.neighborhood
                : "Neighborhood"
            }
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__input newhome__input__address">
          <label htmlFor="address">Address</label>
          <span className="newhome_reminder">Solo lo ves tu</span>
          <input
            type="text"
            id="address"
            name="address"
            value={newHomeinInput.address}
            placeholder={
              newHomeinInput.address ? newHomeinInput.address : "Address"
            }
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__input newhome__input__price">
          <label htmlFor="price">Price</label>
          <span className="newhome_reminder">En millones de pesos</span>
          <input
            type="text"
            id="price"
            name="price"
            value={newHomeinInput.price}
            placeholder={newHomeinInput.price ? newHomeinInput.price : "Price"}
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__input newhome__input__area">
          <label htmlFor="area">Area</label>
          <span className="newhome_reminder">En metros cuadrados y numero</span>
          <input
            type="text"
            id="area"
            name="area"
            value={newHomeinInput.area}
            placeholder={newHomeinInput.area ? newHomeinInput.area : "Area"}
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__input newhome__input__floor">
          <span className="newhome_reminder">Numero</span>
          <label htmlFor="floor">Floor</label>
          <input
            type="text"
            id="floor"
            name="floor"
            value={newHomeinInput.floor}
            placeholder={newHomeinInput.floor ? newHomeinInput.floor : "Floor"}
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__input newhome__input__rooms">
          <label htmlFor="rooms">Rooms</label>
          <input
            type="text"
            id="rooms"
            name="rooms"
            value={newHomeinInput.rooms}
            placeholder={newHomeinInput.rooms ? newHomeinInput.rooms : "Rooms"}
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__input newhome__input__bathrooms">
          <span className="newhome_reminder">En numero</span>
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            type="text"
            id="bathrooms"
            name="bathrooms"
            value={newHomeinInput.bathrooms}
            placeholder={
              newHomeinInput.bathrooms ? newHomeinInput.bathrooms : "Bathrooms"
            }
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__input newhome__input__storage">
          <label htmlFor="storage">Storage</label>
          <span className="newhome_reminder">En numero</span>
          <input
            type="text"
            id="storage"
            name="storage"
            value={newHomeinInput.storage}
            placeholder={
              newHomeinInput.storage ? newHomeinInput.storage : "Storage"
            }
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__input newhome__input__antiquity">
          <label htmlFor="antiquity">Antiquity</label>
          <span className="newhome_reminder">En numero</span>
          <input
            type="text"
            id="antiquity"
            name="antiquity"
            value={newHomeinInput.antiquity}
            placeholder={
              newHomeinInput.antiquity ? newHomeinInput.antiquity : "Antiquity"
            }
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__input newhome__input__parking_spots">
          <label htmlFor="parking_spots">Parking Spots</label>
          <span className="newhome_reminder">En numero</span>
          <input
            type="text"
            id="parking_spots"
            name="parking_spots"
            value={newHomeinInput.parking_spots}
            placeholder={
              newHomeinInput.parking_spots
                ? newHomeinInput.parking_spots
                : "Parking Spots"
            }
            onChange={handleInputChange}
          />
        </div>

        <div className="newhome__actions">
          <span className="newhome_error">{errorMessage}</span>
          <button
            className="newhome__btn"
            type="submit"
            disabled={Boolean(errorMessage)}
          >
            Crear
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewHome;
