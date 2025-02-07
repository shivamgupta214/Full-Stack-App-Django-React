import React, { useRef }from 'react';
import { FaGithub, FaLinkedin  } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import './HomePage.css'

const HomePage = () => {
  const experienceRef = useRef(null);
  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="homecontainer">
      <div className="left-column">
        <h1 className='name'>Shivam Gupta</h1>
        <h2 className='title'>Software Engineer</h2>
        <p className='subtitle'>I build efficient, engaging, and scalable applications.</p>
        
        <nav className='nav-links'>
          {/* <a href="#about" style={styles.link}>About</a> */}
          <a onClick={scrollToExperience} className='link'>Experience</a>
          {/* <a href="#projects" style={styles.link}>Projects</a> */}
        </nav>
        
        <div className='social-icons'>
        <a href="https://github.com/shivamgupta214" className='icon' target="_blank" rel="noopener noreferrer">
    <FaGithub />
</a>
<a href="https://linkedin.com/in/shivamgupta214" className='icon' target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
</a>
<a href="mailto:shivam@techjobmails.com" className='icon' target="_blank" rel="noopener noreferrer">
    <IoMdMail />
</a>


          {/* <a href="https://instagram.com/yourusername" style={styles.icon}><FaInstagram /></a>
          <a href="https://twitter.com/yourusername" style={styles.icon}><FaTwitter /></a> */}
        </div>
      </div>

      

      
      <div className='right-column'>
        <p className='description'>
          
          <br />
          I started my journey as a Software Engineer after completing my bachelors from Parul University, India. I got my interest in Full Stack Web Development during my bacherlors where I got good grasp in python and then started learning different web development tools.
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

        <section id="experience" className='section' ref={experienceRef}>
        <h1 className='header-title'>Experience</h1>
        
        <div className='job-container'>
          <h3  className='job-title'>Software Engineer, Humana</h3>
          <p className='date'>September 2023 — PRESENT</p>
        </div>
        <p className='job-description'>
          At Humana, I build efficient systems that streamline processes by integrating modern tech stacks. I collaborate with cross-functional teams to design impactful solutions that improve productivity and user experience.
        This summary highlights expertise in agile project management, web application development, and data optimization. With experience applying Agile methodologies across 7+ projects, productivity improved by 25%, 
        achieving 98% adherence to deadlines. Leveraging Python, Django, and SQL, data handling processes were streamlined, reducing query execution time by 30%. Expertise in data processing with Pandas and Matplotlib increased processing speed by 40%, 
        while development time was reduced by 20%. Real-time interactivity was enhanced through Node.js and WebSockets, paired with React.js, for live updates. Additionally, proficiency in deploying containerized applications on DataBricks with Kubernetes ensured 99.9% uptime, 
        and Tableau dashboards boosted data-driven decision-making by 40%. Skills in RESTful API development, front-end integration, and database optimization improved application functionality and data retrieval efficiency by 35% and 30%, respectively.
        </p>

        <div  className='job-container'>
          <h3 className='job-title'>Software Engineer, Streebo</h3>
          <p  className='date'> March 2020 — July 2022</p>
        </div>
        <p className='job-description'>
          At Streebo, I gained experiencing as a software developer with a strong foundation in Waterfall methodologies, ensuring timely and structured project delivery. Proficient in developing and deploying web applications using Python, Flask, and SQL, with a focus on efficiency and reduced development time. 
          Skilled in implementing RESTful APIs with JavaScript, AJAX, Node.js, and Express.js, enhancing application performance and response times. Expertise in machine learning with tools like NumPy, TensorFlow, and PyTorch, delivering improved prediction accuracy. 
          Adept at creating interactive Power BI reports to drive data-informed decisions and deploying scalable solutions on AWS with 99% uptime. Experienced in containerization with Docker and database optimization with MongoDB, ensuring reliable and efficient operations. 
          Demonstrates strong collaboration and version control capabilities using GitHub, effectively streamlining code integration and minimizing conflicts.
        </p>

        </section>
       
      </div>
    </div>
  );
};

export default HomePage;
