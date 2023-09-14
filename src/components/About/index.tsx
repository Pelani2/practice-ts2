import React from "react";
import Typography from "../Typography";

const About: React.FC = () => {
    return (
        <div className="about">
            <Typography variant="about-title">
                About Us
            </Typography>
            <Typography variant="about-paragraph">
                Welcome to our company! We are passionate about currency exchange and trading.
            </Typography>
            <Typography variant="about-paragraph">
                Our mission is to provide top-notch financial services to our clients and help them achieve their financial goals.
            </Typography>
            <Typography variant="about-paragraph">
                Meet our dedicated team of experts who are here to assist you every step of the way.
            </Typography>
        </div>
    );
};

export default About;