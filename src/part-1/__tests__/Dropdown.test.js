import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../Dropdown';

describe('Dropdown', () => {
  it('renders an option element for each supplied option', () => {
    const dropdown = shallow(
      <Dropdown options={[
        { value: '', label: 'Select size' },
        { value: 'S', label: 'Small' },
        { value: 'M', label: 'Medium' },
        { value: 'L', label: 'Large' },
      ]} />
    );
    const optionElements = dropdown.find('option');
    expect(optionElements).toHaveLength(4);
  });

  it('renders the value and label into the options', () => {
    const dropdown = shallow(
      <Dropdown options={[
        { value: '', label: 'Select size' },
        { value: 'S', label: 'Small' },
        { value: 'M', label: 'Medium' },
        { value: 'L', label: 'Large' },
      ]} />
    );
    const firstOption = dropdown.find('option').at(0);
    expect(firstOption).toHaveProp('value', '');
    expect(firstOption).toHaveText('Select size');
  });
});
