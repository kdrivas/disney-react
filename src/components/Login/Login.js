import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Login = props => {
  return (
    <Container>
      <Content>
        <BackgroundImage/>
        <CTA>
          <CTAText>Con Combo+, aprovecha lo mejor de Disney+ y Star+ a un precio único.</CTAText>
          <CTALogoOne src="/images/cta-logo-one.svg"/>
          asdas
        </CTA>
      </Content>
      <Content>
        <div>asdasda</div>
        <div>asdasdas</div>
      </Content>
      <Content>
        <div>asdasda</div>
        <div>asdasdas</div>
      </Content>
    </Container>
  );
};

const Container =  styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 10vw;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
  width: 100%;
  padding: 80px 40px;
`;

const BackgroundImage = styled.div`
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  rigth: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: hidden;
`;

const CTA = styled.div `
  max-width: 650px;
  margin-bottom: 2vw;
  margin-left: auto
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CTAText = styled.p`
  padding-left: 10vw;
  padding-right: 10vw;
  margin-top: 20vh;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-heihgt: 1px;
  display: flex;
  width: 100%;
`;

Login.propTypes = {
  
};

export default Login;