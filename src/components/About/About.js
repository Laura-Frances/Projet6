import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/img/aboutBanner.png'
import '../Banner/Banner.scss';
import '../About/About.scss';
import Collapse from '../Collapse/Collapse'

function About() {
  return (
    <div className="about">
      <Header />
      <div className="banner">
        <img className="aboutBanner" src={Banner} alt="banner" />
      </div>
      <Collapse />
      <Footer />
    </div>
  );
}

export default About;
