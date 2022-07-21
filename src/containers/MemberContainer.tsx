import { useLocation } from "react-router-dom";
import Login from "@pages/member/Login";
import Signup from "@pages/member/Signup";
import "@css/components/login/login.scss";
import "@css/components/login/signup.scss";

const MemberContainer: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      {
        {
          "/ko/member/login": <Login />,
          "/en/member/login": <Login />,
          "/ko/member/signup": <Signup />,
          "/en/member/signup": <Signup />,
        }[location.pathname]
      }
    </div>
  );
};

export default MemberContainer;
