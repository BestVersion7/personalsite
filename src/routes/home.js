import React from "react";
import { Profile } from "./profile";
import { Project } from "./project";
import { Skills } from "./skills";
import { FaAngleDoubleDown } from "react-icons/fa";
import { IconContext } from "react-icons";

export const Home = () => {
    const handleScroll = e => {
        e.preventDefault()
        document.getElementById("section-profile").scrollIntoView()
    }
    return (
        <div>
            <section className="section-home">
                <div className="section-home-name">
                    <h2>Hi I'm Hunter</h2>
                    <h2>Welcome to my site!</h2>
                </div>
                <div className="icon-down" onClick={handleScroll}>
                    <IconContext.Provider
                        value={{ size: "2em", color: "black" }}
                    >
                        <FaAngleDoubleDown />
                    </IconContext.Provider>
                </div>
            </section>
            <Profile />
            <Skills />
            <Project />
        </div>
    );
};
