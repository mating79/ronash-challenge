import { useSelector } from 'react-redux';

export const useShopDomain = () => {
  const shopInfo = useSelector(state => state?.shop?.shopInfo);
  return shopInfo?.shopDomain;
};
