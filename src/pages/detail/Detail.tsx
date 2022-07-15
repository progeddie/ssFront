import React, { useRef, useState } from "react";
import { PhotoType } from "@type/photosType";
import "@css/components/detail/detail.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import CommonLoading from "@components/common/CommonLoading";

import LayerOptionSelect from "@components/common/LayerOptionSelect";
import SingleLineImageList from "@components/common/SingleLineImageList";

interface DetailProps {
  photo: PhotoType | undefined;
  isLoading: boolean;
  error: Error | null;
  photos: PhotoType[];
}

const ListDetail: React.FC<DetailProps> = ({
  photos,
  photo,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <CommonLoading />;
  }

  if (error) {
    return <p>An error has occurred: {error.message}</p>;
  }

  if (!photo) {
    return <p>No photos found</p>;
  }

  const photosArr: Array<string> = [
    photo.thumbnailUrl,
    "https://via.placeholder.com/150/13454b",
    "https://via.placeholder.com/150/315aa6",
  ];

  return (
    <div className="detail">
      <div style={{ width: "400px" }}>
        <span className="bg">
          <div className="swiper-container">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {photosArr.map((val: string, idx: number) => (
                <SwiperSlide key={idx}>
                  <img src={val} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </span>
        <div className="product_thumbnail_swiper_box">
          {photosArr.map((val: string, idx: number) => (
            <button
              className={"swiper-slide " + (idx === 0 ? "on" : "")}
              key={idx}
            >
              <img src={val} />
            </button>
          ))}
          <button className="swiper-slide review_more">
            <span className="ico_review_more">더보기</span>
          </button>
        </div>

        <div className="info_product2">
          {/* 상품정보 */}
          <div className="info_text_area">
            <div className="info_brandtext">좋은브랜드</div>
            <h2 className="info_maintext">
              {photo.title}
              {/* <button @click="isLinkShareModal = true" className="btn_linkshare"><span className="hidden">공유하기</span></button>
            <modal-link-share :isLinkShareModal="isLinkShareModal" :dealName="deal.name" @closeModal="isLinkShareModal = false" /> */}
            </h2>
            <p className="info_subtext">111</p>

            {/* <div v-if="memberReviewCount" className="ico_reviewstart">
            <template v-if="memberReviewCount >= 1">
              <i className="star tiny on"></i>{{ memberReviewScore }}<i>({{ memberReviewCount }})</i>
            </template>
            <button @click="moveReview" className="review_more">리뷰보기 〉</button>
          </div> */}

            <div className="info_pricetext">
              <dl>
                <dt>소비자가</dt>
                <dd>
                  <span className="customer_price">3,000 원</span>
                </dd>
              </dl>
              <dl className="sale_price">
                <dt>판매가</dt>
                <dd>
                  <strong>
                    <span>20%</span> 4,000 원
                  </strong>
                </dd>
              </dl>
            </div>
          </div>

          <div className="info_pay">
            <div className="info_paydelivery_area">
              <div className="info_pay_box">
                <strong>결제혜택</strong>
                {/* <card-installment-info :sale-price="Number(deal.sale_price)" /> */}
              </div>
              <div className="info_delivery_box">
                <strong>배송정보</strong>
                {/* <delivery-text :deal="deal" isDefaultDeliveryPriceText /> */}
              </div>
              {/* <event-banner v-if="$route.meta.isApp && !userInfo.isLogin" isCouponBook /> */}
              <div className="info_delivery_box">
                <strong>다른상품</strong>
              </div>
              <SingleLineImageList photos={photos} />
            </div>

            <div className="info_notice_box">
              <h5>상품 결제 주의사항</h5>
              <ul>
                <li>
                  평일 오전 10시 이전 결제완료 건까지 업체로 당일 발주
                  진행됩니다. (주말/공휴일 제외)
                </li>
                <li>오전 10시 이후로는 주문취소가 불가합니다.</li>
                <li>판매 제품은 옵션 별 가격이 상이할 수 있습니다.</li>
              </ul>
            </div>
          </div>

          <div className="buy_box">
            <button className="btn_rounded btn_line_red">장바구니</button>
            <button className="btn_rounded btn_gradient_red">구매하기</button>
          </div>
        </div>
        {/* <LayerOptionSelect /> */}
      </div>
    </div>
  );
};

export default ListDetail;
