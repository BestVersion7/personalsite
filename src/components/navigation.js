import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";

export const Navigation = () => {
    const [mobileIcon, setMobileIcon] = useState(true);
    const [showNav, setShowNav] = useState(true);

    const handleClickIconMobile = () => {
        setMobileIcon(!mobileIcon);
        setShowNav(!showNav);
    };
    const handleClickLinkMobile = () => {
        window.scrollTo(0, 0);
        setMobileIcon(!mobileIcon);
        setShowNav(!showNav);
    };
    const handleClickLinkDesktop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <header>
            <nav className="section-nav">
                {mobileIcon ? (
                    <IconContext.Provider
                        value={{ className: "section-nav-icon-provider" }}
                    >
                        <GiHamburgerMenu onClick={handleClickIconMobile} />
                    </IconContext.Provider>
                ) : (
                    <IconContext.Provider
                        value={{ className: "section-nav-icon-provider" }}
                    >
                        <AiOutlineClose onClick={handleClickIconMobile} />
                    </IconContext.Provider>
                )}
                {showNav ? (
                    <nav className="section-navlink-container">
                        <div className="section-navlink-container-blank">
                            <NavLink
                                onClick={handleClickLinkDesktop}
                                className="section-nav-links"
                                to="/"
                                exact={true}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                onClick={handleClickLinkDesktop}
                                className="section-nav-links"
                                to="/profile"
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                onClick={handleClickLinkDesktop}
                                className="section-nav-links"
                                to="/skills"
                            >
                                Skills
                            </NavLink>
                            <NavLink
                                onClick={handleClickLinkDesktop}
                                className="section-nav-links"
                                to="/project"
                            >
                                Project
                            </NavLink>
                            <a
                                className="section-nav-links"
                                href="https://athomeblogs.herokuapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Blog
                            </a>
                        </div>
                    </nav>
                ) : (
                    <nav className="section-navlink-container-mobile">
                        <div className="section-navlink-container-blank">
                            <NavLink
                                onClick={handleClickLinkMobile}
                                className="section-nav-links"
                                to="/"
                                exact={true}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                onClick={handleClickLinkMobile}
                                className="section-nav-links"
                                to="/profile"
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                onClick={handleClickLinkMobile}
                                className="section-nav-links"
                                to="/skills"
                            >
                                Skills
                            </NavLink>
                            <NavLink
                                onClick={handleClickLinkMobile}
                                className="section-nav-links"
                                to="/project"
                            >
                                Project
                            </NavLink>
                            <a
                                className="section-nav-links"
                                href="https://athomeblogs.herokuapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Blog
                            </a>
                        </div>
                    </nav>
                )}
            </nav>
        </header>
    );
};
