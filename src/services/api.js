import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Get all portfolios
export const fetchPortfolios = () => API.get('/portfolios');

// Get a portfolio by ID
export const fetchPortfolioById = (id) => API.get(`/portfolios/${id}`);

// Create a new portfolio
export const createPortfolio = (portfolioData) => API.post('/portfolios', portfolioData);
