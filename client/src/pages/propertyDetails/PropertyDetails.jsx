import { listData, userData } from "../../lib/dummyData";
import { useParams } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import "./propertyDetails.scss";
import pinIcon from "../../assets/pin.png";
import utilIcon from "../../assets/utility.png";
import petIcon from "../../assets/pet.png";
import feeIcon from "../../assets/fee.png";
import sizeIcon from "../../assets/size.png";
import bedIcon from "../../assets/bed.png";
import bathIcon from "../../assets/bath.png";
import schoolIcon from "../../assets/school.png";
import chatIcon from "../../assets/chat.png";
import saveIcon from "../../assets/save.png";
import Map from "../../components/map/Map";

const PropertyDetails = () => {
  const { id } = useParams();

  return (
    <div className="propertyDetails">
      <div className="details">
        <div className="wrapper">
          <Slider />
          <div className="info">
            <div className="top">
              {listData
                .filter((item) => item.id.toString() === id)
                .map((item, index) => {
                  return (
                    <div className="post" key={index}>
                      <h1>{item.title}</h1>
                      <div className="address">
                        <img src={pinIcon} alt="pin icon" />
                        <span>{item.address}</span>
                      </div>
                      <div className="price">$ {item.price}</div>
                    </div>
                  );
                })}
              <div className="user">
                <img src={userData.img} alt="user image" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              Future alike hill pull picture swim magic chain seed engineer nest
              outer raise bound easy poetry gain loud weigh me recognize farmer
              bare danger. actually put square leg vessels earth engine matter
              key cup indeed body film century shut place environment were stage
              vertical roof bottom lady function breeze darkness beside tin view
              local breathe carbon swam declared magnet escape has from pile
              apart route coffee storm someone hold space use ahead sheep jungle
              closely natural attached part top grain your grade trade corn
              salmon trouble new bend most teacher range anybody every seat
              fifteen eventually
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src={utilIcon} alt="utilities icon" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={petIcon} alt="pet icon" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={feeIcon} alt="fee icon" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src={sizeIcon} alt="size icon" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src={bedIcon} alt="bed icon" />
              <span>
                {listData
                  .filter((item) => item.id.toString() === id)
                  .map((item) => item.bedroom)}{" "}
                beds
              </span>
            </div>
            <div className="size">
              <img src={bathIcon} alt="bath icon" />
              <span>
                {" "}
                {listData
                  .filter((item) => item.id.toString() === id)
                  .map((item) => item.bathroom)}{" "}
                bathroom
              </span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src={schoolIcon} alt="school icon" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={petIcon} alt="pet icon" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={feeIcon} alt="fee icon" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={listData} />
          </div>
          <div className="buttons">
            <button>
              <img src={chatIcon} alt="chat icon" />
              Send a Message
            </button>
            <button>
              <img src={saveIcon} alt="save icon" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
