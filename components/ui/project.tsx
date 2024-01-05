import ProjectCard from "./projectCard";

const Project = () => {
  return (
    <div className="container" id="project">
      <div className="flex justify-center items-center mt-24">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
          Projects
        </h1>
      </div>
      <div className="flex flex-auto columns-3-3 gap-8 mt-8">
        <ProjectCard
          title="project1"
          description="this is a demo project to showcase"
          imageUrl="Image_20230904144221.jpg"
          demoUrl="https://www.google.com"
          codeUrl="https://www.google.com"
        />
        <ProjectCard
          title="project1"
          description="this is a demo project to showcase"
          imageUrl="Image_20230904144221.jpg"
          demoUrl="https://www.google.com"
          codeUrl="https://www.google.com"
        />
        <ProjectCard
          title="project1"
          description="this is a demo project to showcase"
          imageUrl="Image_20230904144221.jpg"
          demoUrl="https://www.google.com"
          codeUrl="https://www.google.com"
        />
        <ProjectCard
          title="project1"
          description="this is a demo project to showcase"
          imageUrl="Image_20230904144221.jpg"
          demoUrl="https://www.google.com"
          codeUrl="https://www.google.com"
        />
      </div>
    </div>
  );
};

export default Project;
