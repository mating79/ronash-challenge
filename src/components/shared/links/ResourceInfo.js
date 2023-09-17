import React from 'react';
import PropTypes from 'prop-types';
import { Link, Stack, TextStyle, Thumbnail } from '@shopify/polaris';

import productImagePlaceHolder from 'images/product-placeholder.jpg';

const ResouceLink = ({ url, externalUrl, children }) => (
  <Link
    onClick={() => {
      if (externalUrl) window.open(url, '_blank');
    }}
    url={url}
    external={externalUrl ? 'true' : 'false'}
    removeUnderline
    monochrome
  >
    {children}
  </Link>
);

const ResouceItem = ({
  image,
  title,
  subtitle,
  children,
  subduedSubtitle,
  thumbnailSize,
  hasUrl = false,
}) => (
  <Stack wrap={false}>
    <Thumbnail
      source={image ?? productImagePlaceHolder}
      alt={title}
      size={thumbnailSize}
    />
    <div style={{ width: 200 }}>
      <h4
        className="no-wrap-text"
        title={title}
        style={{ color: hasUrl ? '#2c6ecb' : '#000', fontSize: '15px' }}
      >
        <TextStyle variation="strong">{title}</TextStyle>
      </h4>
      {Boolean(subtitle) && (
        <p
          className="no-wrap-text"
          style={{ color: subduedSubtitle ? '#6d7175' : '#000' }}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </Stack>
);

const ResourceInfo = ({ resource, children, subduedSubtitle, externalUrl }) => {
  if (Boolean(resource?.url)) {
    return (
      <ResouceLink url={resource?.url} externalUrl={externalUrl}>
        <ResouceItem hasUrl subduedSubtitle={subduedSubtitle} {...resource}>
          {children}
        </ResouceItem>
      </ResouceLink>
    );
  } else {
    return (
      <ResouceItem subduedSubtitle={subduedSubtitle} {...resource}>
        {children}
      </ResouceItem>
    );
  }
};

ResourceInfo.propTypes = {
  children: PropTypes.node,
  externalUrl: PropTypes.bool,
  resource: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    subtitle: PropTypes.string,
    thumbnailSize: PropTypes.string,
  }),
  subduedSubtitle: PropTypes.bool,
};

ResourceInfo.defaultProps = {
  externalUrl: false,
  resource: {
    thumbnailSize: 'small',
  },
  subduedSubtitle: false,
};

export default ResourceInfo;
