/* eslint-disable react/no-multi-comp */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, number } from '@storybook/addon-knobs';
import Spinner from '../src/index';


const StoryHOC = (Component, props) => {
  return class extends React.Component {
    render() {
      return <Component {...this.props} {...props} />;
    }
  };
};

const stories = storiesOf('@opuscapita/react-spinner', module);

// add your stories:
stories.add('Spinner', () => {
  class SpinnerStory extends React.Component {
    render() {
      const props = { ...this.props };
      return <Spinner {...props} />;
    }
  }
  const defaultConfig = { color: '#FAC51D', width: 4 };

  const spinnerProps = {
    delay: number('Spinner delay', 500),
    config: object('Spinner configuration object', defaultConfig, 'Configuration'),
  };
  const Wrapper = StoryHOC(SpinnerStory, spinnerProps);
  return <Wrapper />;
});
