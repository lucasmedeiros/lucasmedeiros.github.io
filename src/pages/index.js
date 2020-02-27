import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Wrapper, RoundedImage, Grid } from '../styles';
import { Layout, SEO, } from '../components';
import Photo from '../assets/photo.jpg';
import { calculateAge } from "../util";

export default () => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (
        <Layout
            breakpoint={(typeof window !== 'undefined') ? window.innerHeight / 3 : undefined}
            topComponent={() => <h1 className='text-center text-white'>Full-stack software development</h1>}
        >
            <SEO title="Home" keywords={[`lucas medeiros`, `developer`, `application`, `react`]} />
            <Container style={{ backgroundColor: 'white', zIndex: 2 }}>
                <Wrapper>
                    <Container className='bg-gray-200 p-5 shadow-lg' style={{ marginTop: vw >= 660 ? '-10%' : '0' }}>
                        <h1 className='font-bold'>Summary</h1>
                        <RoundedImage style={{ marginBottom: '5%' }} src={Photo} />
                        <p className='font-sans sm:font-serif md:font-mono lg:font-sans w-full'>
                            My full name's Lucas de Medeiros Nunes Fernandes, I'm {calculateAge()} years old and I live in Campina Grande - PB, Brazil.
                            I have a diverse set of skills, ranging from basic HTML + CSS + Javascript, all the way to React, API (GraphQL and REST)
                            development with Node, Flask or SpringBoot, and mobile development with React Native. Besides Computer Science, I love football
                            (or soccer, whatever) and I'm a Flamengo supporter. I also love music and gaming.
                        </p>
                    </Container>
                    <Container className='md:ml-5 p-5 h-full bg-gray-100 shadow-lg'>
                        <h1 className='font-bold'>Skills</h1>

                        <Grid min={110}>
                            <FontAwesomeIcon className='text-orange-400' icon={['fab', 'html5']} size='6x' />
                            <FontAwesomeIcon className='text-blue-400' icon={['fab', 'css3-alt']} size='6x' />
                            <FontAwesomeIcon className='text-yellow-400' icon={['fab', 'js']} size='6x' />
                            <FontAwesomeIcon className='text-blue-700' icon={['fab', 'react']} size='6x' />
                            <FontAwesomeIcon className='text-green-700' icon={['fab', 'node']} size='6x' />
                            <FontAwesomeIcon className='text-green-300' icon={['fab', 'android']} size='6x' />
                            <FontAwesomeIcon className='text-blue-300' icon={['fab', 'apple']} size='6x' />
                            <FontAwesomeIcon className='text-blue-400' icon={['fab', 'python']} size='6x' />
                            <FontAwesomeIcon className='text-orange-700' icon={['fab', 'java']} size='6x' />
                        </Grid>
                    </Container>
                </Wrapper>
            </Container>
        </Layout>
    );
}
