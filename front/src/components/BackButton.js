import { useNavigate } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="inline-flex items-center text-wildcolor mb-5" onClick={() => navigate(-1)}>
        <ImArrowLeft2 /> Revenir en arrière
      </button>
    </>
  );
};

export default BackButton;