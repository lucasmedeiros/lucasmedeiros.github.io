import styled from "styled-components";
import devices from "./devices";
import Background from "../assets/background.jpg";

export const Container = styled.div`
  color: #404040;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
  z-index: -1;
  position: relative;

  @media ${devices.laptop} {
    height: 75vh;
  }
`;

export const Main = styled.main`
  min-height: calc(100vh - 185px);
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 2em 0 2em 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  z-index: 2;
  background-color: white;
`;

export const Card = styled.article`
  border: 1px rgba(0, 0, 0, 0.125) solid;
  border-radius: 0.3rem;
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
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.min || 300}px, 1fr)
  );
  grid-gap: 20px;
  grid-auto-rows: 1fr;
  justify-items: center;
`;

export const RoundedImage = styled.img`
  border-radius: 50%;
  max-width: 24vh;

  @media ${devices.laptopL} {
    max-width: 12vw;
  }
`;

export const navbarStyle = {
  position: "fixed",
  width: "100%",
  zIndex: 100,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "0.2s ease-in-out"
};
