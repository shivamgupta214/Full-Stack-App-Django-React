// import React from 'react';

// const HomePage = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.name}>Shivam Gupta</h1>
//       <h2 style={styles.title}>Software Engineer</h2>
      
//       <section style={styles.section}>
//         <h3 style={styles.sectionTitle}>Summary</h3>
//         <p style={styles.text}>
//           Software Engineer with around 4 years of experience in designing, developing, and deploying software solutions using Python. Proficient in frameworks like Django, Flask, and libraries such as Pandas, NumPy, and TensorFlow. Skilled in Agile, SDLC, RESTful APIs, data visualization, and cloud services (AWS, Azure, GCP).
//         </p>
//       </section>

//       <section style={styles.section}>
//         <h3 style={styles.sectionTitle}>Skills</h3>
//         <p style={styles.text}><strong>Programming Languages:</strong> Python, SQL, Java</p>
//         <p style={styles.text}><strong>Frameworks & Libraries:</strong> Django, Flask, Pandas, NumPy, TensorFlow, Scikit-learn, PyTorch, React.js, Node.js</p>
//         <p style={styles.text}><strong>Cloud Services:</strong> AWS, Azure, GCP</p>
//         <p style={styles.text}><strong>CI/CD & DevOps:</strong> Jenkins, Docker, Kubernetes, Git</p>
//       </section>

//       <section style={styles.section}>
//         <h3 style={styles.sectionTitle}>Experience</h3>
//         <div style={styles.job}>
//           <h4 style={styles.jobTitle}>Software Engineer at Humana, USA</h4>
//           <p style={styles.jobDate}>Sep 2023 - Present</p>
//           <ul style={styles.list}>
//             <li>Boosted team productivity by 25% using Agile methodologies.</li>
//             <li>Optimized data processes, reducing query time by 30%.</li>
//             <li>Integrated front-end with RESTful APIs, enhancing UX by 35%.</li>
//           </ul>
//         </div>

//         <div style={styles.job}>
//           <h4 style={styles.jobTitle}>Software Engineer at Streebo Inc, India</h4>
//           <p style={styles.jobDate}>Mar 2020 - Jul 2022</p>
//           <ul style={styles.list}>
//             <li>Reduced time-to-market by 40% and improved application performance by 25%.</li>
//             <li>Deployed scalable solutions on AWS with 99% uptime.</li>
//             <li>Increased data query efficiency by 35% in MongoDB databases.</li>
//           </ul>
//         </div>
//       </section>

//       <section style={styles.section}>
//         <h3 style={styles.sectionTitle}>Education</h3>
//         <p style={styles.text}><strong>Master of Science in Computer Science</strong>, Illinois Institute of Technology, May 2024</p>
//         <p style={styles.text}><strong>Bachelor of Technology in Computer Science and Engineering</strong>, Parul University, Jul 2020</p>
//       </section>
//     </div>
//   );
// };

// // Inline styles for the homepage
// const styles = {
//   container: {
//     background: 'linear-gradient(to bottom, #e0f7fa, #80deea)',
//     color: '#333',
//     fontFamily: 'Arial, sans-serif',
//     padding: '20px',
//     maxWidth: '800px',
//     margin: '0 auto',
//     borderRadius: '8px',
//   },
//   name: {
//     fontSize: '2.5em',
//     marginBottom: '5px',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: '1.5em',
//     textAlign: 'center',
//     color: '#007bb5',
//   },
//   section: {
//     marginBottom: '20px',
//     padding: '10px 0',
//   },
//   sectionTitle: {
//     fontSize: '1.3em',
//     borderBottom: '2px solid #007bb5',
//     paddingBottom: '5px',
//     marginBottom: '10px',
//   },
//   text: {
//     fontSize: '1em',
//     lineHeight: '1.6',
//     margin: '5px 0',
//   },
//   job: {
//     marginBottom: '15px',
//   },
//   jobTitle: {
//     fontSize: '1.1em',
//     fontWeight: 'bold',
//   },
//   jobDate: {
//     fontSize: '0.9em',
//     color: '#555',
//   },
//   list: {
//     paddingLeft: '20px',
//     fontSize: '0.95em',
//   },
// };

// export default HomePage;


import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftColumn}>
        <h1 style={styles.name}>Shivam Gupta</h1>
        <h2 style={styles.title}>Software Engineer</h2>
        <p style={styles.subtitle}>I build efficient, engaging, and scalable digital solutions.</p>
        
        <nav style={styles.navLinks}>
          {/* <a href="#about" style={styles.link}>About</a> */}
          <a href="#experience" style={styles.link}>Experience</a>
          {/* <a href="#projects" style={styles.link}>Projects</a> */}
        </nav>
        
        <div style={styles.socialIcons}>
          <a href="https://github.com/yourusername" style={styles.icon}><FaGithub /></a>
          <a href="https://linkedin.com/in/shivamgupta214" style={styles.icon}><FaLinkedin /></a>
          {/* <a href="https://instagram.com/yourusername" style={styles.icon}><FaInstagram /></a>
          <a href="https://twitter.com/yourusername" style={styles.icon}><FaTwitter /></a> */}
        </div>
      </div>

      
      <div style={styles.rightColumn}>
        <p style={styles.description}>
          
          <br />
          Dynamic Software Engineer with approximately 4 years of hands-on experience in designing, developing, and deploying robust 
          software solutions utilizing Python. Proficient in leveraging frameworks such as Django, Flask and Fast API, alongside libraries like Pandas, 
          NumPy, and TensorFlow, to deliver high-quality applications. Well-versed in Agile, SDLC, and Waterfall methodologies, 
          demonstrating a solid understanding of project lifecycles. Skilled in building RESTful APIs and creating impactful data visualizations 
          using Tableau and Power BI. Experienced with cloud platforms including AWS, Azure, and GCP, enhancing application performance 
          and scalability. Adept in version control systems like Git and GitHub, contributing to 12+ projects to boost team efficiency and 
          collaboration. Passionate about continuous learning and applying innovative solutions to complex technical challenges. 
          <br />
          In my free time, I enjoy contributing to open-source projects, exploring new technologies, and participating in coding challenges.
        </p>

        <section id="experience" style={styles.section}>
        <h2>Experience</h2>
        
        <div style={styles.jobContainer}>
          <h3 style={styles.jobTitle}>Software Engineer, Humana</h3>
          <p style={styles.date}>September 2023 — PRESENT</p>
        </div>
        <p style={styles.jobDescription}>
          At Humana, I build efficient systems that streamline processes by integrating modern tech stacks. I collaborate with cross-functional teams to design impactful solutions that improve productivity and user experience.
        This summary highlights expertise in agile project management, web application development, and data optimization. With experience applying Agile methodologies across 7+ projects, productivity improved by 25%, 
        achieving 98% adherence to deadlines. Leveraging Python, Django, and SQL, data handling processes were streamlined, reducing query execution time by 30%. Expertise in data processing with Pandas and Matplotlib increased processing speed by 40%, 
        while development time was reduced by 20%. Real-time interactivity was enhanced through Node.js and WebSockets, paired with React.js, for live updates. Additionally, proficiency in deploying containerized applications on DataBricks with Kubernetes ensured 99.9% uptime, 
        and Tableau dashboards boosted data-driven decision-making by 40%. Skills in RESTful API development, front-end integration, and database optimization improved application functionality and data retrieval efficiency by 35% and 30%, respectively.
        </p>

        <div style={styles.jobContainer}>
          <h3 style={styles.jobTitle}>Software Engineer, Streebo</h3>
          <p style={styles.date}> March 2020 — July 2022</p>
        </div>
        <p style={styles.jobDescription}>
          At Humana, I build efficient systems that streamline processes by integrating modern tech stacks. I collaborate with cross-functional teams to design impactful solutions that improve productivity and user experience.
        This summary highlights expertise in agile project management, web application development, and data optimization. With experience applying Agile methodologies across 7+ projects, productivity improved by 25%, 
        achieving 98% adherence to deadlines. Leveraging Python, Django, and SQL, data handling processes were streamlined, reducing query execution time by 30%. Expertise in data processing with Pandas and Matplotlib increased processing speed by 40%, 
        while development time was reduced by 20%. Real-time interactivity was enhanced through Node.js and WebSockets, paired with React.js, for live updates. Additionally, proficiency in deploying containerized applications on DataBricks with Kubernetes ensured 99.9% uptime, 
        and Tableau dashboards boosted data-driven decision-making by 40%. Skills in RESTful API development, front-end integration, and database optimization improved application functionality and data retrieval efficiency by 35% and 30%, respectively.
        </p>

        </section>
       
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#0a192f',
    color: '#ccd6f6',
    minHeight: '100vh',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  leftColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '40px',
  },
  name: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: 0,
  },
  title: {
    fontSize: '1.5rem',
    color: '#64ffda',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#8892b0',
    marginBottom: '20px',
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '1.1rem',
    color: '#ccd6f6',
  },
  link: {
    textDecoration: 'none',
    color: '#ccd6f6',
    cursor: 'pointer',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
  },
  icon: {
    color: '#8892b0',
    fontSize: '1.5rem',
    textDecoration: 'none',
  },
  rightColumn: {
    flex: 2,
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#8892b0',
  },
  jobContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensures vertical alignment
    marginTop: '40px',
  },
  date: {
    fontSize: '0.9rem',
    color: '#8892b0',
    marginTop: '40px',
  },
  jobTitle: {
    fontSize: '1.2rem',
    color: '#ccd6f6',
    margin: '10px 0',
  },
  jobDescription: {
    fontSize: '1rem',
    color: '#8892b0',
    lineHeight: '1.6',
  },
};

export default HomePage;
