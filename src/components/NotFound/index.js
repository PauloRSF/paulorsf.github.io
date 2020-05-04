import React from 'react';

import { Title, Text } from './styles';

const NotFound = () => (
  <>
    <Title>Nothing found here ¯\_(ツ)_/¯</Title>
    <Text>
      The page you tried to acess doesn't have anything (yet). Meanwhile,
      try to read some of my <a href="/posts/" style={{ color: 'lightblue' }}>posts</a>!
    </Text>
  </>
);

export default NotFound;
