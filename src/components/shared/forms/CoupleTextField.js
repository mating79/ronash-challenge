import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Stack, TextField } from '@shopify/polaris';
import { ChevronRightMinor } from '@shopify/polaris-icons';

import { DEFAULT_CONTENT } from '../../../data/default-content';

const CoupleTextField = ({
  fields,
  errors,
  id,
  label,
  handleUpdateFields,
  handleValidation,
}) => {
  return (
    <Stack vertical spacing="extraTight">
      <p>{label}</p>
      <Stack spacing="extraTight" wrap={false}>
        <Stack.Item fill>
          <TextField
            label={`${label} (Default)`}
            labelHidden
            value={DEFAULT_CONTENT[id]}
            disabled
          />
        </Stack.Item>
        <div style={{ paddingTop: 8 }}>
          <Icon source={ChevronRightMinor} />
        </div>
        <Stack.Item fill>
          <TextField
            label={label}
            labelHidden
            autoComplete={false}
            id={id}
            value={fields[id]}
            onChange={handleUpdateFields}
            onBlur={() => handleValidation(id)}
            error={errors[id]}
          />
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

CoupleTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CoupleTextField;
