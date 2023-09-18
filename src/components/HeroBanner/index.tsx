import React from "react";
import Typography from "../Typography";
import Button from "../Button";
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
                <Button
                    type="button"
                    variant="cta-button"
                    to="/startyourtrial"
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export default HeroBanner;