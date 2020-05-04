import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Navbar from '../Navbar';

import { createGlobalStyle } from 'styled-components';
import { App } from './styles';

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #181B25 !important;
    font-family: 'Roboto Mono';
  }
`;

const Layout = ({ title, children }) => (
  <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&display=swap" rel="stylesheet"/>
    </Helmet>
    <GlobalStyle />
    <App>
      <Navbar title={title} />
      <main>{children}</main>
    </App>
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.propTypes = {
  title: '',
};

export default Layout;
