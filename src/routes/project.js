import React from "react";
import { ProjectItem } from "../components/projectItem";
import { webProjects } from "../list/projects";
import { Quote } from "../components/quote";

export const Project = () => {
    return (
        <section className="section-projects">
            <br />
            <h2>Passion Projects: </h2>
            <Quote
                quote="The secret to getting ahead is getting started."
                author="Mark Twain"
            />
            <div className="section-projects-web">
                {webProjects.map(
                    (
                        {
                            title,
                            url_link,
                            url_image,
                            description,
                            gitHubLink,
                            technologiesUsed,
                        },
                        i
                    ) => {
                        return (
                            <ProjectItem
                                key={i}
                                title={title}
                                url_link={url_link}
                                githubLink={gitHubLink}
                                url_image={url_image}
                                description={description}
                                technologiesUsed={technologiesUsed}
                            />
                        );
                    }
                )}
            </div>
            <br />
        </section>
    );
};
