import "./card.scss";
import { Link } from "react-router-dom";
import pinIcon from "../../assets/pin.png";
import bathIcon from "../../assets/bath.png";
import bedIcon from "../../assets/bed.png";
import chatIcon from "../../assets/chat.png";
import saveIcon from "../../assets/save.png";
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`${item.id}`} className="imgContainer">
        <img src={item.img} alt={`image of ${item.title}`} />
      </Link>
      <div className="txtContainer">
        <Link to={`${item.id}`}>
          <h2 className="title">{item.title}</h2>
        </Link>
        <p className="location">
          <img src={pinIcon} alt="Pin Icon" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bedIcon} alt="Bed icon" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src={bathIcon} alt="bath icon" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={chatIcon} alt="chat icon" />
            </div>
            <div className="icon">
              <img src={saveIcon} alt="save icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
