import {AppShell, useMantineColorScheme} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import AppShellHeader from './AppShellHeader';
import AppShellNavBar from './AppShellNavBar';
import RoutesComponent from '../Routes/RoutesComponent';
const AppShellMain = () => {
  const [mobileOpened, {toggle: toggleMobile, close: closeMobile}] =
    useDisclosure();
  const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure(true);

  const {colorScheme} = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const handleMenuClose = () => {
    if (mobileOpened) {
      closeMobile();
    }
  };
  return (
    <AppShell
      header={{height: 60}}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: {mobile: !mobileOpened, desktop: !desktopOpened},
      }}
      padding={0}
    >
      <AppShellHeader
        dark={dark}
        mobileOpened={mobileOpened}
        desktopOpened={desktopOpened}
        handleMenuClose={handleMenuClose}
        toggleDesktop={toggleDesktop}
        toggleMobile={toggleMobile}
      />
      <AppShellNavBar dark handleMenuClose={handleMenuClose} />
      <AppShell.Main
        style={{
          background: !dark ? 'linear-gradient(to bottom, white, #F7F7F7)' : '',
          overflowX: 'hidden',
        }}
      >
        <RoutesComponent />
      </AppShell.Main>
    </AppShell>
  );
};

export default AppShellMain;
