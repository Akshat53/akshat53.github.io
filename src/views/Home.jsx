import React, { useRef } from "react";
import Nav from "../components/Nav";
import Contact from "../components/contact/Contact";
import {
  navOptions,
  buttonOptions,
  cardOptions,
  expCard1,
  expCard2,
} from "../constrants";
import Profile from "../components/profile/Profile";
import Img from "../images/akshat.png";
import About from "../components/aboutUs/About";
import Img2 from "../images/akshat2.jpg";
import Experience from "../components/experience/Experience";
import Project from "../components/project/Project";

const Home = () => {
  const aboutSectionRef = useRef(null);
  const homeSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const projectSectionRef = useRef(null);

  const scrollToSection = (key) => {
    let ref;
    switch (key) {
      case "1":
        ref = aboutSectionRef;
        break;
      case "2":
        ref = experienceSectionRef;
        break;
      case "3":
        ref = projectSectionRef;
        break;
      case "4":
        ref = contactSectionRef;
        break;
      default:
        break;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (key) => {
    scrollToSection(key);
  };

  return (
    <div style={{ backgroundColor: "#28282B", color: "white " }}>
      <Nav
        options={navOptions}
        label={"AS"}
        handleMenuClick={handleMenuClick}
      />
      <Profile
        src={Img}
        designation={"Frontend Developer"}
        name={"Akshat Kr. Singh"}
        options={buttonOptions}
        profileSectionRef={homeSectionRef}
      />
      <About
        heading={"About Me"}
        subHeading={"Get To Know More"}
        src={Img2}
        options={cardOptions}
        text={
          "Experienced in frontend development for two years with HTML, CSS, JavaScript, React.js, and Next.js, proficient in GitHub, Postman, and Bitbucket for streamlined workflows. Also, possess one year of Java microservice development experience. Holds a BCA degree, blending practical expertise with a strong educational foundation."
        }
        aboutSectionRef={aboutSectionRef}
      />
      <Experience
        heading={"Experience"}
        subHeading={"Explore My"}
        options1={expCard1}
        options2={expCard2}
        expSectionRef={experienceSectionRef}
      />
      <Project
        heading={"Projects"}
        subHeading={"Browse My Recent"}
        projectSectionRef={projectSectionRef}
      />
      <Contact
        heading={"Contact Me"}
        subHeading={"Get in touch"}
        contactSectionRef={contactSectionRef}
      />
    </div>
  );
};

export default Home;
