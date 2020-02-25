import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from 'rsuite';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { Footer, Main, Wrapper } from '../styles';
import Header from "./header";
import "./layout.css";
import { Social } from "./custom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

const Layout = ({ children, breakpoint }) => {
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

    console.log(data.site.siteMetadata.email)

    return (
        <Container>
            <Header siteTitle={data.site.siteMetadata.title} breakpoint={breakpoint} />
            <Main>
                <Wrapper>
                    {children}
                </Wrapper>
            </Main>
            <Footer>
                <div>
                    {data.site.siteMetadata.email.map((email) => (
                        <h6>
                            <FontAwesomeIcon icon={faEnvelope} color='white' />
                            {` `}
                            {email}
                        </h6>
                    ))}
                    <h6>
                        <FontAwesomeIcon icon={['fab', 'whatsapp']} color='white' />
                        {` `}
                        {data.site.siteMetadata.whatsapp}
                    </h6>
                    <h6>
                        <FontAwesomeIcon icon={faMapMarkerAlt} color='white' />
                        {` `}
                        {data.site.siteMetadata.location}
                    </h6>
                </div>
                <div style={{ maxWidth: "200px", textAlign: 'center' }}>
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
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
