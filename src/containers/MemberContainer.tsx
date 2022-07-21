import { useLocation, useParams } from "react-router-dom";
import Login from "@pages/member/Login";
import Signup from "@pages/member/Signup";
import "@css/components/login/login.scss";
import "@css/components/login/signup.scss";

const MemberContainer: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const lang = params.lang ? params.lang : "en";
  return (
    <div>
      {
        {
          "/ko/member/login": <Login lang={lang} />,
          "/en/member/login": <Login lang={lang} />,
          "/ko/member/signup": <Signup lang={lang} />,
          "/en/member/signup": <Signup lang={lang} />,
        }[location.pathname]
      }
    </div>
  );
};

export default MemberContainer;
