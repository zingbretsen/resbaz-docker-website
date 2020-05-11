import React from 'react';
import Header from './header.js';

class Layout extends React.Component {
  render() {
      return (
          <Layout>
            <Header/>
            <p>this is muh layout</p>
            <p>this is second layout</p>
          </Layout>
      );
  }
}

export default Layout;
