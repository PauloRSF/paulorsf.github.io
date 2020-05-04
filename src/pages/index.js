import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import AboutMe from '../components/AboutMe';

const IndexPage = () => {
  return (
    <Layout title="Welcome!">
      <SEO title="Home" />
      <AboutMe />
    </Layout>
  )
}
export default IndexPage;
