import { atom, selector } from "recoil";
import { PhotoType } from "@type/photosType";

export const chachePageState = atom({
  key: "chachePageState",
  default: 1,
});

export const chacheSelectState = atom({
  key: "chacheSelectState",
  default: 0,
});

export const listState = atom({
  key: "listState",
  default: [] as PhotoType[],
});
