import { newHomeInput } from "../types";
import BASE_URL from "../services/apiConfig";

const fakeCloudinaryResposeMultiple = [
  {
      "asset_id": "1a4e294a471b786fe7e38cc585b3dd20",
      "public_id": "assets/2adbe60adcd0e8cc1bde01d3a570aa78",
      "version": 1700069291,
      "version_id": "15f97cf842455c35fff344039299b4a7",
      "signature": "c34807ae0d62f131aff116c58fbfc33c0dd751b9",
      "width": 1200,
      "height": 1200,
      "format": "jpg",
      "resource_type": "image",
      "created_at": "2023-11-15T17:28:11Z",
      "tags": [],
      "bytes": 103841,
      "type": "upload",
      "etag": "a5b0d8b498c55372a22ac9cf2b434209",
      "placeholder": false,
      "url": "http://res.cloudinary.com/dw1cryspm/image/upload/v1700069291/assets/2adbe60adcd0e8cc1bde01d3a570aa78.jpg",
      "secure_url": "https://res.cloudinary.com/dw1cryspm/image/upload/v1700069291/assets/2adbe60adcd0e8cc1bde01d3a570aa78.jpg",
      "folder": "assets",
      "original_filename": "greenlight_dodge_power_wagon_tow_truck.jpg",
      "api_key": "694839169789455"
  },
  {
      "asset_id": "3f3689567f33cee8d4d1cab27c3a5fb2",
      "public_id": "assets/fc406fa895fcf17cd04073f5271baa08",
      "version": 1700069293,
      "version_id": "66b0402f3e6691072d336beaf64ba3f7",
      "signature": "bcc548f93f93f05e27a56df4b858573822833ea7",
      "width": 1200,
      "height": 1600,
      "format": "jpg",
      "resource_type": "image",
      "created_at": "2023-11-15T17:28:13Z",
      "tags": [],
      "bytes": 390829,
      "type": "upload",
      "etag": "ef64ee9c605d2b9a007553c8c3aae97c",
      "placeholder": false,
      "url": "http://res.cloudinary.com/dw1cryspm/image/upload/v1700069293/assets/fc406fa895fcf17cd04073f5271baa08.jpg",
      "secure_url": "https://res.cloudinary.com/dw1cryspm/image/upload/v1700069293/assets/fc406fa895fcf17cd04073f5271baa08.jpg",
      "folder": "assets",
      "original_filename": "greenlight_dodge_power_wagon.jpg",
      "api_key": "694839169789455"
  },
  {
      "asset_id": "51219b1972b46adda85cbe5c08972d58",
      "public_id": "assets/39b8c5e6b130a74c3451ffc76ef725d7",
      "version": 1700069293,
      "version_id": "66b0402f3e6691072d336beaf64ba3f7",
      "signature": "60553b044f794f9b4ca617a005c81f4fc28319ca",
      "width": 250,
      "height": 250,
      "format": "jpg",
      "resource_type": "image",
      "created_at": "2023-11-15T17:28:13Z",
      "tags": [],
      "bytes": 16637,
      "type": "upload",
      "etag": "22fa508db65f912454ea8cabf5c49c9a",
      "placeholder": false,
      "url": "http://res.cloudinary.com/dw1cryspm/image/upload/v1700069293/assets/39b8c5e6b130a74c3451ffc76ef725d7.jpg",
      "secure_url": "https://res.cloudinary.com/dw1cryspm/image/upload/v1700069293/assets/39b8c5e6b130a74c3451ffc76ef725d7.jpg",
      "folder": "assets",
      "original_filename": "andres-img.jpeg",
      "api_key": "694839169789455"
  }
]

export const apiFileUpload = async (file: any) => {
  console.log("file: apiNewHome.ts:74 ~ apiFileUpload ~ apiFileUpload:", apiFileUpload)
};

export const apiMultipleFilesUpload = async (files: any) => {
  // go through the files array BUT IN A FORM DATA
  if (files) {
    // Simulate an asynchronous operation (e.g., uploading to Cloudinary)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return fake Cloudinary response after the delay
    return fakeCloudinaryResposeMultiple;
  }
};

export const apiNewHome = async (home: newHomeInput) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(home),
    };
    const response = await fetch(`${BASE_URL}/api/homes`, options);

    if (!response.ok) {
      return new Error(`❌ apiNewHome response.status: ${response.status}`);
    }

    const data = await response.json();

    if (data) {
      return data;
    } else {
      return new Error(`❌ apiNewHome  error.`);
    }
  } catch (error: any) {
    console.error("❌ apiNewHome error :", error);
    return new Error(error);
  }
};
