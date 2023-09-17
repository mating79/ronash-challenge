import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { PATHS } from 'config/constants';

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    history.push(PATHS.HOME);
  }, [history]);

  return null;
};

export default NotFound;
