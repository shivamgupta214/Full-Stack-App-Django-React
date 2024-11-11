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
//           <div key={index} style={styles.projectCard}>
//             <h3 style={styles.projectName}>{project.name}</h3>
//             <p style={styles.projectDescription}>{project.description}</p>
//             <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={styles.githubLink}>
//               View on GitHub
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Projects</h2>
      <div style={styles.projectList}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={styles.projectCard} 
            onClick={() => window.open(project.githubLink, "_blank")}
          >
            <img src={project.image} alt={project.name} style={styles.projectImage} />
            <div style={styles.projectNameContainer}>
              <h3 style={styles.projectName}>{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles for the portfolio page
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#0a192f',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2em',
    margin: '20px 0',
  },
  projectList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  projectCard: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  projectCardHover: {
    transform: 'scale(1.05)', // Scale up on hover
  },
  projectImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  projectNameContainer: {
    padding: '10px',
    backgroundColor: '#333',
  },
  projectName: {
    color: '#fff',
    fontSize: '1.2em',
    margin: 0,
  }
};

export default Portfolio;
