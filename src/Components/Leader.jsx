import React from 'react'
import styled from 'styled-components'

const Leader = () => {
  return (
    <Container>
        <Right>
            <Wrap>
                <span>
                  hey, i'm a sample typeform 
                </span>
                <button>
                    show me
                </button>
            </Wrap>
        </Right>
        <Left />
    </Container>
  )
}

export default Leader

const Container = styled.div`
display: flex;
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
`;



const Wrap = styled.div`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
`;
const Left = styled.img``;

