import axios from "axios";
import { PhotoType } from "@type/photosType";

export const getPhotos = async (): Promise<PhotoType[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
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
