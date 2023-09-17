import { useSelector } from 'react-redux';

export const useShopId = () => {
  const shopInfo = useSelector(state => state?.shop?.shopInfo);
  return shopInfo?.shopId;
};
