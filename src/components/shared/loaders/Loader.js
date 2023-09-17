import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@shopify/polaris';

const Loader = ({ height, size }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
      }}
    >
      <Spinner size={size} />
    </div>
  );
};

Loader.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.string,
};

Loader.defaultProps = {
  height: 40,
  size: 'small',
};

export default Loader;
