import Image from "next/image";
import React from "react";
import "../../style/card.css"; 

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card" data-aos="zoom-in-up">
      {/* Image */}
      <div>
        <Image
          className="card-image"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      {/* Card Content */}
      <div className="card-content">
        {/* Title */}
        <div className="card-title">{title}</div>
        
        {/* Description */}
        <div className="card-desc">{desc}</div>
        
        {/* Tags */}
        <div className="card-tags">
          {tags.map((el) => (
            <div className="tag" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
