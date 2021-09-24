import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Login = props => {
  return (
    <Container>
      <Content>
        <BackgroundImage/>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg"/>
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="images/cta-logo-two.png"/>
        </CTA>
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
  background-size: cover;
  overflow: hidden;
`;

const CTA = styled.div `
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2vw;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-heihgt: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background: #0063e5;
  width: 100%;
  font-size: 18px;
  padding: 16.5px 0;
  border-radius: 4px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  width: 100%;
`;

Login.propTypes = {
  
};

export default Login;