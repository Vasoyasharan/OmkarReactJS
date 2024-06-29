import React from 'react';
import { motion } from 'framer-motion';
import './TeamSection.css';

const TeamSection = ({ teamMembers }) => {
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
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="team-member"
            >
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
