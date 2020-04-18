import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Footer, Main, BackgroundContainer, RoundedImage } from "../styles";
import Header from "./header";
import { Social } from "./custom";
import "./layout.css";
import Photo from "../assets/photo.jpg";

library.add(fab);

const Layout = ({
  children,
  breakpoint,
  showTopComponent = true,
  page = undefined,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          email
          whatsapp
          location
          social {
            name
            url
            icon
          }
        }
      }
    }
  `);

  const [scrollTop, setScrollTop] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    let breakpoint = window.innerHeight * 0.2;
    if (window.scrollY > breakpoint) setScrollTop(false);
    else setScrollTop(true);
  }

  useEffect(() => {
    if (!scrollTop) {
      // show go to top
    }
  }, [scrollTop]);

  return (
    <ParallaxProvider>
      <div>
        <Header
          scrollTop={scrollTop}
          siteTitle={data.site.siteMetadata.title}
          breakpoint={breakpoint}
        />
        <Main>
          {showTopComponent && (
            <Parallax className="w-full" y={[-70, 50]}>
              <BackgroundContainer>
                <div className="flex flex-col items-center justify-center">
                  <RoundedImage src={Photo} />
                  <h1 className="font-bold text-white text-center">
                    Lucas de Medeiros Nunes Fernandes
                  </h1>
                  <div>
                    {data.site.siteMetadata.social ? (
                      <Social
                        size={"3x"}
                        data={data.site.siteMetadata.social}
                      />
                    ) : null}
                  </div>
                </div>
                {page !== "projects" ? (
                  <Link
                    to="/projects"
                    className="text-white mt-2 absolute bottom-0 pb-1 border-b-2 mb-5"
                    style={{ fontSize: "1.4em" }}
                  >
                    Ver projetos >
                  </Link>
                ) : null}
              </BackgroundContainer>
            </Parallax>
          )}
          {children}
        </Main>
        <Footer>
          <div>
            {data.site.siteMetadata.email.map((email, index) => (
              <h6 style={{ marginBottom: "3%" }} key={index}>
                <FontAwesomeIcon icon={faEnvelope} color="white" />
                {` `}
                {email}
              </h6>
            ))}
            <h6 style={{ marginBottom: "3%" }}>
              <FontAwesomeIcon icon={["fab", "whatsapp"]} color="white" />
              {` `}
              {data.site.siteMetadata.whatsapp}
            </h6>
            <h6 style={{ marginBottom: "3%" }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} color="white" />
              {` `}
              {data.site.siteMetadata.location}
            </h6>
          </div>
          <div
            style={{
              maxWidth: "200px",
              textAlign: "center",
              marginBottom: "5%",
              marginTop: "2%",
            }}
          >
            {data.site.siteMetadata.author}
            {` `}© {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          <div>
            {data.site.siteMetadata.social ? (
              <Social data={data.site.siteMetadata.social} />
            ) : null}
          </div>
        </Footer>
      </div>
    </ParallaxProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
