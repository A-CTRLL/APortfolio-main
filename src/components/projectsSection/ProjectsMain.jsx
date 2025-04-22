import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "South Africa e-Services Portal",
    align: "right",
    image: "../../public/images/e-service.png",
    link: "https://www.eservices.gov.za/tonkana/home.xhtml",
  },
  {
    name: "Gauteng egov",
    align: "left",
    image: "../../public/images/gauteng.png",
    link: "https://www.gauteng.gov.za/Home",
  },
  {
    name: "Enochmgijima gov",
    align: "right",
    image: "../../public/images/enoch.png",
    link: "https://www.enochmgijima.gov.za/",
  },
  {
    name: "Overpercent",
    align: "left",
    image: "../../public/images/Overpercent.png",
    link: "https://overpercent.co.za/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              align={project.align}
              image={project.image}
              link={project.link} // Add this line
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
