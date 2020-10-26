import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    const [mobileIcon, setMobileIcon] = useState(true);
    const [showNav, setShowNav] = useState(true);
    const handleClick = () => {
        setMobileIcon(!mobileIcon);
        setShowNav(!showNav);
    };
    const handleCollapse = () => {
        window.scrollTo(0, 0);
        setMobileIcon(!mobileIcon);
        setShowNav(!showNav);
    };
    const handleClickNav = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="section-nav">
            {mobileIcon ? (
                <div className="section-nav-button">
                    <button onClick={handleClick}>
                        <img
                            style={{ height: "40px" }}
                            src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556245482/230419%20Icons/hamburgerIcon.png"
                            alt="hamburger"
                        />
                    </button>
                </div>
            ) : (
                <div className="section-nav-button">
                    <button onClick={handleClick}>
                        <img
                            style={{ height: "40px" }}
                            src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556245482/230419%20Icons/exitIcon.png"
                            alt="close"
                        />
                    </button>
                </div>
            )}
            {showNav ? (
                <nav className="section-navlink-container">
                    <NavLink
                        onClick={handleClickNav}
                        className="section-nav-links"
                        to="/"
                        exact={true}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        onClick={handleClickNav}
                        className="section-nav-links"
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        onClick={handleClickNav}
                        className="section-nav-links"
                        to="/skills"
                    >
                        Abilities
                    </NavLink>
                    <NavLink
                        onClick={handleClickNav}
                        className="section-nav-links"
                        to="/project"
                    >
                        Passion Projects
                    </NavLink>
                </nav>
            ) : (
                <nav className="section-navlink-container-mobile">
                    <NavLink
                        onClick={handleCollapse}
                        className="section-nav-links"
                        to="/"
                        exact={true}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        onClick={handleCollapse}
                        className="section-nav-links"
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        onClick={handleCollapse}
                        className="section-nav-links"
                        to="/skills"
                    >
                        Skills and Abilities
                    </NavLink>
                    <NavLink
                        onClick={handleCollapse}
                        className="section-nav-links"
                        to="/project"
                    >
                        Passion Projects
                    </NavLink>
                </nav>
            )}
        </div>
    );
};
