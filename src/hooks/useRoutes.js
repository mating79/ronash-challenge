import { HomeMajor, ListMajor } from '@shopify/polaris-icons';

import { PATHS } from 'config/constants';

export const useRoutes = pathname => {
  return [
    [
      {
        label: 'Home',
        icon: HomeMajor,
        url: PATHS.HOME,
        selected: pathname === '/',
      },
    ],
    [
      {
        label: 'Help',
        icon: ListMajor,
        url: PATHS.HELP,
        selected: pathname?.includes(PATHS.HELP),
      },
    ],
  ];
};
