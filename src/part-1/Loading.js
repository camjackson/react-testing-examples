import React from 'react';
import Spinner from './Spinner';

const Loading = ({ loading, children }) => {
  if (loading) {
    return <Spinner />;
  }
  return children;
}

export default Loading;
