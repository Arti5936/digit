import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortfolio } from '../services/api';
import '../App.css';

const PortfolioForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        aboutMe: '',
        resume: '',
        skills: '',
        experience: [{ company: '', position: '', startDate: '', endDate: '', description: '' }],
        education: [{ institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '' }],
        projects: [{ title: '', description: '', githubLink: '', technologies: '' }],
        certifications: [{ title: '', issuer: '', link: '' }],
        socialLinks: [{ platform: '', url: '' }],
        achievements: [{ title: '', description: '', date: '' }],
        testimonials: [{ name: '', designation: '', company: '', recommendationLetterLink: '' }],
        theme: 'default',
    });

    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNestedChange = (e, index, field, section) => {
        const updatedSection = [...formData[section]];
        updatedSection[index][field] = e.target.value;
        setFormData({ ...formData, [section]: updatedSection });
    };

  

  


    const handleSubmit = async (e) => {
        e.preventDefault();

        const portfolioData = {
            ...formData,
            skills: formData.skills.split(',').map((skill) => skill.trim()),
        };

        try {
            await createPortfolio(portfolioData);
            alert('Portfolio created successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                country: '',
                aboutMe: '',
                resume: '',
                skills: '',
                experience: [{ company: '', position: '', startDate: '', endDate: '', description: '' }],
                education: [{ institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '' }],
                projects: [{ title: '', description: '', githubLink: '', technologies: '' }],
                certifications: [{ title: '', issuer: '', link: '' }],
                socialLinks: [{ platform: '', url: '' }],
                achievements: [{ title: '', description: '', date: '' }],
                testimonials: [{ name: '', designation: '', company: '', recommendationLetterLink: '' }],
                theme: 'default',
            });

            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (err) {
            console.error('Error creating portfolio:', err);
        }
    };

    const countries = [
        'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
        'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
        'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
        'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso',
        'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic',
        'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 
        'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)', 'Denmark',
        'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 
        'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini (fmr. "Swaziland")', 'Ethiopia',
        'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
        'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 
        'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq',
        'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
        'Kiribati', 'Korea (North)', 'Korea (South)', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
        'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
        'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali',
        'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia',
        'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (formerly Burma)',
        'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 
        'Nigeria', 'North Macedonia (formerly Macedonia)', 'Norway', 'Oman', 'Pakistan', 
        'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 
        'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 
        'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 
        'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia',
        'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
        'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
        'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste',
        'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
        'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 
        'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 
        'Yemen', 'Zambia', 'Zimbabwe'
    ];

    const themes = ['default', 'modern', 'creative', 'professional', 'minimal'];
    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Make Your Own Portfolio...</h2>
            {/* Basic Information */}
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            <select name="country" value={formData.country} onChange={handleChange} required>
                <option value="">Select Country</option>
                {countries.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>
            <textarea name="aboutMe" placeholder="About Me" value={formData.aboutMe} onChange={handleChange} />
            <input type="url" name="resume" placeholder="Resume Link" value={formData.resume} onChange={handleChange} required/>

            {/* Skills */}
            <input type="text" name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} required/>

            {/* Work Experience */}
            <h3>Work Experience</h3>
            {formData.experience.map((exp, index) => (
                <div key={index}>
                    <input type="text" placeholder="Company" value={exp.company} onChange={(e) => handleNestedChange(e, index, 'company', 'experience')} required />
                    <input type="text" placeholder="Position" value={exp.position} onChange={(e) => handleNestedChange(e, index, 'position', 'experience')} />
                    <label>Start Date</label>
                    <input type="date" placeholder="Start Date" value={exp.startDate} onChange={(e) => handleNestedChange(e, index, 'startDate', 'experience')} />
                    <label>End Date</label>
                    <input type="date" placeholder="End Date" value={exp.endDate} onChange={(e) => handleNestedChange(e, index, 'endDate', 'experience')} />
                    <textarea placeholder="Description" value={exp.description} onChange={(e) => handleNestedChange(e, index, 'description', 'experience')} />
                   
                </div>
            ))}
            

            {/* Education */}
            <h3>Education</h3>
            {formData.education.map((edu, index) => (
                <div key={index}>
                    <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => handleNestedChange(e, index, 'institution', 'education')} required />
                    <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleNestedChange(e, index, 'degree', 'education')} />
                    <input type="text" placeholder="Field of Study" value={edu.fieldOfStudy} onChange={(e) => handleNestedChange(e, index, 'fieldOfStudy', 'education')} />
                    <label>Start Date</label>
                    <input type="date" placeholder="Start Date" value={edu.startDate} onChange={(e) => handleNestedChange(e, index, 'startDate', 'education')} />
                    <label>End Date</label>
                    <input type="date" placeholder="End Date" value={edu.endDate} onChange={(e) => handleNestedChange(e, index, 'endDate', 'education')} />
                   
                </div>
            ))}
           

            {/* Projects */}
            <h3>Projects</h3>
            {formData.projects.map((proj, index) => (
                <div key={index}>
                    <input type="text" placeholder="Project Title" value={proj.title} onChange={(e) => handleNestedChange(e, index, 'title', 'projects')} required />
                    <input type="text" placeholder="Description" value={proj.description} onChange={(e) => handleNestedChange(e, index, 'description', 'projects')} />
                    <input type="url" placeholder="GitHub Link" value={proj.githubLink} onChange={(e) => handleNestedChange(e, index, 'githubLink', 'projects')} />
                    <input type="text" placeholder="Technologies" value={proj.technologies} onChange={(e) => handleNestedChange(e, index, 'technologies', 'projects')} />
                    
                </div>
            ))}
            

            {/* Certifications */}
            <h3>Certifications</h3>
            {formData.certifications.map((cert, index) => (
                <div key={index}>
                    <input type="text" placeholder="Title" value={cert.title} onChange={(e) => handleNestedChange(e, index, 'title', 'certifications')} required />
                    <input type="text" placeholder="Issuer" value={cert.issuer} onChange={(e) => handleNestedChange(e, index, 'issuer', 'certifications')} />
                    <input type="url" placeholder="Link" value={cert.link} onChange={(e) => handleNestedChange(e, index, 'link', 'certifications')} />
                    
                </div>
            ))}
            

            {/* Social Links */}
            <h3>Social Links</h3>
            {formData.socialLinks.map((link, index) => (
                <div key={index}>
                    <input type="text" placeholder="Platform" value={link.platform} onChange={(e) => handleNestedChange(e, index, 'platform', 'socialLinks')} required />
                    <input type="url" placeholder="URL" value={link.url} onChange={(e) => handleNestedChange(e, index, 'url', 'socialLinks')} />
                    
                </div>
            ))}
            
        {/* Theme Selection */}
        <h3>Theme</h3>
            <select name="theme" value={formData.theme} onChange={handleChange}>
                {themes.map((theme) => (
                    <option key={theme} value={theme}>
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </option>
                ))}
            </select>
            {/* Achievements */}
            <h3>Achievements</h3>
            {formData.achievements.map((ach, index) => (
                <div key={index}>
                    <input type="text" placeholder="Title" value={ach.title} onChange={(e) => handleNestedChange(e, index, 'title', 'achievements')} required />
                    <input type="text" placeholder="Description" value={ach.description} onChange={(e) => handleNestedChange(e, index, 'description', 'achievements')} />
                    <input type="date" placeholder="Date" value={ach.date} onChange={(e) => handleNestedChange(e, index, 'date', 'achievements')} />
                   
                </div>
            ))}
            

           
            
            
            
            
            {/* Submit Button */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default PortfolioForm;
