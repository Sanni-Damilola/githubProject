import React from "react";
import styled from "styled-components";

const Judith = () => {
  return (
    <Container>
      <Wrapper>
        <h1>TypeForm.</h1>
        <button>Sign in</button>
      </Wrapper>
    </Container>
  );
};

export default Judith;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: grey; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    margin-left: 20px;
    font-weight: 400;
  }
  button {
    margin: 0;
    width: 100px;
    height: 40px;
    margin-right: 20px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    background-color: #000;
    color: #ffff;

    :hover {
      cursor: pointer;
      background-color: #ffff;
      color: #000;
      transition: all 350ms;
    }
  }
`;
