import {AppShell, ScrollArea} from '@mantine/core';
import {AppShellNavBarProps} from './types/types';
import AppShellNavLinks from './AppShellNavLinks';

const AppShellNavBar = ({dark, handleMenuClose}: AppShellNavBarProps) => {
  return (
    <AppShell.Navbar
      style={{
        background: !dark ? 'linear-gradient(to bottom, white, #F7F7F7)' : '',
      }}
    >
      <AppShell.Section grow component={ScrollArea} offsetScrollbars>
        <AppShellNavLinks handleMenuClose={handleMenuClose} />
      </AppShell.Section>
      {/* SIDE MENU LOGGED IN STATUS */}

      {/* SIDE MENU LOGGED IN STATUS */}
    </AppShell.Navbar>
  );
};

export default AppShellNavBar;
