import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Heading, Stack, TextStyle } from '@shopify/polaris';

const ButtonLinkedCard = ({
  subtitle,
  title,
  url,
  buttonText,
  handleClick,
}) => {
  return (
    <Card sectioned>
      <Stack alignment="center">
        <Stack.Item fill>
          <Heading>{title}</Heading>
          {Boolean(subtitle) && (
            <TextStyle variation="subdued">{subtitle}</TextStyle>
          )}
        </Stack.Item>
        <Button
          disabled={!Boolean(url)}
          primary={!Boolean(url)}
          url={url ?? '#'}
          onClick={handleClick}
          accessibilityLabel={buttonText}
        >
          {buttonText}
        </Button>
      </Stack>
    </Card>
  );
};

ButtonLinkedCard.propTypes = {
  subtitle: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  handleClick: PropTypes.func,
};

ButtonLinkedCard.defaultProps = {
  handleClick: () => {},
};

export default ButtonLinkedCard;
