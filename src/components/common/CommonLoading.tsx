import ReactLoading from "react-loading";
import "@css/components/common/commonloading.scss";

const CommonLoading: React.FC = () => {
    return (
        <div className="loading">
            <ReactLoading
                type="spokes"
                color="#b6b6b6"
                height={"30%"}
                width={"30%"}
            />
        </div>
    );
};

export default CommonLoading;
