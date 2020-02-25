import styled from 'styled-components';

export const Container = styled.div`
    color: #404040;
    padding: 0 0 1em 0;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 200px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    color: white;
`;

export const Main = styled.main`
    min-height: calc(100vh - 185px);
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
`;

export const navbarStyle = {
    // position: 'fixed',
    width: '100%',
    zIndex: 100,
    background: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: '0.75s ease-in-out',
};

export const navheaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
};

export const navlinkStyle = {
    color: `#728f99`,
    textShadow: '0px 0px 1px #ffffff',
    margin: '0 0 0 30px',
    textDecoration: `none`,
};
