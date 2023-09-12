import React from "react";
import Typography from "../Typography";
import "./contact-styles.scss";

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <Typography variant="title">
                Contact Us 
            </Typography>
            <Typography variant="paragraph">
                Phone: +1 (123) 456-7890
            <br />
                Email: info@example.com
            <br />
                Address: 123 Main Street, Some City, Some Country  
            </Typography>
        </div>
    );
};

export default Contact;