import styled from 'styled-components';

export const ProjectContainer = styled.article`
    display: grid;
    grid-template-areas:
        "image header header"
        "image content content"
        "image content content";
    width: 100%;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    margin: 20px 0 20px 0;
    box-shadow: 1px 1px 3px 0 #111;
`;

export const ProjectImageContainer = styled.div`
    grid-area: image;
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #111214;
    color: white;
    position: relative;
`;

export const ProjectHeader = styled.div`
    grid-area: header;
    color: white;
    background-color: #111214;
    padding: 1rem 1.5rem 1rem 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
`;

export const ProjectContent = styled.div`
    grid-area: content;
    background-color: #111214;
    color: #AAAAAA;
    font-size: 0.8em;
    padding: 1rem 1.5rem 1rem 1.5rem;
    min-height: 120px;
    text-transform: uppercase;
`;

export const ProjectImage = styled.img`
    width: 170px;
    height: 190px;
    position: absolute;
    top: -8px;
    left: 10px;
    box-shadow: 2px 2px 10px 0 #111;
`;
