import React from 'react'
import '../app/styles/skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills-container '>
      <div className='skills-grid'>
        <div data-aos="fade-right">
          <h2 className='skills-heading'> Technologies I'm Skilled In</h2>
          <p className='skills-text'>
           
"As a full-stack development student, I'm gaining hands-on experience with front-end technologies like HTML, CSS, and JavaScript. I'm also learning React for building interactive user interfaces and exploring Node.js for back-end development. While I'm still progressing, I’m passionate about expanding my knowledge and skill set in these technologies."

This keeps it focused on the skills you've been learning so far.
          </p>
        </div>

        <div className='skills-right'>
          <div className='skills-icons-grid'>

            <div className='skills-space'>
              <h2  data-aos="fade-down">Tyescript</h2><br />
              <h2 data-aos="fade-right">React.js</h2><br />
              <h2 data-aos="fade-up">Next.js</h2>
            </div>
            <div className='skills-left'>
              <h2 data-aos="fade-down">Tailwind</h2><br />
              <h2 data-aos="fade-right">CSS</h2><br />
              <h2 data-aos="fade-up">Node.js</h2>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Skills;
