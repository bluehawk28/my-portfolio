import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';
import '../styles/Skills.scss';

function SkillsSphere() {
  useEffect(() => {
    const container = '.tagcloud-container'; // CSS selector for the container
    const skills = [
      'ReactJS',
      'JavaScript',
      'HTML',
      'CSS',
      'SCSS',
      'Tailwind CSS',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'Python',
      'Git',
      'Github',
      'Docker',
      'TypeScript',
      'Redux',
      'GraphQL',
      'Webpack',
      'Playwright',
      'JEST',
      'React Query'
    ];

    const options = {
      radius: 250,
      maxSpeed: 'normal',
      initSpeed: 'fast',
      direction: 135,
      keep: true,
    };

    // Initialize TagCloud
    TagCloud(container, skills, options);

    // Clean up on unmount
    return () => {
      const tagCloud = document.querySelector(container);
      if (tagCloud) tagCloud.innerHTML = '';
    };
  }, []);

  return (
    <section id="skills" className="skills-sphere">
      <h2>Skills</h2>
      <div className="tagcloud-container"></div>
    </section>
  );
}

export default SkillsSphere;
