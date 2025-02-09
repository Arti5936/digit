import express from 'express';
import { createPortfolio, getPortfolios, getPortfolioById } from '../controllers/portfolioController.js';

const router = express.Router();

router.post('/', createPortfolio);
router.get('/', getPortfolios);
router.get('/:id', getPortfolioById);

export default router;
