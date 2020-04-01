import React from "react";
import {
  ProjectContainer,
  ProjectContent,
  ProjectHeader,
  ProjectImageContainer,
  ProjectImage
} from "./styles";

export default ({ name, description, url, image, className = "" }) => {
  return (
    <ProjectContainer className={className}>
      <ProjectImageContainer className="bg-gray-300">
        <a href={url}>
          <ProjectImage src={image} />
        </a>
      </ProjectImageContainer>
      <ProjectHeader>
        <a href={url}>{name}</a>
      </ProjectHeader>
      <ProjectContent>
        <a href={url}>{description}</a>
      </ProjectContent>
    </ProjectContainer>
  );
};
