import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioForm from './components/PortfolioForm';
import PortfolioList from './components/PortfolioList';
import PortfolioDetails from './components/PortfolioDetails';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<PortfolioList />} />
                <Route path="/create" element={<PortfolioForm />} />
                <Route path="/portfolio/:id" element={<PortfolioDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
