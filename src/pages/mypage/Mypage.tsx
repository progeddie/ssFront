import { Link } from "react-router-dom";
const MyPage: React.FC = () => {
  return (
    <div>
      <Link to="/list/1">
        <div style={{ color: "#000" }}>mypage</div>
      </Link>
    </div>
  );
};

export default MyPage;
