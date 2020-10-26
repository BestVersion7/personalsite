import React from "react";
import { string } from "prop-types";

export const ProjectItem = ({
    title,
    url_link,
    url_image,
    description,
    technologiesUsed,
}) => {
    return (
        <article className="section-projects-web-items">
            <h4>{title}</h4>
            <a href={url_link} target="_blank" rel="noopener noreferrer">
                {url_link}
            </a>
            <img
                className="section-projects-web-items-image"
                src={url_image}
                alt={title}
            />
            <p>
                <b>Technologies Used:</b> {technologiesUsed}
            </p>
            <p><b>Description:</b> {description}</p>
        </article>
    );
};

ProjectItem.propTypes = {
    title: string.isRequired,
    url_link: string.isRequired,
    url_image: string.isRequired,
    description: string.isRequired,
    technologiesUsed: string.isRequired,
};
