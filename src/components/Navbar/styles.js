import React from 'react';
import styled from 'styled-components';

import AnimateHeight from 'react-animate-height';
import { Link } from 'gatsby';
import { Bars } from '@styled-icons/fa-solid';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 3rem;
  background-color: #181B25;
`;

export const Logo = styled.img`
  width: 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled.h2`
  position: absolute;
  left: 0;
  right: 0;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #CACACA;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Menu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuLink = styled(props => <Link {...props} />)`
  display: inline;
  width:  min-content;
  margin-left: 1rem;
  color: #CACACA;
  font-size: 1.3rem;
  font-weight: bold;

  @media (max-width: 768px) {
    margin: 1rem 0 1.5rem 1rem;
    display: block;
  }
`;

export const CollapsibleMenu = styled(AnimateHeight)`
  display: block;
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  padding: 0 1rem;
  background-color: #22242E;
  filter: drop-shadow(0px 10px 4px rgba(0,0,0,.1));
  transition: max-height .2s ease-in-out;
`;

export const BarsIcon = styled(Bars)`
  display: none;
  color: #E5E5E5;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
