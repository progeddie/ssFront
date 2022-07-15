// import { useRecoilValue } from "recoil";
import { useNavigate, useLocation } from "react-router-dom";
// import { numberOfViewedBookState } from "../../global-state/books";
import HeaderHome from "./HeaderHome";
import HeaderMypage from "./HeaderMypage";
interface HeaderContainerProps {
  lang: string;
}
const HeaderContainer: React.FC<HeaderContainerProps> = ({ lang }) => {
  const navi = useNavigate();
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ||
      location.pathname === "/en" ||
      location.pathname === "/ko" ? (
        <HeaderHome lang={lang} />
      ) : (
        <HeaderMypage lang={lang} />
      )}
    </div>
  );
};

export default HeaderContainer;
