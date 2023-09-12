import React from "react";
import Typography from "../Typography";
import { Link } from "react-router-dom";
import "./hero-banner-styles.scss";

interface HeroBannerProps {
    title: string;
    subtitle: string;
    backgroundImageUrl: string;
    ctaText: string;
    ctaLink: string;
};

const HeroBanner: React.FC<HeroBannerProps> = ({
    title,
    subtitle, 
    backgroundImageUrl,
    ctaText,
    ctaLink,
}) => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
    };

    return (
        <div className="hero-banner" style={backgroundStyle}>
            <div className="hero-content">
                <Typography variant="hero-title">
                    {title}
                </Typography>
                <Typography variant="hero-subtitle">
                    {subtitle}
                </Typography>
                <Link to={ctaLink} className="cta-button">
                    {ctaText}
                </Link>
            </div>
        </div>
    );
};

export default HeroBanner;