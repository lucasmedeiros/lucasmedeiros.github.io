import React from "react";
import { graphql } from "gatsby";
import { Container, Wrapper, Grid } from "../styles";

import { Layout, SEO } from "../components";
import { ProjectCard } from "../components/custom";

import Placeholder from "../assets/placeholder.png";

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
      breakpoint={
        typeof window !== "undefined" ? window.innerHeight / 3 : undefined
      }
      topComponent={() => (
        <h1 className="text-center text-white">
          Full-stack software development
        </h1>
      )}
    >
      <SEO
        title="Projects"
        keywords={[`lucas medeiros`, `projetos`, `projects`]}
      />
      <Container>
        <Wrapper>
          <Container>
            <Grid>
              {projects.map((project, index) => {
                const {
                  link,
                  name,
                  description,
                  image,
                  tags
                } = project.node.metadata;
                console.log(tags);
                return (
                  <ProjectCard
                    name={name}
                    tags={tags}
                    url={link}
                    image={image.url || Placeholder}
                    description={description}
                    key={index}
                  />
                );
              })}
            </Grid>
            <p className="w-full mt-3">
              For more, visit my{" "}
              <a
                className="text-blue-600"
                href="https://github.com/lucasmedeiros"
              >
                Github page
              </a>
              .
            </p>
          </Container>
        </Wrapper>
      </Container>
    </Layout>
  );
};

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
            tags {
              name
            }
          }
        }
      }
    }
  }
`;
