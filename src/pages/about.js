import React from "react";
import { Container } from '../styles';
import "../../node_modules/rsuite/dist/styles/rsuite-default.min.css"

import {
    Layout,
    SEO,
} from '../components';

export default () => {
    return (
        <Layout breakpoint={(typeof window !== 'undefined') ? window.innerHeight / 3 : undefined} >
            <SEO title="About" keywords={[`lucas medeiros`, `sobre`, `about`]} />
            <Container>
                <h2>Sobre...</h2>
            </Container>
        </Layout>
    );
}
