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

export const getListSelector = selector({
  key: "getList",
  get: ({ get }) => {
    const listStates = get(listState);
    return listStates.length;
  },

  set: ({ set }, newValue: any) => {
    set(listState, newValue);
  },
});

// export const getCookieSelector = selector({
//   key: "cookie/get",
//   get: async ({ get }) => {
//     try{
//       const { data } = await client.get('/cookies');
//       return data.data;
//     } catch (err) {
//     	throw err;
//     }
//   },
//   set: ({set}, newValue)=> {
//     set(cookieState, newValue)
//   }
// });
