import hospital from "../assets/projects/hospital.png";
import wonderlog from "../assets/projects/wonderlog.png";
import dairy from "../assets/projects/dairy.png";
import grey from "../assets/projects/grey.png";

const projects = [
  {
    title: "Hospital Management System",
    duration: "Frontend Developer Internship • 6 Months",
    description:
      "Developed responsive and user-friendly frontend modules using React.js during my internship. Integrated REST APIs, implemented reusable components, managed patient and billing interfaces, and collaborated with the development team to deliver production-ready features.",
    technologies: ["React.js", "JavaScript", "Bootstrap", "REST API", "Git"],
    image: hospital,

    buttonText: "Internship Letter",
    demo: "/internship-letter.pdf",
  },

  {
    title: "WonderLog - Travel Bucket List",
    duration: "Personal MERN Project",
    description:
      "An ongoing MERN Stack application that helps users organize travel destinations, create bucket lists, and manage future travel plans. The project is currently under development with additional features being implemented.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    image: wonderlog,

    buttonText: "",
    demo: "",
  },

  {
    title: "Smart Dairy System",
    duration: "MCA Academic Project",
    description:
      "Designed and developed a dairy management system to simplify milk collection, customer management, inventory tracking, and daily operations through a user-friendly digital interface.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    image: dairy,

    buttonText: "View Screenshots",
    demo: "/smart-dairy.pdf",
  },

  {
    title: "Grey Cloth Emporium",
    duration: "BCA Major Project",
    description:
      "Developed an e-commerce-inspired textile web application featuring product management, responsive layouts, and an intuitive user interface to enhance the online shopping experience.",
    technologies: ["React.js", "MERN Stack", "Blender", "CSS"],
    image: grey,

    buttonText: "",
    demo: "",
  },
];

export default projects;
