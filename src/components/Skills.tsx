import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="fade-right">
          <h2 className='text-4xl md:text-5xl font-semibold'> Technologies I'm Skilled In</h2>
          <p className='text-gray-300 pt-2'>
           
"As a full-stack development student, I'm gaining hands-on experience with front-end technologies like HTML, CSS, and JavaScript. I'm also learning React for building interactive user interfaces and exploring Node.js for back-end development. While I'm still progressing, I’m passionate about expanding my knowledge and skill set in these technologies."

This keeps it focused on the skills you've been learning so far.
          </p>
        </div>

        <div>
          <div className='grid grid-cols-2 text-amber-300 text-3xl sm:text-4xl font-medium'>

            <div className='space-y-2'>
              <h2  data-aos="fade-down">Tyescript</h2><br />
              <h2 data-aos="fade-right">React.js</h2><br />
              <h2 data-aos="fade-up">Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="fade-down">Tailwind</h2><br />
              <h2 data-aos="fade-right">CSS</h2><br />
              <h2 data-aos="fade-up">Node.js</h2>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
