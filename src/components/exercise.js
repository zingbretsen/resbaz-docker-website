import React from 'react';

class Exercise extends React.Component {
    render() {
        return (
            <>
              <h1>{ this.props.name }</h1>
              <p>{ this.props.subtitle }</p>
              <pre>
                <code>{ this.props.code }</code>
              </pre>
              {this.props.rest}
            </>
        );
    }
}

export default Exercise;
