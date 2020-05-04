import React from 'react';

import Hyphenated from 'react-hyphen';

import {
  Container, Presentation, HaloImage, MyImage, Name, Nickname, LinksTitle, LinksContainer,
  Rule, Description, DescriptionTitle, DescriptionText, GithubIcon, LinkedInIcon,
  LattesIcon, EmailIcon, ResumeLink, TelegramIcon
} from './styles';

import me from '../../images/me.jpeg';
import lattesIcon from '../../images/lattes-icon.svg';

const AboutMe = () => {
    return (
      <Container>
        <Presentation>
          <HaloImage>
            <MyImage src={me} />
          </HaloImage>
          <Name>Paulo Renato</Name>
          <Nickname>{'//PauloRSF'}</Nickname>
          <LinksTitle>Check me out on:</LinksTitle>
          <LinksContainer>
            <a
              href="https://github.com/PauloRSF"
              target="_blank"
              rel="noopener noreferrer"
            >
                <GithubIcon size="30" />
            </a>
            <a
              href="https://www.linkedin.com/in/paulo-renato-35bb41193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size="30" />
            </a>
            <a
              href="http://lattes.cnpq.br/4784002796467114"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LattesIcon src={lattesIcon} />
            </a>
            <a
              href="https://telegram.me/paulorenato130"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon size="30" />
            </a>
            <a href="mailto:paulorsouzaf@gmail.com">
              <EmailIcon size="30" />
            </a>
          </LinksContainer>
        </Presentation>
        <Rule />
        <Description>
          <DescriptionTitle>Who am i?</DescriptionTitle>
          <DescriptionText>
            <Hyphenated>
              My name is Paulo Renato, i'm 21 years old. I graduated in Computer Science
              at Universidade Federal do Piauí (UFPI) in 2019. I like playing guitar,
              painting, watching movies, and most of all, programming! I love to challenge
              myself to learn something new everyday. My main interests are: fullstack web
              development, OS development and embedded systems. You can check my 
              resume <ResumeLink to="/resume/">here</ResumeLink>. I'm currently available
              for hiring, so, feel free to contact me!
            </Hyphenated>
          </DescriptionText>
        </Description>
      </Container>
    );
};

export default AboutMe;
