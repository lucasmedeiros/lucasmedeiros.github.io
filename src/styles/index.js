import styled from 'styled-components';
import devices from './devices';
import background from '../assets/background.jpg';

export const Container = styled.div`
    color: #404040;
`;

export const Footer = styled.footer`
    width: 100%;
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
    background-image: url(${background});
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
`;

export const Main = styled.main`
    min-height: calc(100vh - 185px);
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 3em 0 8em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
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
