import React from 'react';
import Spinner from '../../src/index';

export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ height: '100px' }}>
        <Spinner />
      </div>
    );
  }
}
