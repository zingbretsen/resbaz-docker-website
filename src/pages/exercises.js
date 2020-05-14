import React, { Component } from 'react';
import { navigate } from 'gatsby';

class Index extends Component {
    componentDidMount() {
        navigate('/exercises/0');
    }

    render() {
        return <></>;
    }
}

export default Index;
