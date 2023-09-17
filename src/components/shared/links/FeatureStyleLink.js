import React from 'react';
import PropTypes from 'prop-types';
import { Link, Stack, TextStyle, Thumbnail } from '@shopify/polaris';

const FeatureStyleLink = ({ title, url, disabled, icon, subtitle }) => {
  return (
    <div
      className="feature-style-link"
      style={disabled ? { pointerEvents: 'none', opacity: '0.6' } : {}}
    >
      <Link url={url} removeUnderline monochrome>
        <Stack wrap={false}>
          {Boolean(icon) && (
            <Stack.Item>
              <Thumbnail source={icon} alt={title} size="small" />
            </Stack.Item>
          )}
          <Stack.Item fill>
            <h5 style={{ color: disabled ? '#8c9196' : '#2c6ecb' }}>
              <TextStyle variation="strong">{title}</TextStyle>
            </h5>
            {Boolean(subtitle) && (
              <TextStyle variation="subdued">{subtitle}</TextStyle>
            )}
          </Stack.Item>
        </Stack>
      </Link>
    </div>
  );
};

FeatureStyleLink.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

FeatureStyleLink.defaultProps = {
  disabled: false,
};

export default FeatureStyleLink;
