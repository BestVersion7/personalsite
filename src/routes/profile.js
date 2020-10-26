import React from "react";
import { WorkExperienceItem } from "../components/workExperienceItem";
import { workExperience } from "../list/workExperience";
import { Quote } from "../components/quote";

export const Profile = () => {
    return (
        <div className="section-profile" id="section-profile">
            <br />
            <section>
                <br />
                <h1>Profile</h1>
                <hr />
                <h2>My Story</h2>
                <article className="section-profile-about">
                    <img
                        style={{ borderRadius: "4em" }}
                        src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1603662887/1104%20profile/me.png"
                        alt="hunter"
                    />
                    <p>
                        I am self-taught web developer with a background in
                        finance. In the past 3 years, I have worked in accounts
                        receivables and accounts payable in startups and large
                        companies. Besides work, I like to build websites from
                        scratch using javascript. Scroll down to see my
                        projects! :)
                    </p>
                </article>

                <article className="section-profile-about">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Suffolk_University_coat_of_arms.svg/1200px-Suffolk_University_coat_of_arms.svg.png"
                        alt="suffolk"
                    />
                    <p>
                        I graduated Suffolk University in May 2019 located in
                        Boston, Massachusetts, USA. During my time here, I got
                        to meet lots of interesting people and learn about
                        investments, business strategies, accounting,
                        information systems and more!
                    </p>
                </article>
            </section>
            <section>
                <h2>Work Experience</h2>
                <Quote
                    quote="Protons give an atom its identity, electrons its personality."
                    author="Bill Bryson"
                />
                <div className="section-work-container">
                    {workExperience.map(
                        ({ Company, Position, Date, Summary }, i) => {
                            return (
                                <WorkExperienceItem
                                    key={i}
                                    company={Company}
                                    position={Position}
                                    date={Date}
                                    summary={Summary}
                                />
                            );
                        }
                    )}
                </div>
            </section>
        </div>
    );
};
