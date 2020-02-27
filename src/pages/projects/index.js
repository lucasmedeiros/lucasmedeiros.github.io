import React from "react";
import { graphql } from 'gatsby';
import { Container, Wrapper, Grid } from '../../styles';

import { Layout, SEO } from '../../components';

export default ({ data }) => {
    const projects = data.allCosmicjsProjects.edges.sort((p1, p2) => {
        const image1 = p1.node.metadata.image.url;
        const image2 = p2.node.metadata.image.url;

        if (image1 && !image2) return -1;
        if (!image1 && image2) return 1;
        return 0;
    });
    return (
        <Layout
            breakpoint={(typeof window !== 'undefined') ? window.innerHeight / 3 : undefined}
            topComponent={() => <h1 className='text-center text-white'>Full-stack software development</h1>}
        >
            <SEO title="Projects" keywords={[`lucas medeiros`, `projetos`, `projects`]} />
            <Container>
                <Wrapper>
                    <Container className='bg-white' style={{ marginTop: '-10%' }}>
                        <Grid>
                            {projects.map((project, index) => {
                                const { link, name } = project.node.metadata;
                                return (
                                    <div key={index}>
                                        <a target='_blank' rel="noopener noreferrer" href={link}>{name}</a>
                                    </div>
                                )
                            })}
                        </Grid>
                    </Container>
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
