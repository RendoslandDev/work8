// import { Link } from "@inertiajs/react";
import React from "react";

const Button = ({ type = "submit", href, className, ...props }) => {
    const button = (
        <button
            type={type}
            className={`transition px-3 ease-in-out duration-150 text-center py-1 ${
                !href ? className : ""
            }`}
            {...props}
        />
    );

    return href ? (
        <Link
            className={`transition px-3 rounded ease-in-out duration-150 text-center py-1 ${className}`}
            href={href}
        >
            {button}
        </Link>
    ) : (
        button
    );
};

export default Button;
