
import React from 'react'
import Heading from './Heading'
import Card from './Card'
import '../app/styles/project.css'

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
        
];

const Projects = () => {
  return (
    <div id='projects' className='project-container'>
      <Heading   title=' Work & Projects'/>
      <div className='project-grid project-grid-xl project-grid-md-2 project-grid-lg-3 project-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title ={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  );
};

export default Projects
