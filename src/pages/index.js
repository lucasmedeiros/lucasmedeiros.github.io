import React from "react";
import { Container } from '../styles';
import "../../node_modules/rsuite/dist/styles/rsuite-default.min.css"

import {
    Layout,
    SEO,
} from '../components';

export default () => {
    return (
        <Layout breakpoint={(typeof window !== 'undefined') ? window.innerHeight - 125 : undefined} >
            <SEO title="Home" keywords={[`lucas medeiros`, `developer`, `application`, `react`]} />
            <Container>
                <h2>Olá mundo, este é o meu portfolio, enchendo aqui com coisas que eu irei alterar depois...</h2>
            </Container>
        </Layout>
    );
}
