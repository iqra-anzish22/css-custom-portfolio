import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../app/styles/card.css';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  // State to store window width
  const [windowWidth, setWindowWidth] = useState(0);

  // useEffect to update windowWidth only on client side
  useEffect(() => {
    // This will only run on the client-side
    setWindowWidth(window.innerWidth);

    // Optional: Add a resize event listener to update windowWidth on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures this runs only once after initial render

  return (
    <div className={`card ${windowWidth >= 640 ? 'card-sm' : ''}`} data-aos="fade-down">
      <div>
        <Image
          className={`card-image ${windowWidth >= 640 ? 'card-image-sm' : ''}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="card-container">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className="card-tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
