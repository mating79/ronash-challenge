import React from 'react';
import PropTypes from 'prop-types';
import { ContextualSaveBar } from '@shopify/polaris';

const UnsavedChangesBar = ({
  fullWidth,
  loading,
  message,
  handleDiscard,
  handleSave,
}) => {
  return (
    <ContextualSaveBar
      fullWidth={fullWidth}
      message={message}
      discardAction={{ onAction: handleDiscard }}
      saveAction={{ onAction: handleSave, loading }}
    />
  );
};

UnsavedChangesBar.propTypes = {
  fullWidth: PropTypes.bool,
  handleDiscard: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

UnsavedChangesBar.defaultProps = {
  fullWidth: false,
  loading: false,
  message: 'Unsaved Changes',
};

export default UnsavedChangesBar;
