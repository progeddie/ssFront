import { useEffect, useRef, useState } from "react";
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
  const [photoArr, setPhotoArr] = useState<PhotoType[]>([]);
  const [currSort, setCurrSort] = useState<number>(0);

  const filterItem = () => {
    let array = photoArr;
    if (currSort === 0) {
      array = array
        .slice()
        .sort((a: PhotoType, b: PhotoType): number => a.id - b.id);
    } else if (currSort === 1) {
      array = array
        .slice()
        .sort((a: PhotoType, b: PhotoType): number => b.id - a.id);
    }
    setPhotoArr(array);

    // // 필터
    // if (this.isRecommend) {
    //   array = array.filter((v) => v.isRecommend === true);
    // } else {
    //   if (this.category === '0') array = array.filter((v) => v);
    //   else array = array.filter((v) => v.type.indexOf(this.category) !== -1);
    // }
    // const isPossible = this.$store.state.isPossibleOnly;
    // if (this.isHottDealTab) {
    //   if (isPossible) array = array.filter((v) => v.hottDealStock > 0 || v.isEncore == 'Y');
    //   else array = array.filter((v) => v);
    // } else {
    //   if (isPossible) array = array.filter((v) => v.selfDealStock > 0);
    //   else array = array.filter((v) => v);
    // }
    // this.totalCount = Number(array.length) || 0;
    // this.totalPage = Math.ceil(this.totalCount / 20);
    // // 정렬
    // if (this.isRecommend) {
    //   array.sort((a, b) => a.recommendSeq - b.recommendSeq);
    // } else {
    //   if (this.orderNumber === '0') {
    //     array.sort((a, b) => {
    //       // 랭크 + 날짜 복합정렬이라 랭크에 날짜 보다 1자리 더나오게 랭크를 곱해서 정렬한다.
    //       const date1 = new Date(a.enrollDate).getTime();
    //       const val1 = date1 * 1 + this.rankPlusNumber * a.rank;
    //       const date2 = new Date(b.enrollDate).getTime();
    //       const val2 = date2 * 1 + this.rankPlusNumber * b.rank;
    //       return val2 - val1;
    //     });
    //   } else if (this.orderNumber === '1') {
    //     array.sort((a, b) => b.twoWeekSalesCount - a.twoWeekSalesCount);
    //   } else if (this.orderNumber === '2') {
    //     array.sort((a, b) => b.salePrice * 1 - a.salePrice * 1);
    //   } else if (this.orderNumber === '3') {
    //     array.sort((a, b) => a.salePrice * 1 - b.salePrice * 1);
    //   }
    // }
    // this.currentPage = 0;
    return array;
  };

  useEffect(() => {
    if (!isLoading && !error) {
      linkRefs.current[selected]?.focus();
      setPhotoArr(photos);
    }
  }, [isLoading, error]);

  useEffect(() => {
    filterItem();
  }, [currSort]);

  if (isLoading) {
    return <CommonLoading />;
  }

  if (error) {
    return <p>An error has occurred: {error.message}</p>;
  }

  if (!photos.length) {
    return <p>No books found</p>;
  }

  const test = (test: any) => {
    setCurrSort(parseInt(test.target.value));
  };

  return (
    <div className="list">
      <div className="mb10">
        <select onChange={test} className="roundedlarge">
          <option value="0">최신순</option>
          <option value="1">역순</option>
        </select>
      </div>

      <div>
        {photoArr.map(({ id, title, url, thumbnailUrl }) => (
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
    </div>
  );
};

export default List;
