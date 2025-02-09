import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPortfolios } from '../services/api';
import '../App.css';

const PortfolioList = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        const getPortfolios = async () => {
            try {
                const { data } = await fetchPortfolios();
                setPortfolios(data);
            } catch (err) {
                console.error('Error fetching portfolios:', err);
            }
        };
        getPortfolios();
    }, []);

    return (
        <div className="container">
            <h2>All Portfolios</h2>
            <div className="card-grid">
                {portfolios.map((portfolio) => (
                    <Link
                        to={`/portfolio/${portfolio._id}`} 
                        className="card"
                        key={portfolio._id}
                    >
                        <h3 className="card-title">{portfolio.name}</h3>
                        <p className="card-email">{portfolio.email}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PortfolioList;
