import React from "react";
import {
    Container,
    Wrapper,
    RoundedImage
} from '../styles';

import {
    Layout,
    SEO,
} from '../components';

import Photo from '../assets/photo.jpg';
import { calculateAge } from "../util";

export default () => {

    return (
        <Layout
            breakpoint={(typeof window !== 'undefined') ? window.innerHeight / 3 : undefined}
            topComponent={() => (
                <>
                    <RoundedImage src={Photo} />
                    <h1 className='font-bold text-white text-center'>Lucas de Medeiros Nunes Fernandes</h1>
                </>
            )}
        >
            <SEO title="About" keywords={[`lucas medeiros`, `sobre`, `about`]} />
            <Container>

                <Wrapper>
                    <h1 className='font-bold w-full'>About me</h1>
                    <p className='font-sans'>
                        My full name's Lucas de Medeiros Nunes Fernandes, I'm {calculateAge()} years old and I live in Campina Grande - PB, Brazil.
                        I have a diverse set of skills, ranging from basic HTML + CSS + Javascript, all the way to React, API (GraphQL and REST)
                        development with Node, Flask or SpringBoot, and mobile development with React Native. Besides Computer Science, I love football
                        (or soccer, whatever) and I'm a Flamengo supporter. I also love music and gaming.
                    </p>
                </Wrapper>
            </Container>
        </Layout>
    );
}
