import { useEffect, useRef } from "react";
import "@css/components/list/list.scss";
import ProductItem from "./ProuctItem";
import { PhotoType } from "@type/photosType";
import { useRecoilValue } from "recoil";
import { chacheSelectState } from "@global/listState";
import CommonLoading from "@components/common/CommonLoading";

interface PhotosProps {
  lang: string;
  photos: PhotoType[];
  isLoading: boolean;
  error: Error | null;
}

const List: React.FC<PhotosProps> = ({ lang, photos, isLoading, error }) => {
  const selected = useRecoilValue(chacheSelectState);
  // const snumRef = useRef() as React.MutableRefObject<HTMLLinkElement>;
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!isLoading && !error) {
      linkRefs.current[selected]?.focus();
    }
  }, [isLoading, error]);

  if (isLoading) {
    return <CommonLoading />;
  }

  if (error) {
    return <p>An error has occurred: {error.message}</p>;
  }

  if (!photos.length) {
    return <p>No books found</p>;
  }

  return (
    <div className="list">
      {photos.map(({ id, title, url, thumbnailUrl }) => (
        <span key={id}>
          <ProductItem
            lang={lang}
            id={id}
            title={title}
            url={url}
            thumbnail={thumbnailUrl}
          />
          <a
            href="#"
            ref={(ref) => (linkRefs.current[id] = ref)}
            className="hiddenInput"
          ></a>
        </span>
      ))}
    </div>
  );
};

export default List;
