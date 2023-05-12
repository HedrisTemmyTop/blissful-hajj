import React from "react";
import Hero from "../Hero/Hero";
import Book from "../Book/Book";
import "../../../styles/sass/hero.scss";
import Values from "../values/Values";
const Main = () => {
  return (
    <section className="section-main">
      <Hero />
      <Book />
      <Values />
    </section>
  );
};

export default Main;
