import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from 'rsuite';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { Footer, Main } from '../styles';
import Header from "./header";
import { Social } from "./custom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../../node_modules/rsuite/dist/styles/rsuite-default.min.css";
import "./layout.css";

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

    return (
        <Container>
            <Header siteTitle={data.site.siteMetadata.title} breakpoint={breakpoint} />
            <Main>
                {children}
            </Main>
            <Footer>
                <div>
                    {data.site.siteMetadata.email.map((email, index) => (
                        <h6 key={index}>
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
