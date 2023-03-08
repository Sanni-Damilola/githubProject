import React from 'react'
import styled from 'styled-components'
import img from "./image/2fc7b150-welcome-screen-lp_10na0gl0n60gl002000028.png";

const Leader = () => {
  return (
    <Container>
      <Wrapper>
        <Left src={img} />
      </Wrapper>
    </Container>
  );
}

export default Leader

const Container = styled.div`
display: flex;
width: 100%;
height: 600px;
justify-content: center;
align-items: center;

`
const Right = styled.div`
  width: 50%;
  background-color: #026451;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
`;



const Wrap = styled.div`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
`;
const Left = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0px 10px 10px 0px;
`;

const Wrapper = styled.div`
display: flex;
width: 60%;
height: 100%;
justify-content: center;
align-items: center;
`

