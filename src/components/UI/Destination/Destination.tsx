import "./destination.scss";
import { MdLocationOn } from "react-icons/md";
import { FaMapMarkedAlt, FaCalendarAlt } from "react-icons/fa";
import mekka from "../../../assets/images/mekkah.jpg";

interface Places {
  id: number;
}

const Destination = (): JSX.Element => {
  const placeArr: Places[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <section className="destination">
      <main className="destination__container">
        <div className="destination__heading">
          <h3>EXPLORE WONDERFUL EXPERIENCE</h3>
          <h1>Visit Popular Destinations in the World</h1>
        </div>
        <div className="destination__cards">
          {placeArr.map((_, i: number) => (
            <div className="destination__cards--card card" key={i}>
              <div className="destination__cards--card-head">
                <div className="icon-container">
                  <MdLocationOn className="icon-container__icon" />
                </div>
                <span className="card__name">Mekkah, Saudi Arabia</span>
              </div>
              <div className="card__about">Asia -Amazing Kahabah</div>
              <img src={mekka} alt="meka" />
              <div className="card__activities">
                <span className="card__activities--block">
                  <span>10</span>
                  <span>Activities</span>
                </span>
                <span className="card__activities--block">
                  <FaMapMarkedAlt />
                  <span>12 Places</span>
                </span>
                <span className="card__activities--block">
                  <FaCalendarAlt />
                  <span>1 Week</span>
                </span>
              </div>
              <div className="card__price">
                <span className="card__price--amount">
                  <h3>$545</h3>
                  <span>/Person</span>
                </span>
                <button className="card__price--btn">
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Destination;
