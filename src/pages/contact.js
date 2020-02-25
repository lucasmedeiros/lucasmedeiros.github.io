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
            <SEO title="Contact" keywords={[`lucas medeiros`, `contact`, `contato`]} />
            <Container>
                <h2>Contato aqui</h2>
            </Container>
        </Layout>
    );
}
