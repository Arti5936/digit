import Portfolio from '../models/Portfolio.js';

// Create a new portfolio
export const createPortfolio = async (req, res) => {
    try {
        const portfolio = new Portfolio(req.body);
        const savedPortfolio = await portfolio.save();
        res.status(201).json(savedPortfolio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all portfolios
export const getPortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find();
        res.status(200).json(portfolios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single portfolio by ID
export const getPortfolioById = async (req, res) => {
    try {
        const portfolio = await Portfolio.findById(req.params.id);
        if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });
        res.status(200).json(portfolio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
