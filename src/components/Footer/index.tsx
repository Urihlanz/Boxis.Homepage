import React from 'react';
import { FormattedMessage } from 'react-intl';

import Logo from '../Logo';
import Navigation from '../Navigation';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import {
  Container,
  Copyright,
  CreateSiteButton,
  LegalLink,
  LegalLinks,
  Links,
  LinksRow,
  NavbarWrapper,
  SocialLink,
  SocialLinksRow,
  Wrapper,
} from './styles';
import WhatsappIcon from './WhatsappIcon';

const Footer: React.FC = () => (
  <Wrapper>
    <Container>
      <NavbarWrapper>
        <Logo width={127} height={35} light={true} />
        <Navigation />
        <CreateSiteButton size='md'>
          <FormattedMessage id='button.create_site' />
        </CreateSiteButton>
      </NavbarWrapper>
      <LinksRow>
        <Copyright>
          <FormattedMessage id='footer.copyright' />
        </Copyright>
        <Links>
          <LegalLinks>
            <LegalLink href='#'>
              <FormattedMessage id='footer.legal_links.1' />
            </LegalLink>
            <LegalLink href='#'>
              <FormattedMessage id='footer.legal_links.2' />
            </LegalLink>
            <LegalLink href='#'>
              <FormattedMessage id='footer.legal_links.3' />
            </LegalLink>
            <LegalLink href='#'>
              <FormattedMessage id='footer.legal_links.4' />
            </LegalLink>
          </LegalLinks>
          <SocialLinksRow>
            <SocialLink href='#'>
              <FacebookIcon width={8} height={15} />
            </SocialLink>
            <SocialLink href='#'>
              <WhatsappIcon width={19} height={19} />
            </SocialLink>
            <SocialLink href='#'>
              <InstagramIcon width={15} height={15} />
            </SocialLink>
          </SocialLinksRow>
        </Links>
      </LinksRow>
    </Container>
  </Wrapper>
);

export default Footer;
