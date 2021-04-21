import React from 'react';

import {FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    FooterLinkSocials, 
    FooterLinkSocialItems} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkSocialItems>
                            <FooterLinkTitle>Follow Us</FooterLinkTitle>
                                <FooterLinkSocials src="images/twitter.jpg"/>
                                <FooterLinkSocials src="images/facebook.jpg"/>
                                <FooterLinkSocials src="images/google.jpg"/>
                                <FooterLinkSocials src="images/instagram.jpg"/>
                        </FooterLinkSocialItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink>Contact us</FooterLink>
                                <FooterLink>Terms & Condidtions</FooterLink>
                                <FooterLink>FAQ</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
