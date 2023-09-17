import { useSelector } from 'react-redux';

export const useShopInfo = () => {
  const shopInfo = useSelector(state => state?.shop?.shopInfo);
  return shopInfo;
};
