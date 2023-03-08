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
          <Hero>
            <MainPart>The no-code landing page of your dreams</MainPart>
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
  height: 70px;
`;
const Logo = styled.div`
  font-family: cursive;
`;
const Hero = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainPart = styled.div`
  display: flex;
  text-align: center;
`;
