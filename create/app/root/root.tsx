import React from 'react';

interface State {
}

export default class RootComponent extends React.Component {
  state: State = {
  };

  componentWillMount() {
  }

  render() {
    return (
      <h1>Hello from react</h1>
    );
  }
}
