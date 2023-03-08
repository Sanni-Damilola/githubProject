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
          <Hero></Hero>
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
const Wrapper = styled.div``;
const Header = styled.div`
width: 100%;

`;
const Logo = styled.div`
font-family: cursive;
`;
const Hero = styled.div``;
