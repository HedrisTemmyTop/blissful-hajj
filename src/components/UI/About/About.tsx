import "../../../styles/sass/about.scss";
import { BsCheckCircleFill } from "react-icons/bs";
import bigImg from "../../../assets/images/about-img.jpg";
const About = (): JSX.Element => {
  return (
    <section className="about">
      <div className="about__container">
        <aside>
          <div className="about__img">
            <img src={bigImg} alt="about" className="about__img--1" />
          </div>
          <div className="about__img about__img-big">
            <img src={bigImg} alt="about" className="about__img--2" />
          </div>
        </aside>
        <aside className="about__content">
          <h3>ABOUT TRAVELBETA</h3>
          <h1>World Best Travel Company Since 2020</h1>
          <ul className="about__content--list">
            <li>
              <BsCheckCircleFill />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                delectus.
              </span>
            </li>
            <li>
              <BsCheckCircleFill />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                delectus.
              </span>
            </li>
            <li>
              <BsCheckCircleFill />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                delectus.
              </span>
            </li>
          </ul>
          <div className="about__rate">
            <span>
              <div className="about__rate--count">13+</div>
              <div>Year Experience</div>
            </span>
            <span>
              <div className="about__rate--count">133+</div>
              <div>Destination Collaboration</div>
            </span>
            <span>
              <div className="about__rate--count">17k+</div>
              <div>Happy Clients</div>
            </span>
          </div>
          <button className="about__btn">
            <span>Find Tours</span>
          </button>
        </aside>
      </div>
    </section>
  );
};

export default About;
