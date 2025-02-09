import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
    // Basic Information
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
    },
    country: {
        type: String,
    },
    aboutMe: {
        type: String,
    },
    resume: {
        type: String, // Link to the resume file
    },

    skills: {
        type: [String],
        required: true,
    },

    // Work Experience
    experience: [
        {
            company: String,
            position: String,
            startDate: Date,
            endDate: Date, // Null if currently employed
            description: String, // Responsibilities and achievements
        },
    ],

    // Education
    education: [
        {
            institution: String,
            degree: String,
            fieldOfStudy: String,
            startDate: Date,
            endDate: Date,
        },
    ],

    // Projects
    projects: [
        {
            title: String,
            description: String,
            githubLink: String, // GitHub or repository link
            technologies: [String], // Technologies used
        },
    ],

    // Certifications
    certifications: [
        {
            title: String,
            issuer: String,
            link: String, // Link to the certification
        },
    ],

    // Social Media or Professional Links
    socialLinks: [
        {
            platform: String, // e.g., "GitHub", "LinkedIn", "Twitter"
            url: String, // Profile URL
        },
    ],

    // Achievements
    achievements: [
        {
            title: String, // Title of achievement
            description: String, // Brief explanation
            date: Date, // Date of achievement
        },
    ],

    // Testimonials or Recommendations
    testimonials: [
        {
            name: String, // Name of recommender
            designation: String, // Job title or role of recommender
            company: String, // Company or organization
            recommendationLetterLink: String, // Link to the recommendation letter
        },
    ],

    // Portfolio Customization
    theme: {
        type: String,
        default: "default",
    },

    // Timestamps
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
