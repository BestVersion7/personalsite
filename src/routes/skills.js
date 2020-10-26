import React from "react";
import {
    toolSkills,
    webDevelopmentSkills,
    businessSkills,
} from "../list/skills";
import { SkillItem } from "../components/skillItem";
import { Quote } from "../components/quote";

export const Skills = () => {
    return (
        <section className="section-skills">
            <br/>
            <h2>Skills and Abilities</h2>
            <Quote
                quote="The reason I've been able to be so financially successful is that my focus has never, ever for one minute been money"
                author="Oprah"
            />
            <h3>Business Skills</h3>
            <div className="section-skills-item">
                {businessSkills.map(({ name, star, starFill, starHalf }, i) => {
                    return (
                        <div key={i}>
                            <SkillItem
                                name={name}
                                starFill={starFill}
                                starHalf={starHalf}
                                star={star}
                            />
                        </div>
                    );
                })}
            </div>
            <h3>Web Development</h3>
            <div className="section-skills-item">
                {webDevelopmentSkills.map(
                    ({ name, star, starFill, starHalf }, i) => {
                        return (
                            <div key={i}>
                                <SkillItem
                                    name={name}
                                    starFill={starFill}
                                    starHalf={starHalf}
                                    star={star}
                                />
                            </div>
                        );
                    }
                )}
            </div>
            <h3>Tools</h3>
            <div className="section-skills-item">
                {toolSkills.map(({ name, star, starFill, starHalf }, i) => {
                    return (
                        <SkillItem
                            key={i}
                            name={name}
                            starFill={starFill}
                            starHalf={starHalf}
                            star={star}
                        />
                    );
                })}
            </div>
        </section>
    );
};
