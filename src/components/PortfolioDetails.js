import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPortfolioById } from '../services/api';
import '../App.css';

const PortfolioDetails = () => {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        const getPortfolio = async () => {
            try {
                const { data } = await fetchPortfolioById(id);
                setPortfolio(data);
            } catch (err) {
                console.error('Error fetching portfolio:', err);
            }
        };

        getPortfolio();
    }, [id]);

    if (!portfolio) {
        return <div>Loading portfolio...</div>;
    }

    // Get the theme from portfolio data
    const themeClass = portfolio.theme ? portfolio.theme.toLowerCase() : 'default';

    return (
        <div className={`portfolio-details-container ${themeClass}`}>
            <h2>{portfolio.name}</h2>
            <p>Email: {portfolio.email}</p>
            <p>Phone: {portfolio.phone}</p>
            <p>Country: {portfolio.country}</p>
            <p>About Me: {portfolio.aboutMe}</p>
            {portfolio.resume && (
                <p>Resume: <a href={portfolio.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
            )}

            {/* Skills */}
            {portfolio.skills?.length > 0 && (
                <div>
                    <h3>Skills</h3>
                    <ul>
                        {portfolio.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Work Experience */}
            {portfolio.experience?.length > 0 && (
                <div>
                    <h3>Work Experience</h3>
                    <ul>
                        {portfolio.experience.map((job, index) => (
                            <li key={index}>
                                <p><strong>{job.position}</strong> at {job.company}</p>
                                <p>{job.startDate ? `From: ${new Date(job.startDate).toLocaleDateString()}` : 'Start Date: N/A'} - 
                                   {job.endDate ? `To: ${new Date(job.endDate).toLocaleDateString()}` : 'Present'}</p>
                                <p>{job.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Education */}
            {portfolio.education?.length > 0 && (
                <div>
                    <h3>Education</h3>
                    <ul>
                        {portfolio.education.map((edu, index) => (
                            <li key={index}>
                                <p><strong>{edu.degree}</strong> in {edu.fieldOfStudy}</p>
                                <p>From: {edu.institution}</p>
                                <p>{edu.startDate ? `From: ${new Date(edu.startDate).toLocaleDateString()}` : 'Start Date: N/A'} - 
                                   {edu.endDate ? `To: ${new Date(edu.endDate).toLocaleDateString()}` : 'Present'}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Projects */}
            {portfolio.projects?.length > 0 && (
                <div>
                    <h3>Projects</h3>
                    <ul>
                        {portfolio.projects.map((project, index) => (
                            <li key={index}>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                {project.githubLink && (
                                    <p>GitHub: <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View Project</a></p>
                                )}
                                <p>Technologies: {project.technologies.join(', ')}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Certifications */}
            {portfolio.certifications?.length > 0 && (
                <div>
                    <h3>Certifications</h3>
                    <ul>
                        {portfolio.certifications.map((cert, index) => (
                            <li key={index}>
                                <p><strong>{cert.title}</strong> from {cert.issuer}</p>
                                <p><a href={cert.link} target="_blank" rel="noopener noreferrer">View Certification</a></p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Social Links */}
            {portfolio.socialLinks?.length > 0 && (
                <div>
                    <h3>Social Links</h3>
                    <ul>
                        {portfolio.socialLinks.map((link, index) => (
                            <li key={index}>
                                <p>{link.platform}: <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a></p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Achievements */}
            {portfolio.achievements?.length > 0 && (
                <div>
                    <h3>Achievements</h3>
                    <ul>
                        {portfolio.achievements.map((achievement, index) => (
                            <li key={index}>
                                <p><strong>{achievement.title}</strong>: {achievement.description}</p>
                                <p>Date: {new Date(achievement.date).toLocaleDateString()}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Testimonials */}
            {portfolio.testimonials?.length > 0 && (
                <div>
                    <h3>Testimonials</h3>
                    <ul>
                        {portfolio.testimonials.map((testimonial, index) => (
                            <li key={index}>
                                <p><strong>{testimonial.name}</strong>, {testimonial.designation} at {testimonial.company}</p>
                                <p><a href={testimonial.recommendationLetterLink} target="_blank" rel="noopener noreferrer">View Recommendation Letter</a></p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PortfolioDetails;
