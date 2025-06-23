import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  demoLink?: string;
  repositoryLink?: string;
  technologies?: string[];
}

const Card: React.FC<CardProps> = ({ title, description, image, demoLink, repositoryLink, technologies }) => {
  return (
    <div
      className="bg-black rounded-lg shadow-lg flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto transition-transform hover:scale-105"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 md:h-48 object-cover rounded-t-lg"
        />
      )}
      <div className="p-4 md:p-6 flex flex-col items-center flex-grow">
        <h2 className="text-lg md:text-xl font-semibold mb-2 text-center">{title}</h2>
        <p className="text-gray-300 text-center text-sm md:text-base mb-4">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <p className="text-gray-400 text-center text-xs md:text-sm mb-4">
            <span className="font-bold">Tecnologías:</span> {technologies.join(', ')}
          </p>
        )}

        <div className="flex justify-center gap-4 w-full mt-auto"> {/* Contenedor para los enlaces de acción */}
          {demoLink && (
            <a
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm md:text-base flex-1 text-center"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Demo
            </a>
          )}
          {repositoryLink && (
            <a
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm md:text-base flex-1 text-center"
              href={repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;