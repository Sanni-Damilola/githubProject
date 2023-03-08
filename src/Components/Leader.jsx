import React from 'react'
import styled from 'styled-components'

const Leader = () => {
  return (
    <Container>
        <Right>
            <Wrap>
                <span></span>
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

const Container = styled.div``
const Right = styled.div``;
const Wrap = styled.div``;
const Left = styled.img``;

