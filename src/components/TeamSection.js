import React from 'react';
import { motion } from 'framer-motion';
import './TeamSection.css';
import teamImage1 from '../components/img/hardik.jpg'
import teamImage2 from '../components/img/sharan1.jpg'
import teamImage3 from '../components/img/shivraj.jpg'


const TeamSection = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="team-title">Our Team</h2>
          <p className="team-description">
            Meet the dedicated professionals behind Omkar Industries.
          </p>
        </motion.div>
        <div className="team-grid">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="team-member"
          >
            <img src={teamImage1} alt="Team Member 1" className="team-image" />
            <h3 className="team-name">Hardik Vanani</h3>
            <p className="team-role">CTO</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="team-member"
          >
            <img src={teamImage2}  alt="Team Member 2" className="team-image" />
            <h3 className="team-name">Sharan VAsoya</h3>
            <p className="team-role">CEO</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="team-member"
          >
            <img src={teamImage3}  alt="Team Member 2" className="team-image" />
            <h3 className="team-name">Shivraj Neoliya</h3>
            <p className="team-role">CFO</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

