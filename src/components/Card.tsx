import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  url: string
}

const Card: React.FC<CardProps> = ({ title, description, image, url }) => {
  return (
    <a 
      className="bg-black rounded-lg shadow-lg flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto transition-transform hover:scale-105"
      href={url}
    >
      <img src={image} alt={title} className="w-full h-40 md:h-48 object-cover rounded-t-lg" />
      <div className="p-4 md:p-6 flex flex-col items-center">
        <h2 className="text-lg md:text-xl font-semibold mb-2 text-center">{title}</h2>
        <p className="text-gray-300 text-center text-sm md:text-base">{description}</p>
      </div>
    </a>
  );
};

export default Card;