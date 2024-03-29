import { Link } from "react-router-dom";
import "@css/components/layout/header.scss";
import top from "@images/sample/topn@3x.png";
import LangSelect from "@components/layout/LangSelect";
interface HeaderProps {
  lang: string;
}

const HeaderHome: React.FC<HeaderProps> = ({ lang }) => {
  const textArr =
    lang === "en"
      ? {
          0: "MYPAGE",
          1: "BE CREATOR",
          2: "SUPPORT",
          3: "CONTACT",
        }
      : {
          0: "MYPAGE",
          1: "창작자",
          2: "고객지원",
          3: "사이트맵",
        };

  return (
    <div>
      <div className="viewHeader1">
        <div className="one_row">
          <div className="nav_area top_text">
            <div>
              <Link to={`/${lang}/member/login`}>{textArr[0]}</Link>
            </div>
            <div>{textArr[1]}</div>
            <div>{textArr[2]}</div>
            <div>{textArr[3]}</div>
          </div>
          <div>
            <LangSelect lang={lang} />
          </div>
        </div>

        <div>
          <img src={top} style={{ marginTop: "-33px" }} />
        </div>
      </div>
      <div className="viewHeader2">
        <div className="header">
          <div className="ham_box">
            <input type="checkbox" id="icon" />
            <label htmlFor="icon">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div id="header">
              <ul>
                <li>
                  <Link to={`/${lang}/member/login`}>{textArr[0]}</Link>
                </li>
                <li>
                  <Link to="">{textArr[1]}</Link>
                </li>
                <li>
                  <Link to="">{textArr[2]}</Link>
                </li>
                <li>
                  <Link to="">{textArr[3]}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>{/* <Link to="/" className="btn_logo"></Link> */}</div>
          <div style={{ marginTop: "-10px" }}>
            <Link to="" className="btn_search fl"></Link>
            <Link to="" className="btn_cart fl"></Link>
            {/* <div className="fl ml10">
              <LangSelect lang={lang} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
