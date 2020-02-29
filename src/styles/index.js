import styled from 'styled-components';
import devices from './devices';
import Background from '../assets/background.jpg';

export const Container = styled.div`
    color: #404040;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
    flex-wrap: wrap;
    flex: 1;
    z-index: 1;
`;

export const Footer = styled.footer`
    width: 100%;
    padding: 1em 0 1em 0;
    min-height: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: black;
    color: white;

    @media ${devices.tablet} {
        flex-direction: row;
        text-align: left;
    }
`;

export const BackgroundContainer = styled.section`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 65vh;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.7);
    z-index: -1;
`;

export const Main = styled.main`
    min-height: calc(100vh - 185px);
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 2em 1em 4em 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    z-index: 2;
    background-color: white;

    @media ${devices.laptop} {
        padding: 2em 8em 4em 8em;
        flex-direction: row;
    }
`;

export const Card = styled.article`
    border: 1px rgba(0,0,0,.125) solid;
    border-radius: .30rem;
    background-color: #fff;
    background-clip: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Grid = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(${props => props.min || 350}px, 1fr));
    grid-gap: 20px;
    grid-auto-rows: 1fr;
    justify-items: center;
    align-items: center;
    grid-auto-rows: 1fr;
`;

export const RoundedImage = styled.img`
    border-radius: 50%;
    max-width: 30vh;
`;

export const navbarStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: '0.2s ease-in-out',
};
