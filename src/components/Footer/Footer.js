import React from 'react';
import {
  FooterWrapper,
  FooterText,
  SocialIconsContainer
} from './FooterStyles';
import SocialMedia from "../SocialMedia/SocialMedia.component";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <SocialMedia inFooter/>
      </SocialIconsContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Debajyoti Saha. All rights reserved.
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
