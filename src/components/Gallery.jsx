import React, { useEffect, useState } from "react";
import { Link as GalLink } from "react-router-dom";
import demon from "../photos/demon.jpg";
import rainy from "../photos/rainy.jpg";
import girl from "../photos/girl.jpeg";
import car from "../photos/car.jpeg";
import city from "../photos/city.jpeg";
import flower from "../photos/flower.jpeg";
import innout from "../photos/innout.jpeg";
import neon from "../photos/neon.jpeg";
import truck from "../photos/truck.jpeg";
import Footer from "./Footer";

function Gallery() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="gallery-container">
      <div className={`loading-screen ${isLoaded ? "fade-out" : ""}`}></div>
      <div className="gallery-nav">
        <GalLink className="gallery-home" to="/">
          home
        </GalLink>
      </div>
      <section className="img-container">
        <h1 className="gallery-header">take a peek</h1>
        <img className="gallery-img" src={girl} alt="girl" />
        <img
          loading="lazy"
          className="gallery-img"
          src={innout}
          alt="in-n-out"
        />
        <img
          loading="lazy"
          className="gallery-img"
          src={neon}
          alt="neon sign"
        />
        <img loading="lazy" className="gallery-img" src={car} alt="red car" />
        <img
          loading="lazy"
          className="gallery-img"
          src={truck}
          alt="fire truck"
        />
        <img
          loading="lazy"
          className="gallery-img"
          src={flower}
          alt="small flower"
        />
        <img
          loading="lazy"
          className="gallery-img"
          src={demon}
          alt="devil face"
        />
        <img
          loading="lazy"
          className="gallery-img"
          src={rainy}
          alt="man running in rain"
        />
        <img
          loading="lazy"
          className="gallery-img"
          src={city}
          alt="LA cityscape"
        />
      </section>
      <div className="footer-two">
        <Footer />
      </div>
    </main>
  );
}

export default Gallery;
