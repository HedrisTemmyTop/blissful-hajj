
import "../../../styles/App.scss";
import { IoMdMail } from "react-icons/io";
const SubHeader = () => {
  return (
    <header className="sub-header">
      <div>
        <IoMdMail />
        <span>help@hajjtravel.com</span>
      </div>
      <div>+234 816 112 6466</div>
    </header>
  );
};

export default SubHeader;
