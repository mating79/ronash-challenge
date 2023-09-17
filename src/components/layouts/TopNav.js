import React, { useCallback } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { Button, Icon, Link, Stack, TextStyle } from '@shopify/polaris';
import { MobileHamburgerMajor } from '@shopify/polaris-icons';

import { useRoutes } from 'hooks/useRoutes';

const TopNav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const routes = useRoutes(pathname);

  const handleOpenSidebar = useCallback(() => {
    const sidebar = document.getElementById('top-nav-links');
    const modal = document.getElementById('main-overlay-modal');

    if (sidebar && modal) {
      sidebar.classList.add('active');
      modal.classList.add('active');
    }
  }, []);

  const handleCloseSidebar = useCallback(() => {
    const sidebar = document.getElementById('top-nav-links');
    const modal = document.getElementById('main-overlay-modal');

    if (sidebar && modal) {
      sidebar.classList.remove('active');
      modal.classList.remove('active');
    }
  }, []);

  return (
    <div className="Polaris-Frame__TopBar">
      <div className="Polaris-TopBar">
        <div className="toggle-top-nav-icon">
          <Button
            plain
            monochrome
            removeUnderline
            onClick={() => handleOpenSidebar()}
          >
            <Icon source={MobileHamburgerMajor} />
          </Button>
        </div>

        <div className="top-navigation-items" id="top-nav-links">
          {routes?.map((section, index) => (
            <div key={index}>
              {section?.map(route => (
                <div
                  key={route?.url}
                  className={clsx('link-wrapper', route?.selected && 'active')}
                >
                  <Link
                    url={route?.url}
                    removeUnderline
                    monochrome
                    onClick={() => handleCloseSidebar()}
                  >
                    <Stack spacing="tight">
                      <Icon
                        source={route?.icon}
                        color={route?.selected ? 'primary' : 'base'}
                      />
                      <TextStyle variation="strong">{route?.label}</TextStyle>
                    </Stack>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div id="main-overlay-modal" onClick={() => handleCloseSidebar()}></div>
      </div>
    </div>
  );
};

export default TopNav;
