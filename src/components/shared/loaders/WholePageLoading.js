import React from 'react';
import { Spinner } from '@shopify/polaris';

const WholePageLoading = () => {
  return (
    <div
      className="whole-page-loading"
      style={{
        alignItems: 'center',
        color: 'red',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
      }}
    >
      <Spinner size="large" />
    </div>
  );
};

export default WholePageLoading;
