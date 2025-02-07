// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Portfolio = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/projects/')
//       .then(response => {
//         setProjects(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching projects:", error);
//       });
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>My Projects</h2>
//       <div style={styles.projectList}>
//         {projects.map((project, index) => (
//           <div 
//             key={index} 
//             style={styles.projectCard} 
//             onClick={() => window.open(project.githubLink, "_blank")}
//           >
//             <img src={project.image} alt={project.name} style={styles.projectImage} />
//             <div style={styles.projectNameContainer}>
//               <h3 style={styles.projectName}>{project.name}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Styles for the portfolio page
// const styles = {
//   container: {
//     padding: '20px',
//     textAlign: 'center',
//     backgroundColor: '#0a192f',
//     minHeight: '100vh',
//   },
//   title: {
//     fontSize: '2em',
//     margin: '20px 0',
//     color: 'rgb(100, 255, 218)'
//   },
//   // projectList: {
//   //   display: 'grid',
//   //   gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//   //   gap: '20px',
//   //   padding: '20px',
//   // },

//   projectList: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns by default
//     gap: '20px',
//     padding: '20px',
  
//     '@media (max-width: 900px)': { 
//       gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns for tablets
//     },
  
//     '@media (max-width: 600px)': {
//       gridTemplateColumns: 'repeat(1, 1fr)', // 1 column for mobile screens
//     },
//   },
  

//   projectCard: {
//     backgroundColor: '#fff',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     cursor: 'pointer',
//     textAlign: 'center',
//     transition: 'transform 0.3s',
//   },
//   // projectCardHover: {
//   //   transform: 'scale(1.05)', // Scale up on hover
//   // },
//   projectImage: {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//   },
//   projectNameContainer: {
//     padding: '10px',
//     backgroundColor: '#333',
//   },
//   projectName: {
//     color: '#fff',
//     fontSize: '1.2em',
//     margin: 0,
//   }
// };

// export default Portfolio;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion"; // Import Framer Motion

// const Portfolio = () => {
//   const [projects, setProjects] = useState([]);

//   const PROJECTS = [
//     {
//       name: "Logistic Hub MERN",
//       githubLink: "https://github.com/shivamgupta214/Logistic-Hub-FULL-STACK",
//       image: "https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png",
//     },
//     {
//       name: "Sudoku Solver",
//       githubLink: "https://github.com/shivamgupta214/Sudoko_Solver",
//       image: "https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png",
//     },
//     {
//       name: "Todo Web App - Frontend",
//       githubLink: "https://github.com/shivamgupta214/Todo-Web-App_FrontEnd",
//       image: "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feibm96k9y07irdwu0wlj.png",
//     },
//     {
//       name: "Todo Web App - Backend",
//       githubLink: "https://github.com/shivamgupta214/Todo-Web-App_BackEnd",
//       image: "https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png",
//     },
//     {
//       name: "Stack Overflow Data Crawling with Data Visualization",
//       githubLink: "https://github.com/shivamgupta214/StackOverflow_DataCarwling",
//       image: "https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png",
//     },
//   ];

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/projects/")
//       .then((response) => {
//         setProjects(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching projects:", error);
//         setProjects(PROJECTS);
//       });
//   }, []);

//   // Animation variants for project cards
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 }, // Start below with opacity 0
//     visible: (index) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: index * 0.2, // Delay each card animation
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     }),
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>My Projects</h2>
//       <div style={styles.projectList}>
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             style={styles.projectCard}
//             onClick={() => window.open(project.githubLink, "_blank")}
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             custom={index} // Pass index to stagger animation
//           >
//             <img src={project.image} alt={project.name} style={styles.projectImage} />
//             <div style={styles.projectNameContainer}>
//               <h3 style={styles.projectName}>{project.name}</h3>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Styles for the portfolio page
// const styles = {
//   container: {
//     padding: "20px",
//     textAlign: "center",
//     backgroundColor: "#0a192f",
//     minHeight: "100vh",
//   },
//   title: {
//     fontSize: "2em",
//     margin: "20px 0",
//     color: "rgb(100, 255, 218)",
//   },
//     projectList: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns by default
//     gap: '20px',
//     padding: '20px',
  
//     '@media (max-width: 900px)': { 
//       gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns for tablets
//     },
  
//     '@media (max-width: 768px)': {
//       gridTemplateColumns: 'repeat(1, 1fr)', // 1 column for mobile screens
//     },
//   },
 
//   projectCard: {
//     backgroundColor: "#fff",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     borderRadius: "8px",
//     overflow: "hidden",
//     cursor: "pointer",
//     textAlign: "center",
//     transition: "transform 0.3s",
//   },
//   projectImage: {
//     width: "100%",
//     height: "200px",
//     objectFit: "cover",
//   },
//   projectNameContainer: {
//     padding: "10px",
//     backgroundColor: "#333",
//   },
//   projectName: {
//     color: "#fff",
//     fontSize: "1.2em",
//     margin: 0,
//   },
// };

// export default Portfolio;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import './portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  const PROJECTS = [
    {
      name: "Logistic Hub MERN",
      githubLink: "https://github.com/shivamgupta214/Logistic-Hub-FULL-STACK",
      image: "https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png",
    },
    {
      name: "Sudoku Solver",
      githubLink: "https://github.com/shivamgupta214/Sudoko_Solver",
      image: "https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png",
    },
    {
      name: "Todo Web App - Frontend",
      githubLink: "https://github.com/shivamgupta214/Todo-Web-App_FrontEnd",
      image: "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feibm96k9y07irdwu0wlj.png",
    },
    {
      name: "Todo Web App - Backend",
      githubLink: "https://github.com/shivamgupta214/Todo-Web-App_BackEnd",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png",
    },
    {
      name: "Stack Overflow Data Crawling with Data Visualization",
      githubLink: "https://github.com/shivamgupta214/StackOverflow_DataCarwling",
      image: "https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png",
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects/")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setProjects(PROJECTS);
      });
  }, []);

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            onClick={() => window.open(project.githubLink, "_blank")}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 0.8, rotate: 1.1 }}
            custom={index}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-name-container">
              <h3 className="project-name">{project.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
