import React from "react";
import twitter from "../landingPageImages/twitter.png";
import facebook from "../landingPageImages/facebook.jpg";
import instagram from "../landingPageImages/instagram.png";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinkSocials,
  FooterLinkSocialItems,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkSocialItems>
              <FooterLinkTitle>Follow Us</FooterLinkTitle>
              <FooterLinkSocials src={twitter} />
              <FooterLinkSocials src={facebook} />
              <FooterLinkSocials src={instagram} />
            </FooterLinkSocialItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink>Contact us</FooterLink>
              <FooterLink>Terms & Conditions</FooterLink>
              <FooterLink>FAQ</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
