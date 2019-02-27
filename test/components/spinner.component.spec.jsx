import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Spinner from '../../src/index';

describe('Spinner component', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Spinner />);
    expect(wrapper.find(Spinner).props().config).to.eql({
      color: '#FAC51D',
      width: 4,
    });
  });
});
