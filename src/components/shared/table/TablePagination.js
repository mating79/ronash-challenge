import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, Stack } from '@shopify/polaris';

import { TABLE_ROWS_PER_PAGE } from 'config/constants';

const TablePagination = ({
  currentPage,
  loadingRecords,
  recordsCount,
  handleChange,
}) => {
  const pagesCount = Math.ceil(recordsCount / TABLE_ROWS_PER_PAGE);

  return (
    <Stack distribution="center">
      <Pagination
        label={`${currentPage} of ${pagesCount}`}
        hasPrevious={currentPage > 1 && !loadingRecords}
        onPrevious={() => handleChange('page', currentPage - 1)}
        hasNext={currentPage < pagesCount && !loadingRecords}
        onNext={() => handleChange('page', currentPage + 1)}
      />
    </Stack>
  );
};

TablePagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  loadingRecords: PropTypes.bool,
  recordsCount: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

TablePagination.defaultProps = {
  loadingRecords: false,
};

export default TablePagination;
