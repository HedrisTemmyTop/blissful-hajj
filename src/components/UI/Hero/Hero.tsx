import React from "react";
import "../../../styles/sass/hero.scss";
import image from "../../../assets/images/banner_image.png";
import { BiWorld } from "react-icons/bi";
import plane from "../../../assets/images/Plane_vector_img.png";
import camera from "../../../assets/images/Camera_vector_img.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__body">
        <main className="hero__container">
          <aside className="hero__content">
            <h3 className="hero__content--head">
              <span>Explore the World!</span>
              <BiWorld />
            </h3>
            <h1 className="hero__content--heading">
              Let's Make Your best trip Ever!
            </h1>
            <div className="hero__content--text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              adipisci aperiam possimus voluptates placeat cupiditate quidem
              nostrum cum quod veritatis.
            </div>
            <button className="hero__content--btn">
              <span>Explore Now</span>
            </button>
          </aside>

          <img src={image} alt="traveling" />
        </main>
        <img src={plane} alt="plane" className="hero__image-plane" />
        <img src={camera} alt="plane" className="hero__image-camera" />
      </div>
    </section>
  );
};

export default Hero;
