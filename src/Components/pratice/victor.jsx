import React from "react";
import styled from "styled-components";

const Victor = () => {
  return (
    <div>
      <Container>
        <Name>My name is Victor</Name>
        <Description>
          I am Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          molestias accusantium totam fuga veritatis nostrum necessitatibus
          praesentium tempora quasi nisi? Eos quia doloribus sapiente. Quos
          reprehenderit laudantium numquam soluta amet inventore adipisci eius,
          suscipit eveniet, dolorem ipsa facilis? Debitis delectus quaerat illo
          eum quo quis mollitia consectetur suscipit, temporibus a!
        </Description>
      </Container>
    </div>
  );
};

export default Victor;

const Container = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  font-size: 50px;
  color: purple;
  font-weight: bold;
  font-family: cursive;
`;
const Description = styled.div`
  font-size: 25px;
  color: purple;
  font-weight: 500;
  font-family: cursive;
`;
