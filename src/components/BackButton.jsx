import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BackButton = () => {

    const location = useLocation();
    const navigate = useNavigate();

    // If user is in Home page, hide button
    if (location.pathname === "/") {
        return null;
    }

    return (
        <div className="back-btn">
            <h3 onClick={() => navigate("/")}>
                Back
            </h3>
        </div>
    );
};

export default BackButton;