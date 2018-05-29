import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../Loading';
import Spinner from '../Spinner';

describe('Loading', () => {
  it('shows a loading spinner when the data is still loading', () => {
    const loading = shallow(
      <Loading loading>
        <span>Hide me</span>
      </Loading>
    );
    expect(loading.find(Spinner)).toExist();
    expect(loading.find('span')).not.toExist();
  });

  it('renders the children once we are not loading any more', () => {
    const loading = shallow(
      <Loading loading={false}>
        <span>Show me</span>
      </Loading>
    );
    expect(loading.find(Spinner)).not.toExist();
    expect(loading.find('span')).toExist();
  });
});
