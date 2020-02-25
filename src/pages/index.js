import React from "react";
import {
    Container,
    BackgroundContainer,
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
        <Layout breakpoint={(typeof window !== 'undefined') ? window.innerHeight / 3 : undefined} >
            <SEO title="Home" keywords={[`lucas medeiros`, `developer`, `application`, `react`]} />
            <Container>
                <BackgroundContainer>
                    <RoundedImage src={Photo} />
                </BackgroundContainer>

                <Wrapper>
                    <h1 className='font-bold w-full'>Summary</h1>
                    <p className='font-sans sm:font-serif md:font-mono lg:font-sans'>
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
