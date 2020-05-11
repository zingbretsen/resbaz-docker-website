import React, { Component } from 'react';
// import Layout from '../components/layout.js';
import { Link } from 'gatsby';

class Index extends Component {
  render() {
      return (
          <>
            <h3>Getting started with Docker</h3>
            <p>These are the resources for the ResBaz Tucson workshop "Getting started with Docker"</p>
            <h4>Preprequisites</h4>
            <p>Before the workshop, please install Docker and ensure that it works on your computer. See <Link to="/exercises">exercise 0</Link></p>
          </>
      )
  }
}

export default Index;
