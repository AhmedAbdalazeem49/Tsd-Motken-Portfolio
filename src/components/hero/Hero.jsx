import Lotti from "lottie-react";
import { useRef } from "react";
import developerAnimation from "../../animation/developer.json";
import "./hero.css";
import Logo from "../../images/me.jpg";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero">
      <div className="left-section">
        <div className="parent-avatar">
          <img src={Logo} className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Welcome to <span>TSD-Motken</span> - Innovating Software Solutions
        </h1>

        <p className="sub-title">
          TSD-Motken is a leading programming company, renowned for creating
          exceptional website UIs and innovative applications. With a strong
          presence in the market, we specialize in delivering cutting-edge
          software solutions that empower businesses and enhance user
          experiences.
        </p>
        <div className="all-icons">
          <a
            className="icon icon-twitter"
            href="https://twitter.com/Abdalazeem49"
            target="_blank"
          ></a>
          <a
            className="icon icon-instagram"
            href="https://www.instagram.com/ahmedabdalazeemm/"
            target="_blank"
          ></a>
          <a
            className="icon icon-github"
            href="https://github.com/AhmedAbdalazeem49"
            target="_blank"
          ></a>
          <a
            className="icon icon-linkedin-square"
            href="https://www.linkedin.com/in/ahmed-abdalazeem-226524228/"
            target="_blank"
          ></a>
        </div>
      </div>
      <div className="right-section animation">
        <Lotti
          lottieRef={lottieRef}
          animationData={developerAnimation}
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
