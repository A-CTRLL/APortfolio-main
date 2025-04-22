import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Abangula ICT Solutions",
    date: "2020 -2021",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Intern Engineer",
    company: "SITA SOC",
    date: "2022 - 2023",
    responsibilities: [
      "Developed a full-cycle platform (intake to billing) using Typescript/Angular",
      "Doing Documentation, making test data, and Creating Algorithms for workflows.",

    ],
  },
  {
    job: "Experientail Trainee",
    company: "SITA SOC",
    date: "2023 - 2024",
    responsibilities: [
      "Developed a full-cycle syatem (intake to billing) using Typescript/Angular/Java Springboot cutting data errors by 25%.",
      "Integrated EHR and automated billing, reducing invoice generation to 15min.",
    ],
  },
  {
    job: "Full stack Developer",
    company: "SITA SOC",
    date: "2024 - present",
    responsibilities: [
    "Designs scalable back-end systems with OOP principles.",
    "Crafts dynamic front-end interfaces for seamless API integration.",
    "Drives project success through communication and collaborative problem-solving across.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 3 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
