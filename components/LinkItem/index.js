import React from "react";

const LinkItem = ({ name, href, children, ...props }) => {
    return (
        <li {...props}>
            <a href={href}
               aria-label={name}
            >
                {children}
            </a>
        </li>
    );
};

export default LinkItem;
