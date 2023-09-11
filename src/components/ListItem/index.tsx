import React from "react";
import "./list-item-styles.scss";

const variantClassMap: Record<string, string> = {
    "nav-list-item": "nav-list-item",
};

interface ListItemProps {
    variant: keyof typeof variantClassMap;
    children: React.ReactNode;
};

const ListItem: React.FC<ListItemProps> = ({
    variant, children
}) => {
    const className = `list-item ${variantClassMap[variant]}`;

    return (
        <li 
            className={className}
        >
            {children}
        </li>
    );
};

export default ListItem;