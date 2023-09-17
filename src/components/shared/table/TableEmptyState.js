import React from 'react';
import PropTypes from 'prop-types';
import { EmptySearchResult } from '@shopify/polaris';

const TableEmptyState = ({ resourceName, subtitle }) => {
  return (
    <EmptySearchResult
      title={`No ${resourceName}(s) found`}
      description={Boolean(subtitle) ? subtitle : null}
      withIllustration
    />
  );
};

TableEmptyState.propTypes = {
  resourceName: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

TableEmptyState.defaultProps = {
  subtitle: 'Try changing the filters or search term',
};

export default TableEmptyState;
