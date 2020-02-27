import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from 'rsuite';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Parallax } from 'react-scroll-parallax';

import { Footer, Main, BackgroundContainer, } from '../styles';
import Header from "./header";
import { Social } from "./custom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ParallaxProvider } from 'react-scroll-parallax';
import "./layout.css";

library.add(fab);

const Layout = ({ children, breakpoint, topComponent: Top, showTopComponent = true }) => {
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

    return (
        <ParallaxProvider>
            <Container>
                <Header siteTitle={data.site.siteMetadata.title} breakpoint={breakpoint} />
                <Main>
                    {showTopComponent && <Parallax className="w-full" y={[-78, 50]}>
                        <BackgroundContainer>
                            <Top />
                        </BackgroundContainer>
                    </Parallax>}
                    {children}
                </Main>
                <Footer>
                    <div>
                        {data.site.siteMetadata.email.map((email, index) => (
                            <h6 style={{ marginBottom: '3%' }} key={index}>
                                <FontAwesomeIcon icon={faEnvelope} color='white' />
                                {` `}
                                {email}
                            </h6>
                        ))}
                        <h6 style={{ marginBottom: '3%' }}>
                            <FontAwesomeIcon icon={['fab', 'whatsapp']} color='white' />
                            {` `}
                            {data.site.siteMetadata.whatsapp}
                        </h6>
                        <h6 style={{ marginBottom: '3%' }}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} color='white' />
                            {` `}
                            {data.site.siteMetadata.location}
                        </h6>
                    </div>
                    <div style={{ maxWidth: "200px", textAlign: 'center', marginBottom: '5%', marginTop: '2%' }}>
                        {data.site.siteMetadata.author}{` `}
                        © {new Date().getFullYear()}, Built with
                    {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </div>
                    <div>
                        {data.site.siteMetadata.social
                            ? <Social data={data.site.siteMetadata.social} />
                            : null
                        }
                    </div>
                </Footer>
            </Container>
        </ParallaxProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
