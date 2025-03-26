import React from "react";
import { ExternalLink } from "lucide-react"; // Import external link icon

const Projects = () => {
  const projectData = [
    { id: 1, img: "/click_chat_img.png", description: "Click-chat", link: "https://click-chat-underconstruction.netlify.app/" },
    { id: 2, img: "/techshade_img.png", description: "Techshade", link: "https://techshade-sumit.netlify.app/" },
    { id: 3, img: "/amazon_img.png", description: "Web Amazon Clone", link: "https://amazon-clones0x.netlify.app/" },
    { id: 4, img: "/medimeet.png", description: "Medi-meet", link: "https://mymedimeet.netlify.app/" },
    // { id: 5, img: "/images/project5.jpg", description: "Project 5 Description", link: "https://project5.com" },
    // { id: 6, img: "/images/project6.jpg", description: "Project 6 Description", link: "https://project6.com" },
    // { id: 7, img: "/images/project7.jpg", description: "Project 7 Description", link: "https://project7.com" },
    // { id: 8, img: "/images/project8.jpg", description: "Project 8 Description", link: "https://project8.com" },
  ];

  return (
    <div id="projects" className="mx-auto mt-16 w-[100%]">
      <div className="text-sky-600 text-2xl underline font-semibold flex justify-center items-center">
        Projects
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 gap-5 p-4">
        {projectData.map((project) => (
          <div key={project.id} className="bg-slate-300 rounded-3xl p-2 min-h-[300px] shadow-md relative">
            <div
              className="rounded-3xl h-[75%] bg-cover bg-center bg-no-repeat  "
              style={{ backgroundImage: `url(${project.img})` }}
            />

            <div className="p-2 flex justify-between items-center">
              <span>{project.description}</span>

              {/* Visit Project Link Icon */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-800 transition"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
