import React from 'react';
import PropTypes from 'prop-types';

const DeactivateSection = ({ isActive, children }) => (
  <div style={isActive ? {} : { opacity: '0.4', pointerEvents: 'none' }}>
    {children}
  </div>
);

DeactivateSection.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

DeactivateSection.defaultProps = {
  isActive: false,
};

export default DeactivateSection;
