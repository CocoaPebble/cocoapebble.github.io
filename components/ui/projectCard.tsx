// ProjectCard.tsx
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  demoUrl,
  codeUrl,
}) => {
  return (
    <div className=" w-full max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        height={400}
        width={400}
        src={imageUrl}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={demoUrl}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2"
        >
          Demo
        </a>
        <a
          href={codeUrl}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
