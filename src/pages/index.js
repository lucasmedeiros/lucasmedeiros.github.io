import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Wrapper, Grid } from "../styles";
import { Layout, SEO } from "../components";
import { calculateAge } from "../util";

export default () => {
  return (
    <Layout
      breakpoint={
        typeof window !== "undefined" ? window.innerHeight / 3 : undefined
      }
    >
      <SEO
        title="Home"
        keywords={[`lucas medeiros`, `developer`, `application`, `react`]}
      />
      <Container style={{ backgroundColor: "white", zIndex: 2 }}>
        <Wrapper>
          <Container className="w-10/12 bg-gray-200 p-10 shadow-lg mb-10">
            <h1 className="font-bold text-4xl mb-10">SOBRE MIM</h1>
            <div
              className="font-sans sm:font-serif md:font-mono md:px-10 pb-5 lg:font-sans w-full"
              style={{ fontSize: "1.3em" }}
            >
              <p>
                Meu nome completo é Lucas de Medeiros Nunes Fernandes, tenho{" "}
                {calculateAge()} anos de idade e moro em Campina Grande - PB,
                Brasil. Minhas habilidades vão desde HTML, CSS e Javacript
                básicos até React, desenvolvimento de API's (GraphQL e REST) com
                Node, Flask e Springboot, e desenvolvimento mobile com React
                Native. Há 2 anos desenvolvo aplicações web em trabalhos,
                projetos pessoais ou envolvimento em atividades acadêmicas,
                trabalhando tanto com backend, quanto no frontend. No âmbito
                acadêmico, fui monitor de Programação 2 e atualmente sou membro
                da OpenDev UFCG, organização que visa incentivar o
                desenvolvimento em código aberto na comunidade acadêmica de
                Computação@UFCG.
              </p>
              <p className="mt-10">
                Quanto à minha formação, sou estudante de Ciência da Computação
                na Universidade Federal de Campina Grande (UFCG), cursando o
                sétimo período. Sou técnico em informática, formado em 2016,
                pelo Instituto Federal do Rio Grande do Norte (IFRN) - Campus
                Caicó.
              </p>
            </div>
          </Container>
          <Container className="w-10/12 p-10 h-full">
            <h1 className="font-bold text-4xl mb-10">SKILLS</h1>

            <Grid min={100}>
              <FontAwesomeIcon
                className="text-orange-400"
                icon={["fab", "html5"]}
                size="6x"
              />
              <FontAwesomeIcon
                className="text-blue-400"
                icon={["fab", "css3-alt"]}
                size="6x"
              />
              <FontAwesomeIcon
                className="text-yellow-400"
                icon={["fab", "js"]}
                size="6x"
              />
              <FontAwesomeIcon
                className="text-blue-700"
                icon={["fab", "react"]}
                size="6x"
              />
              <FontAwesomeIcon
                className="text-green-700"
                icon={["fab", "node"]}
                size="6x"
              />
              <FontAwesomeIcon
                className="text-green-300"
                icon={["fab", "android"]}
                size="6x"
              />
              <FontAwesomeIcon
                className="text-blue-300"
                icon={["fab", "apple"]}
                size="6x"
              />
              <FontAwesomeIcon
                className="text-blue-400"
                icon={["fab", "python"]}
                size="6x"
              />
              <FontAwesomeIcon
                className="text-orange-700"
                icon={["fab", "java"]}
                size="6x"
              />
            </Grid>
          </Container>
        </Wrapper>
      </Container>
    </Layout>
  );
};
