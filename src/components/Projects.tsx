
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [

    {
        id: 0,
        title: "Todo List",
        desc: "A React & typescript based app for managing and organziing ",
        img: "/todo1.jpg",
        tags:["React", "Node", "css", "Typescript"],
    },

    {
        id: 2,
        title: "Weather App",
        desc: "A React & typescript based app for managing and organziing ",
        img: "/p2.png",
        tags:["React", "Node", "css", "Typescript"],
    },
    {
        id: 3,
        title: "CountDown Timer",
        desc: "A React & typescript based app for managing and organziing ",
        img: "/p3.png",
        tags:["React", "Node", "css", "Typescript"],
    },
        
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-20 text-4xl font-semibold'>
      <Heading   title=' Work & Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center text-sm'>
        {data.map((el) => (<Card 
        key={el.id}
        title ={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
