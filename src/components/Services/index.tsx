import React from "react";
import Typography from "../Typography";
import "./services-style.scss";

const Services: React.FC = () => {
    return (
        <div className="services-page">
            <Typography variant="">
                Our Services
            </Typography>
            <Typography variant="">
                Currency exchange
            </Typography>
            <Typography variant="">
                We offer currency exhange services with competitive rates.
                <br />
                Contact us to exhange your currency today.
            </Typography>
            <Typography variant="">
                Trading
            </Typography>
            <Typography variant="">
                Explore our trading platforms and start trading in the financial market.
                <br />
                Take advantage of our expert insights and tools.
            </Typography>
        </div>
    );
};

export default Services;