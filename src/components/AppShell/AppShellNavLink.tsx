import {NavLink} from '@mantine/core';
import {Link, Location} from 'react-router-dom';
import NavLinkIndicator from './NavLinkIndicator';

const AppShellNavLink = ({
  path,
  location,
  handleMenuClose,
  ...restProps
}: {
  handleMenuClose: () => void;
  path: string;
  location: Location<unknown>;
}) => {
  return (
    <NavLinkIndicator path={path} location={location}>
      <NavLink
        onClick={handleMenuClose}
        color='red'
        active={location.pathname === path ? true : false}
        component={Link}
        to={path}
        {...restProps}
      />
    </NavLinkIndicator>
  );
};

export default AppShellNavLink;
