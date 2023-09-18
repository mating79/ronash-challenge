import React, { useState, useCallback, Fragment } from 'react';
import { Modal, Stack, Checkbox, Thumbnail, TextStyle } from '@shopify/polaris';

import Loader from '@/shared/loaders/Loader';

const AddProductsModal = ({ openProductModal, toggleProductModal, products, productsLoading, handleLoadMoreProducts }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductVariants, setSelectedProductVariants] = useState([]);

  const toggleProductCheck = useCallback((isChecked, id) => {
    if (isChecked) setSelectedProducts(prev => [...prev, { id }]);
    else {
      setSelectedProducts(prev => prev.filter(product => product.id !== id));
      setSelectedProductVariants(prev => prev.filter(variant => variant.productId !== id));
    }
  }, []);

  const toggleVariantCheck = useCallback(
    (isChecked, id, product) => {
      const { id: productId, variants: productVariants } = product;
      if (isChecked) {
        const variantsWithThisProductId = selectedProductVariants.filter(variant => variant.productId === productId);
        if (variantsWithThisProductId.length + 1 === productVariants.length) {
          setSelectedProducts(prev => [...prev, { id: productId }]);
          setSelectedProductVariants(prev => prev.filter(variant => variant.productId !== productId));
        } else setSelectedProductVariants(prev => [...prev, { id, productId }]);
      } else {
        if (selectedProducts.find(item => item.id === productId)) {
          const returnedVariants = productVariants.filter(i => i.id !== id).map(i => ({ id: i.id, productId }));

          setSelectedProductVariants(prev => [...prev, ...returnedVariants]);
          setSelectedProducts(prev => prev.filter(product => product.id !== productId));
        } else {
          setSelectedProductVariants(prev => prev.filter(variant => variant.id !== id));
        }
      }
    },
    [selectedProductVariants]
  );

  const addProducts = useCallback(() => {
    console.log('Selected products are: ' + selectedProducts.map(product => product.id));
    console.log('Selected variants are: ' + selectedProductVariants.map(variant => variant.id));
  }, [selectedProducts, selectedProductVariants]);

  const selectedProductIds = selectedProducts?.map(product => product?.id);
  const selectedVariantIds = selectedProductVariants?.map(variant => variant?.id);

  return (
    <Modal
      open={openProductModal}
      onClose={toggleProductModal}
      title="All products"
      limitHeight
      primaryAction={{
        content: 'Add',
        onAction: addProducts,
      }}
      secondaryActions={[{ content: 'Cancel', onAction: toggleProductModal }]}
      onScrolledToBottom={handleLoadMoreProducts}
    >
      {products?.map(product => (
        <Fragment key={product.id}>
          <Modal.Section>
            <Stack alignment="center" spacing="tight">
              <Checkbox
                label={product?.title}
                labelHidden
                checked={
                  selectedProductIds.includes(product.id) ||
                  (selectedProductVariants.find(variant => variant.productId === product.id) ? true : false)
                }
                onChange={toggleProductCheck}
                id={product?.id}
              />
              {product?.image_src && <Thumbnail size="small" source={product.image_src} />}
              <TextStyle>{product?.title}</TextStyle>
            </Stack>
          </Modal.Section>

          {product?.variants?.length > 1 &&
            product?.variants?.map(variant => (
              <Modal.Section key={variant?.id}>
                <div style={{ paddingLeft: 35 }}>
                  <Stack distribution="equalSpacing">
                    <Checkbox
                      label={variant?.title}
                      checked={selectedVariantIds.includes(variant.id) || selectedProductIds.includes(product.id)}
                      onChange={(isChecked, id) => toggleVariantCheck(isChecked, id, product)}
                      id={variant?.id}
                    />
                    <TextStyle>US${variant?.price}</TextStyle>
                  </Stack>
                </div>
              </Modal.Section>
            ))}
        </Fragment>
      ))}

      {productsLoading && (
        <Modal.Section>
          <Loader />
        </Modal.Section>
      )}
    </Modal>
  );
};

export default AddProductsModal;
