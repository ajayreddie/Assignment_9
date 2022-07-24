import React from "react";
import Card from "../cards/Card";
import Image1 from "../images/about.jpg";

function About() {
  return (
    <Card
      img={Image1}
      title="About Page"
      description="I am a Software Engineer graduate at Northeastern University..."
    />
  );
}

export default About;
