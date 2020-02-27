import React from 'react';
import { ProjectContainer, ProjectContent, ProjectHeader, ProjectImageContainer, ProjectImage } from './styles';

export default ({ name, description, url, image, className = '' }) => {
    return (
        <ProjectContainer className={className}>
            <ProjectImageContainer
                className='bg-gray-300'
            >
                <ProjectImage src={image} />
            </ProjectImageContainer>
            <ProjectHeader>
                <a href={url}>{name}</a>
            </ProjectHeader>
            <ProjectContent>
                <a href={url}>{description}</a>
            </ProjectContent>
        </ProjectContainer>
    )
}
