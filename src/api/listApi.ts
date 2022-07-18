import axios from "axios";
import { PhotoType } from "@type/photosType";
import { callApi } from "@assets/commonTs/common";

// export const getPhotos = async (): Promise<PhotoType[]> => {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/photos"
//   );
//   data.length = 100;
//   return data;
// };

export const getPhotos = async (): Promise<PhotoType[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  // const data = fetch("https://jsonplaceholder.typicode.com/photos").then(
  //   (response) => response.json()
  // );

  data.length = 100;
  return data;
};

export const getPhotosById = async (id: number): Promise<PhotoType> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  return data;
};

// export const addBook = async (photo: Photo): Promise<Photo> => {
//   const { data } = await axios.post("http://localhost:8080/api/books", photo);
//   return data;
// };
