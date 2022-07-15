import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Detail from "@pages/detail/Detail";
import { getPhotosById } from "../api/listApi";
import { PhotoType } from "../types/photosType";
import { chacheSelectState, listState } from "@global/listState";

import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import HeaderContainer from "@components/layout/HeaderContainer";
import { getPhotos } from "@api/listApi";

const ListContainer: React.FC = () => {
  const [num, setNum] = useRecoilState(chacheSelectState);
  const params = useParams();
  const lang = params.lang ? params.lang : "en";

  let selNum: number = 0;
  if (params.id) selNum = parseInt(params.id);
  const photos = useRecoilValue(listState);
  console.log(photos);

  const {
    data: photo,
    isLoading,
    error,
  } = useQuery<PhotoType, Error>(["getPhoto", 1], () => getPhotosById(selNum));

  useEffect(() => {
    setNum(selNum);
  }, []);

  return (
    <div>
      <HeaderContainer lang={lang} />
      <Detail
        photos={photos || []}
        photo={photo}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default ListContainer;
