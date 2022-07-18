import React from "react";
import { Link } from "react-router-dom";
import "@css/components/list/productItem.scss";

interface list {
  lang: string;
  id: number;
  title: string;
  url: string;
  thumbnail: string;
}

const ProductItem: React.FC<list> = ({ lang, id, title, url, thumbnail }) => {
  return (
    <div className="hott_sns_item">
      {/* <video ref="video" src="" loop playsinline muted /> */}
      <div className="bg_image">
        <div className="inner">
          <Link to={`/${lang}/list/${id}`}>
            <img src={url} alt="" />
          </Link>
        </div>
      </div>
      <div className="txt_zone">
        <div className="detail">
          <div className="image">
            <div className="inner">
              <img src={thumbnail} alt="" />
            </div>
          </div>
          <Link to={`/${lang}/list/${id}`}>
            <div className="info">
              <div className="center">
                <h3 className="title">
                  {id}.{title}
                </h3>
                <span className="sale_price">
                  <strong>10%</strong> <b>3,000</b>
                  <em>원</em>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <Link to="/" className="ico_proposal_cart">
          장바구니
        </Link>
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
