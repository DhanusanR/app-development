import React from "react";
import "./TeamPage.css"; // Import your CSS file for styling

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Balaji J",
      role: "Project Lead",
      description: "Balaji is the visionary behind our project and leads the team with a strong focus on innovation and excellence.",
      imageUrl: "path/to/balaji-image.jpg", // Adjust the image path
    },
    {
      name: "Dhanushan R",
      role: "Lead Developer",
      description: "Dhanushan is responsible for the core development and ensures the technical robustness of our solutions.",
      imageUrl: "path/to/dhanushan-image.jpg", // Adjust the image path
    },
    {
      name: "Deepak",
      role: "UI/UX Designer",
      description: "Deepak designs intuitive and user-friendly interfaces to provide an excellent user experience.",
      imageUrl: "path/to/deepak-image.jpg", // Adjust the image path
    },
  ];

  return (
    <div className="team-page">
      <h1 className="team-title">Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imageUrl} alt={member.name} className="team-member-image" />
            <h2 className="team-member-name">{member.name}</h2>
            <h3 className="team-member-role">{member.role}</h3>
            <p className="team-member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
