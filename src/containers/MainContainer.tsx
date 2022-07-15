import { useParams } from "react-router-dom";
import HeaderContainer from "@components/layout/HeaderContainer";
import Main from "@pages/main/Main";

const MainContainer: React.FC = () => {
  const params = useParams();
  const lang = params.lang ? params.lang : "en";
  return (
    <div>
      <HeaderContainer lang={lang} />
      <Main />
    </div>
  );
};

export default MainContainer;
