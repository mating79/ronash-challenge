import { useCallback, useEffect, useState } from 'react';
import qs from 'querystring';

import { api } from 'api';
import { TABLE_ROWS_PER_PAGE } from 'config/constants';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  const [productsLoading, setProductsLoading] = useState(false);

  useEffect(() => {
    const params = {
      limit: TABLE_ROWS_PER_PAGE,
      offset: (currentPage - 1) * TABLE_ROWS_PER_PAGE,
    };

    const serializedParams = {
      params,
      paramsSerializer: params => qs.stringify(params),
    };

    setProductsLoading(true);

    api
      .getProducts(serializedParams)
      .then(resp => {
        setProducts(products => [...products, ...resp?.data?.results]);
        setTotalProductsCount(resp?.data?.count);
        setProductsLoading(false);
      })
      .catch(err => {
        setProductsLoading(false);
      });
  }, [currentPage]);

  const handleLoadMoreProducts = useCallback(() => {
    if (currentPage * TABLE_ROWS_PER_PAGE < totalProductsCount) setCurrentPage(prev => prev + 1);
  }, [currentPage, totalProductsCount]);

  return [products, productsLoading, handleLoadMoreProducts];
};
