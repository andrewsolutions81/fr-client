import "./NewHome.styles.scss";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { newHomeInput } from "../../types";
import { apiMultipleFilesUpload, apiNewHome } from "../../api/apiNewHome";
import imageCompression from "browser-image-compression";

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
  const [files, setFiles] = useState([]);

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

  const handleImageChange = async (e: any) => {
    const selectedImages = e.target.files;

    if (selectedImages) {
      const compressedImages = [];
      for (const image of selectedImages) {
        const options = {
          maxSizeMB: 1, // Max size in megabytes
          maxWidthOrHeight: 800, // Max width/height in pixels
          useWebWorker: true,
        };

        try {
          const compressedImage = await imageCompression(image, options);
          compressedImages.push(compressedImage);
        } catch (error) {
          console.error("Error compressing image:", error);
        }
      }

      setFiles(compressedImages as any);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append("file",file)


    let completeHome = {
      ...newHomeinInput,
      favorite_users: [],
      available: true,
      images: [],
    };
    let imagesCloudinaryUrls : any = [];

    try {
      if (files) {
        const imagesResponse = await apiMultipleFilesUpload(files);
        if (imagesResponse) {
          imagesResponse.map((item) => {
            imagesCloudinaryUrls.push(item);
          });
          completeHome = {
            ...completeHome,
            images_url: imagesCloudinaryUrls,
          };
          return completeHome;
        }
      }
    } catch (error:any) {
      return new Error(error);
    }
    console.log("completeHome after image upload:",completeHome)

    try {
      const response = await apiNewHome(completeHome);
      if (response) {
        console.log("handle submit newhome.tsx response:", response);
      }
    } catch (error:any) {
      return new Error(error)
    }

    console.log("house and images upload succesfull. redirect home")

  };

  return (
    <section className="newhome">
      <form action="" className="newhome__form" onSubmit={handleSubmit}>
        <h2 className="newhome__nueva-casa"> Nueva Casa</h2>
        <span className="newhome_error">{errorMessage}</span>
        <div className="newhome__inputs--container">
          <div className="newhome__input__images">
            <label htmlFor="images" className="images">
              Images
            </label>
            <input
              type="file"
              id="imageInput"
              // id="upload-img"
              name="imageInput"
              // name="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
            />
          </div>

          <div className="newhome__image--container">
            {files.length > 0 ? (
              files.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`house_${index + 1}`}
                  width="100"
                  height="100"
                />
              ))
            ) : (
              <p>No images selected</p>
            )}
          </div>

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
            onClick={() => {
              const log = files;
              console.log("log files:", log);
            }}
          >
            log
          </button>
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
