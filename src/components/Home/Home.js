import React from 'react';
import styled from 'styled-components';

const Home = props => {
  return (
    <Container>
      <h2>HELLO</h2>
      <h2>HELLO</h2>
      <h2>HELLO</h2>
      <h2>HELLO</h2>
      <h2>HELLO</h2>
      <h2>HELLO</h2>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: url('/images/home-background.png') center center / cover no-repeat fixed;
  overflow-x: hidden;
  min-height: calc(100vh - 72px);
  padding: 0 calc(3.5vw + 5px);
  top: 72px;
`;

export default Home;