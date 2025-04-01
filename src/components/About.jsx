import React from "react";
import "../styles/About.scss";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <ul>
        <li className="about-me">
          I’m Siddharth Phadke—a coder by profession, gamer by passion, and cook
          by necessity! With 6+ years in frontend development (ReactJS, React
          Native, NextJS), I’ve built high-performance web apps for companies
          like CVS Pharmacy and Apple. I love optimizing code as much as I love
          optimizing my gaming strategies!
        </li>

        <li className="about-me">
          When I’m not crafting sleek UIs, you’ll find me conquering virtual
          worlds or experimenting in the kitchen (because debugging and cooking
          require the same patience). With a Master’s in Computer Science and a
          research paper on IoT, I’m always up for learning, coding, and
          creating something amazing! 🚀🎮🔥
        </li>
      </ul>
    </section>
  );
}

export default About;
