import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Discover from "./Discover";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Gallery from "./Gallery";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Gallery />
      <Discover />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Landing;
