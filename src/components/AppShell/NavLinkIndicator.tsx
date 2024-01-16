import {Indicator} from '@mantine/core';
import React from 'react';
import {Location} from 'react-router-dom';

const NavLinkIndicator = ({
  children,
  path,
  location,
  ...restProps
}: {
  children: React.ReactNode;
  path: string;
  location: Location<unknown>;
}) => {
  return (
    <Indicator
      {...restProps}
      color='red'
      position='top-end'
      disabled={location.pathname === path ? false : true}
    >
      {children}
    </Indicator>
  );
};

export default NavLinkIndicator;
