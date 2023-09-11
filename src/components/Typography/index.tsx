import React, { HTMLProps } from "react";
import "./typography-styles.scss";

type TypographyProps = {
    variant: string;
} & HTMLProps<HTMLElement>;

const Typography: React.FC<TypographyProps> = ({ variant, children, ...rest }) => {
    const variantMap: Record<string, string> = {
        default: 'default',
        headline: 'headline',
        subheading: 'subheading',
        "nav-link": "nav-link",
    };

    const variantClass = `typography ${variantMap[variant] || `default`}`;

    return (
        <span
            className={`typography ${variantClass}`}
            {...rest}
        >
            {children}
        </span>
    );
}

export default Typography;