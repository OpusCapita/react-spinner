import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { Spinner } from '../src/index';

const stories = storiesOf('@opuscapita/react-spinner', module);

// add your stories:
stories.add('Default spinner', () => (<Spinner />));

stories.add('Configurable spinner', () => (
  <Spinner
    config={object(
      'Color and width',
      {
        color: '#FAC51D', // default color: #FAC51D
        width: 15, // default width: 4
      },
    )}
  />));
