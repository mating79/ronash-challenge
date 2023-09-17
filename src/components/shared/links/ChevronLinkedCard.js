import React from 'react';
import PropTypes from 'prop-types';
import { Card, Heading, Stack, TextStyle, Link, Icon } from '@shopify/polaris';
import { ChevronRightMinor } from '@shopify/polaris-icons';

const ChevronLinkedCard = ({ subtitle, title, url, handleClick }) => {
  return (
    <div className="chevron-linked-card">
      <Link url={url} onClick={handleClick}>
        <Card sectioned>
          <Stack alignment="center" wrap={false}>
            <Stack.Item fill>
              <Heading>{title}</Heading>
              {Boolean(subtitle) && (
                <TextStyle variation="subdued">{subtitle}</TextStyle>
              )}
            </Stack.Item>
            <Icon source={ChevronRightMinor} />
          </Stack>
        </Card>
      </Link>
    </div>
  );
};

ChevronLinkedCard.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

ChevronLinkedCard.defaultProps = {
  handleClick: () => {},
};

export default ChevronLinkedCard;
