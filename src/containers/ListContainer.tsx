import { useParams } from "react-router-dom";
import { useQuery, useMutation, UseQueryResult } from "react-query";
import { useRecoilState } from "recoil";
import { listState } from "@global/listState";

import List from "@pages/list/List";
import { getPhotos } from "@api/listApi";
import { PhotoType } from "@type/photosType";
import HeaderContainer from "@components/layout/HeaderContainer";

const ListContainer: React.FC = () => {
  const [lists, setLists] = useRecoilState(listState);
  const photosFetch = useQuery<PhotoType[], Error>(
    "getPhotos",
    () => getPhotos(),
    {
      onSuccess: (data) => {
        setLists(data);
      },
    }
  );

  const params = useParams();
  const lang = params.lang ? params.lang : "en";

  return (
    <div>
      <HeaderContainer lang={lang} />
      <List
        lang={lang}
        photos={lists || []}
        isLoading={photosFetch.isLoading}
        error={photosFetch.error}
      />
    </div>
  );
};

export default ListContainer;
