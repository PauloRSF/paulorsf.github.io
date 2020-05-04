import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import {
  Container, Logo, Title, Menu, MenuLink, CollapsibleMenu, BarsIcon
} from './styles';

import logo from '../../images/logo.svg';

const Navbar = ({ title }) => {
  const [isColMenuOpen, setIsColMenuOpen] = useState(false);

  const getMenuLinks = () => {
    return (
      <>
        <MenuLink
          to="/"
          style={{textDecoration: 'none'}}
          activeStyle={{borderBottom: '3px solid lightblue'}}>
            Home
        </MenuLink>
        <MenuLink
          to="/posts/"
          style={{textDecoration: 'none'}}
          activeStyle={{borderBottom: '3px solid lightblue'}}>
            Posts
        </MenuLink>
        <MenuLink
          to="/resume/"
          style={{textDecoration: 'none'}}
          activeStyle={{borderBottom: '3px solid lightblue'}}>
            Resume
        </MenuLink>
      </>
    );
  };

  return (
    <Container>
      <Link to="/"><Logo src={logo}/></Link>
      <Title>{title}</Title>
      <Menu>
        { getMenuLinks() }
      </Menu>
      <BarsIcon onClick={() => setIsColMenuOpen(!isColMenuOpen)} size="40" />
      <CollapsibleMenu duration={ 300 } height={ isColMenuOpen? 'auto' : 0 }>
        { getMenuLinks() }
      </CollapsibleMenu>
    </Container>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "",
};

export default Navbar;
