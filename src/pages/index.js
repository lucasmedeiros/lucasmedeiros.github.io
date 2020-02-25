import React from "react";
import { Container } from '../styles';
import "../../node_modules/rsuite/dist/styles/rsuite-default.min.css"

import {
    Layout,
    SEO,
    Projects,
    Work,
} from '../components';

export default () => {
    return (
        <Layout>
            <SEO title="Home" keywords={[`lucas medeiros`, `developer`, `application`, `react`]} />
            <Container>
                <h2>Olá mundo</h2>
                <Projects />
                <Work />
            </Container>
        </Layout>
    );
}
