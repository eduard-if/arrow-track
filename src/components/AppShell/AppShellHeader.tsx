import {AppShell, Box, Burger, Group, Text, Tooltip} from '@mantine/core';
import {Link} from 'react-router-dom';
import ThemeButton from '../ThemeButton/ThemeButton';
import {AppShellHeaderProps} from './types/types';

const AppShellHeader = ({
  dark,
  mobileOpened,
  toggleMobile,
  desktopOpened,
  toggleDesktop,
  handleMenuClose,
}: AppShellHeaderProps) => {
  return (
    <AppShell.Header
      style={{
        background: dark ? 'rgba(45, 45, 45, 0.5)' : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <Box
        h='100%'
        px='md'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
          flexWrap: 'nowrap',
        }}
      >
        <Group>
          <Tooltip
            events={{hover: true, focus: true, touch: false}}
            openDelay={2000}
            withArrow
            arrowSize={10}
            label={mobileOpened ? 'Close Menu' : 'Open Menu'}
          >
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom='sm'
              size='md'
            />
          </Tooltip>

          <Tooltip
            openDelay={2000}
            withArrow
            arrowSize={10}
            label={desktopOpened ? 'Close Menu' : 'Open Menu'}
          >
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom='sm'
              size='md'
            />
          </Tooltip>
        </Group>
        <Group>
          <Link
            to={'/'}
            style={{textDecoration: 'none'}}
            onClick={handleMenuClose}
          >
            <Text c={dark ? 'gray.1' : 'gray.8'}>logo</Text>
          </Link>
        </Group>
        <Group>
          <ThemeButton />
        </Group>
      </Box>
    </AppShell.Header>
  );
};

export default AppShellHeader;
