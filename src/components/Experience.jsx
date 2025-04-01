import React from "react";
import "../styles//Experience.scss";

function Experience() {
  const experiences = [
    {
      start: "April'22",
      end: "Present",
      title: "Sr. Software Developer",
      company: "iSolve Technology Inc (Client : CVS)",
      description:
        "Led a team to build scalable React applications for enterprise clients.",
    },
    {
      start: "Jun'21",
      end: "Feb'22 (affected due to COVID)",
      title: "Software Developer",
      company: "BluJay Solutions (now e2open)",
      description:
        "Implemented innovative UI designs and optimized performance for React apps.",
    },
    {
      start: "Aug'20",
      end: "Jun'21 (affected due to COVID)",
      title: "Frontend Developer",
      company: "ClickAway IT Solutions (Freelancer)    ",
      description:
        "Implemented innovative UI designs and optimized performance for React apps.",
    },
    {
      start: "Jun'18",
      end: "Jul'20",
      title: "Lead UI Engineer",
      company: "Protek & Quest Global (Client : Apple)",
      description: "Built dynamic websites using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>6+ Years of Experience</h2>
      <div className="tree-container">
        {experiences.map((item, index) => (
          <div
            key={index}
            className={`tree-branch ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3>
                {item?.start} - {item?.end}
              </h3>
              <h4>{item?.title}</h4>
              <h5>{item?.company}</h5>
              <p>{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
