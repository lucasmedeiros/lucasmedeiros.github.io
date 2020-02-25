/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from 'rsuite';
import { Footer, Main, Wrapper } from '../styles';
import Header from "./header";
import "./layout.css";

const Layout = ({ children, breakpoint }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Container>
            <Header siteTitle={data.site.siteMetadata.title} breakpoint={breakpoint} />
            <Main>
                <Wrapper>
                    {children}
                </Wrapper>
            </Main>
            <Footer>
                © {new Date().getFullYear()}, Built with
                    {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Footer>
        </Container>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
