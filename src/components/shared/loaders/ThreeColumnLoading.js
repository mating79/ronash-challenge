import React, { Fragment } from 'react';
import {
  Card,
  Layout,
  TextContainer,
  SkeletonDisplayText,
  SkeletonBodyText,
} from '@shopify/polaris';

const ThreeColumnLoading = () => {
  return (
    <Fragment>
      <Layout.Section oneThird>
        <Card>
          <Card.Section>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={6} />
            </TextContainer>
          </Card.Section>
          <Card.Section>
            <SkeletonDisplayText size="small" />
          </Card.Section>
        </Card>
      </Layout.Section>
      <Layout.Section oneThird>
        <Card>
          <Card.Section>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={6} />
            </TextContainer>
          </Card.Section>
          <Card.Section>
            <SkeletonDisplayText size="small" />
          </Card.Section>
        </Card>
      </Layout.Section>
      <Layout.Section oneThird>
        <Card>
          <Card.Section>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={6} />
            </TextContainer>
          </Card.Section>
          <Card.Section>
            <SkeletonDisplayText size="small" />
          </Card.Section>
        </Card>
      </Layout.Section>
    </Fragment>
  );
};

export default ThreeColumnLoading;
