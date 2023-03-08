import React from "react";
import styled from "styled-components";

const Victor = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Header>
            <Logo>Typeform</Logo>
            <button>Sign In</button>
          </Header>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Hero>
            <MainPart>The no-code landing page of your dreams</MainPart>
            <SecondPart>
              Rustle up a beautiful landing page in minutes, and rake in the
              leads like a boss.
            </SecondPart>
            <button>Get started - it's free</button>
          </Hero>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Victor;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 600px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 70px;
  font-size: 30px;
  button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: black;
    color: white;
  }
`;
const Logo = styled.div`
  font-family: cursive;
`;
const Hero = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    width: 150px;
    height: 48px;
    border-radius: 5px;
    background-color: black;
    color: white;
    margin-top: 40px;
  }
`;
const MainPart = styled.div`
  width: 60%;
  display: flex;
  text-align: center;
  font-size: 60px;
`;
const SecondPart = styled.div`
  width: 50%;
  display: flex;
  text-align: center;
  font-size: 25px;
  margin-top: 50px;
  font-weight: lighter;
`;
