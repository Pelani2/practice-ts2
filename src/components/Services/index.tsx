import React from "react";
import Typography from "../Typography";
import "./services-style.scss";

const Services: React.FC = () => {
    return (
        <div className="services-page">
            <Typography variant="services-title">
                Our Services
            </Typography>
            <Typography variant="services-subtitle">
                Currency exchange
            </Typography>
            <Typography variant="services-paragraph">
                We offer currency exhange services with competitive rates.
                <br />
                Contact us to exhange your currency today.
            </Typography>
            <Typography variant="services-subtitle">
                Trading
            </Typography>
            <Typography variant="services-paragraph">
                Explore our trading platforms and start trading in the financial market.
                <br />
                Take advantage of our expert insights and tools.
            </Typography>
        </div>
    );
};

export default Services;