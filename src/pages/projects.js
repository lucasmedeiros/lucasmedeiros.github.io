import React from "react";
import { graphql } from 'gatsby';
import {
    Container,
    Wrapper,
} from '../styles';

import {
    Layout,
    SEO,
} from '../components';

export default ({ data }) => {
    const projects = data.allCosmicjsProjects.edges;
    return (
        <Layout
            breakpoint={(typeof window !== 'undefined') ? window.innerHeight / 3 : undefined}
            topComponent={() => <h1 className='text-center text-white'>Full-stack software development</h1>}
        >
            <SEO title="Projects" keywords={[`lucas medeiros`, `projetos`, `projects`]} />
            <Container>
                <Wrapper>
                    {projects.map((project, index) => {
                        console.log(project)
                        const { link, name } = project.node.metadata;
                        return <a key={index} target='_blank' rel="noopener noreferrer" href={link}>{name}</a>
                    })}
                </Wrapper>
            </Container>
        </Layout>
    );
}

export const query = graphql`
    query Index {
        allCosmicjsProjects {
            edges {
                node {
                    title
                    metadata {
                        name
                        description
                        link
                        image {
                            url
                        }
                    }
                }
            }
        }
  }
`
