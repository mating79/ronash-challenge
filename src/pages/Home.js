import React, { useCallback, useState } from 'react';
import { Button, Page } from '@shopify/polaris';

import { useProducts } from '@/home/useProducts';
import AddProductsModal from '@/home/AddProductsModal';

const Home = () => {
  const [products, productsLoading, handleLoadMoreProducts] = useProducts();
  const [openProductModal, setOpenProductModal] = useState(false);

  const toggleProductModal = useCallback(() => {
    setOpenProductModal(openProductModal => !openProductModal);
  }, []);

  return (
    <Page title="Home" subtitle="This is home page">
      <Button onClick={toggleProductModal}>Open products modal</Button>

      <AddProductsModal
        openProductModal={openProductModal}
        toggleProductModal={toggleProductModal}
        products={products}
        productsLoading={productsLoading}
        handleLoadMoreProducts={handleLoadMoreProducts}
      />
    </Page>
  );
};

export default Home;
