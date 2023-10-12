import React, { useEffect, useState, useRef } from "react";
import demon from "../photos/demon.jpg";
import myman from "../photos/myman.jpg";
import rainy from "../photos/rainy.jpg";
import { Parallax } from "react-parallax";
import Footer from "./Footer";
import { Link as RouterLink } from "react-router-dom";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import Contact from "./Contact";

function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const aboutTextRef1 = useRef(null);
  const aboutTextRef2 = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in"); // Add the fade-in class
        } else {
          entry.target.classList.remove("fade-in"); // Remove the class if not intersecting
        }
      });
    }, options);

    if (aboutTextRef1.current) {
      observer.observe(aboutTextRef1.current);
    }

    if (aboutTextRef2.current) {
      observer.observe(aboutTextRef2.current);
    }
    if (title.current) {
      observer.observe(title.current);
    }

    return () => {
      if (aboutTextRef1.current) {
        observer.unobserve(aboutTextRef1.current);
      }

      if (aboutTextRef2.current) {
        observer.unobserve(aboutTextRef2.current);
      }
      if (title.current) {
        observer.unobserve(title.current);
      }
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function addFadeInClass() {
      const titleElement = document.querySelector(".title");
      titleElement.classList.add("fade-in");
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", addFadeInClass);
    } else {
      addFadeInClass();
    }

    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="parallax-container">
      <div className={`loading-screen ${isLoaded ? "fade-out" : ""}`}></div>
      <Parallax className="img" strength={175} bgImage={myman}>
        <div className="content">
          <nav className="nav">
            <RouterLink to="/gallery" className="link">
              Gallery
            </RouterLink>
            <Link
              className="link"
              to="about"
              spy={true}
              smooth={true}
              offset={-1}
              duration={500}
            >
              About
            </Link>
            <Link
              className="link"
              to="about"
              spy={true}
              smooth={true}
              offset={710}
              duration={500}
            >
              Contact
            </Link>
          </nav>
          <h1 ref={title} className="title title-fade">
            Justin Garcia
          </h1>
        </div>
      </Parallax>
      <Element name="about" className="element">
        <Parallax strength={175} bgImage={rainy}>
          <div className="content about">
            <p ref={aboutTextRef1} className="about-txt">
              <span className="red">Justin Garcia</span> is a Los Angeles based
              photographer. Having grown up in the valley, his eye is keenly
              tuned to the hidden beauty the city has to offer.
            </p>
            <p ref={aboutTextRef2} className="about-txt2">
              Whatever you desire to capture, Justin's approach is always highly
              personalized. He will work methodically to meet you where you are
              and to see what you
              <RouterLink to="/gallery" className="red see">
                {" "}
                see.
              </RouterLink>
            </p>
          </div>
        </Parallax>
      </Element>
      <Element name="contact" className="element">
        <Parallax strength={175} bgImage={demon}>
          <div className="content">
            <Contact />
          </div>
        </Parallax>
      </Element>
      <Footer />
    </div>
  );
}

export default LandingPage;
