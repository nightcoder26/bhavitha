import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({
    company,
    role,
    startDate,
    endDate,
    description,
    logo
}) => {
    return (
        <div className="experience-card">
            <div className="experience-header">
                <div className="logo-container">
                    <img src={logo} alt={`${company} logo`} className="experience-logo" />
                </div>
                <div>
                    <h3 className="experience-company">{company}</h3>
                    <p className="experience-role">{role}</p>
                    <p className="experience-dates">{startDate} - {endDate}</p>
                </div>
            </div>
            <p className="experience-description">
                {description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>

    );
};

export default ExperienceCard;
