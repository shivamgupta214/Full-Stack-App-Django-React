// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./CursorSpotlight.css"; // Import CSS file

// const CursorSpotlight = () => {
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="spotlight-container">
//       {/* Spotlight Effect */}
//       <motion.div
//         className="spotlight"
//         animate={{
//           background: `radial-gradient(circle 150px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.95))`,
//         }}
//         transition={{ ease: "linear", duration: 0.2 }}
//       ></motion.div>

//       {/* Page Content */}
//       <div className="content">
//         <h1>Move your cursor to see the magic! ✨</h1>
//       </div>
//     </div>
//   );
// };

// export default CursorSpotlight;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./CursorSpotlight.css";

const NUM_STARS = 100; // Number of stars

const CursorEffect = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: NUM_STARS }).map(() => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setStars(newStars);

    // Track cursor position
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="stars-container">
      {/* Spotlight Effect */}
      <motion.div
        className="spotlight-cursor"
        animate={{
          background: `radial-gradient(circle 150px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.95))`,
        }}
        transition={{ ease: "linear", duration: 0.2 }}
      ></motion.div>

      {/* Stars */}
      {stars.map((star) => {
        const distance = Math.sqrt(
          Math.pow(cursorPos.x - star.x, 2) + Math.pow(cursorPos.y - star.y, 2)
        );

        return (
          <motion.div
            key={star.id}
            className="star"
            initial={{ x: star.x, y: star.y }}
            animate={{
              x: distance < 150 ? star.x + (star.x - cursorPos.x) * 0.3 : star.x,
              y: distance < 150 ? star.y + (star.y - cursorPos.y) * 0.3 : star.y,
            }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          />
        );
      })}

      {/* Page Content */}
      <div className="content">
        <h1>Move your cursor to see the magic! ✨</h1>
      </div>
    </div>
  );
};

export default CursorEffect;
