import React from 'react';

const TableLoadingRow = ({ resourceName }) => {
  return (
    <div className="Polaris-IndexTable__LoadingPanel customed-for-data-table">
      <div className="Polaris-IndexTable__LoadingPanelRow">
        <span className="Polaris-Spinner Polaris-Spinner--sizeSmall">
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path>
          </svg>
        </span>
        <span role="status">
          <span className="Polaris-VisuallyHidden"></span>
        </span>
        <span className="Polaris-IndexTable__LoadingPanelText">
          Loading {`${resourceName}s...`}
        </span>
      </div>
    </div>
  );
};

export default TableLoadingRow;
