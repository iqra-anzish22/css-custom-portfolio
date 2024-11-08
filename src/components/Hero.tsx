import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile.png)]  bg-cover '
    style={{backgroundSize: "23%", backgroundPosition: "left 100px top 150px"}}
    >
<Navbar />

<div className='container grid lg:grid-cols-2 h-[calc(100vh-40px)]'>

  <div className='hidden lg:block'></div>
  <div className='text-[50px] sm:text-[130px] font-serif leading-tight flex justify-center items-center'>
    <div>
      <p data-aos="fade-left">I'm</p>
      <p  data-aos="fade-down">Web</p>
      <p data-aos="fade-left">Developer</p>
    </div>
  </div>

</div>
    </div>
  )
}

export default Hero