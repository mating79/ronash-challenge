import { useSelector } from 'react-redux';

export const useToast = () => {
  return useSelector(state => state?.toast);
};
