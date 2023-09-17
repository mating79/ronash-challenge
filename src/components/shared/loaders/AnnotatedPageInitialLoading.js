import React from 'react';
import { Card, Layout, SkeletonPage, SkeletonBodyText } from '@shopify/polaris';

const AnnotatedPageInitialLoading = () => {
  return (
    <SkeletonPage secondaryActions={2}>
      <Layout>
        <Layout.AnnotatedSection title={<SkeletonBodyText lines={2} />}>
          <Card sectioned>
            <SkeletonBodyText lines={3} />
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection title={<SkeletonBodyText lines={2} />}>
          <Card sectioned>
            <SkeletonBodyText lines={3} />
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </SkeletonPage>
  );
};

export default AnnotatedPageInitialLoading;
