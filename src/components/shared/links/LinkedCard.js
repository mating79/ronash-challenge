import React from 'react';
import PropTypes from 'prop-types';
import { Card, Heading, Icon, Link, Stack } from '@shopify/polaris';

const LinkedCard = ({ icon, subtitle, title, url, handleClick }) => {
  return (
    <div className="linked-card">
      <Link url={url} onClick={handleClick}>
        <Card
          title={
            <Stack alignment="center">
              <Icon source={icon} color="success" />
              <Heading>{title}</Heading>
            </Stack>
          }
          sectioned
        >
          <p>{subtitle}</p>
        </Card>
      </Link>
    </div>
  );
};

LinkedCard.propTypes = {
  icon: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

LinkedCard.defaultProps = {
  handleClick: () => {},
};

export default LinkedCard;
