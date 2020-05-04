import styled, { css } from 'styled-components';

import { Link } from 'gatsby';
import { Envelope } from '@styled-icons/fa-solid';
import { Github, Linkedin, TelegramPlane } from '@styled-icons/fa-brands';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
`;

export const HaloImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  margin: 0 auto;
  height: 240px;
  border: 5px solid #CACACA;
  border-radius: 50%;
`;

export const MyImage = styled.img`
  width: 220px;
  margin: auto auto;
  border-radius: 50%;
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Name = styled.p`
  margin: .5rem 0;
  color: #E5E5E5;
  text-align: center;
  font-size: 2rem;
`;

export const Nickname = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  color: #AFAFAF;
  text-align: center;
  font-size: 1.5rem;
`;

export const LinksTitle = styled.p`
  color: #E5E5E5;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.3rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  min-width: 250px;
  margin: 0 auto;
`;

export const Rule = styled.div`
  min-width: 1px;
  background-color: #AFAFAF;
  
  @media (max-width: 768px) {
    min-height: 1px;
    width: 75%;
    margin: 0 auto;
    margin-top: 2rem;
  }
`;

export const Description = styled.div`
  max-width: 400px;
  text-align: justify;
  padding: 0 3rem;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const DescriptionTitle = styled.h1`
  color: #E5E5E5;
  font-family: 'Roboto';

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const DescriptionText = styled.p`
  color: #AFAFAF;
  font-size: 1.3rem;
  font-family: 'Roboto';
  word-break: break-word;
`;

export const ResumeLink = styled(Link)`
  color: lightblue;
`;

const icon = css`
  color: #E5E5E5;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const GithubIcon = styled(Github)`
  ${icon}
`;

export const LinkedInIcon = styled(Linkedin)`
  ${icon}
`;

export const LattesIcon = styled.img`
  ${icon}
  width: 1.5rem;
`;

export const TelegramIcon = styled(TelegramPlane)`
  ${icon}
`;

export const EmailIcon = styled(Envelope)`
  ${icon}
`;