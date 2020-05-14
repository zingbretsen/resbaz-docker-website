import React, { Component } from 'react';
// import Layout from '../components/layout.js';
import { Link } from 'gatsby';

class Index extends Component {
  render() {
      return (
          <>
            <h3>Getting started with Docker</h3>
          <p>These are the resources for the <a target="_blank" rel="noopener noreferrer" href="http://researchbazaar.arizona.edu/resbaz/resbazTucson2020/">ResBaz Tucson</a> workshop "Getting started with Docker"</p>
            <h4>Preprequisites</h4>
            <p>Before the workshop, please install Docker and ensure that it works on your computer. See <Link to="/exercises/0">exercise 0</Link></p>
          </>
      )
  }
}

export default Index;
