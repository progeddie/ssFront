import content1 from "@images/sample/contents-01@3x.png";
import content2 from "@images/sample/contents-02@3x.png";
import content3 from "@images/sample/contents-03@3x.png";
import content4 from "@images/sample/contents-04@3x.png";
const Main: React.FC = () => {
  return (
    <div>
      <img src={content1} width="1520px" height="780px" />
      <img src={content2} width="1520px" height="391px" />
      <img src={content3} width="1520px" height="391px" />
      <img src={content4} width="1520px" height="270px" />
    </div>
  );
};

export default Main;
