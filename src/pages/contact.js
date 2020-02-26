import React from "react";
import {
    Container,
    Wrapper,
} from '../styles';

import {
    Layout,
    SEO,
} from '../components';

export default () => {
    return (
        <Layout
            breakpoint={(typeof window !== 'undefined') ? window.innerHeight / 3 : undefined}
            topComponent={() => <h1 className='text-center text-white'>Full-stack software development</h1>}
        >
            <SEO title="Contact" keywords={[`lucas medeiros`, `contact`, `contato`]} />
            <Container>
                <Wrapper>
                    <h2>Contatos aqui...</h2>
                </Wrapper>
            </Container>
        </Layout>
    );
}
