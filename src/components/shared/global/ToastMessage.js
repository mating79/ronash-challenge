import React from 'react';
import PropTypes from 'prop-types';
import { Toast } from '@shopify/polaris';

const ToastMessage = ({
  actionContent,
  actionHandler,
  duration,
  error,
  handleDismiss,
  message,
}) => {
  const hasAction = Boolean(actionContent);

  return (
    <Toast
      content={message}
      duration={hasAction ? 10000 : duration}
      error={error}
      onDismiss={handleDismiss}
      action={
        hasAction
          ? {
              content: actionContent,
              onAction: actionHandler,
            }
          : null
      }
    />
  );
};

ToastMessage.propTypes = {
  actionContent: PropTypes.string,
  actionHandler: PropTypes.func,
  duration: PropTypes.number,
  error: PropTypes.bool,
  handleDismiss: PropTypes.func.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

ToastMessage.defaultProps = {
  actionContent: '',
  actionHandler: () => {},
  duration: 5000,
  error: false,
};

export default ToastMessage;
