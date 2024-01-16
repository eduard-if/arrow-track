import {Button, Divider, Stack, Text, Indicator} from '@mantine/core';

import {IconRun} from '@tabler/icons-react';
import {Link, useLocation} from 'react-router-dom';

import {AppShellNavLinksProps} from './types/types';
import AppShellNavLink from './AppShellNavLink';
import {
  accountSettingsLinksArray,
  generalLinksArray,
  infoLinksArray,
  presetsLinksArray,
} from './data/linksData';

const AppShellNavLinks = ({handleMenuClose}: AppShellNavLinksProps) => {
  const location = useLocation();

  return (
    <>
      <Stack p={'sm'}>
        <Indicator
          color='red'
          withBorder
          size={13}
          position='top-end'
          disabled={location.pathname === '/track-workout' ? false : true}
        >
          <Button
            onClick={handleMenuClose}
            variant='gradient'
            gradient={{from: 'red', to: 'pink', deg: 0}}
            component={Link}
            to={'/track-workout'}
            size='compact-lg'
            radius={'md'}
            fullWidth
            rightSection={<IconRun size={25} stroke={1.5} />}
          >
            <Text>Track Workout</Text>
          </Button>
        </Indicator>
        <Text ml={'sm'} fw={'lighter'} size='sm'>
          General
        </Text>

        {generalLinksArray.map((link) => (
          <AppShellNavLink
            {...link}
            location={location}
            key={link.path}
            handleMenuClose={handleMenuClose}
          />
        ))}

        <Divider />
        <Text ml={'sm'} fw={'lighter'} size='sm'>
          Data presets
        </Text>
        {presetsLinksArray.map((link) => (
          <AppShellNavLink
            {...link}
            location={location}
            key={link.path}
            handleMenuClose={handleMenuClose}
          />
        ))}
        <Divider />
        <Text ml={'sm'} fw={'lighter'} size='sm'>
          Account & Settings
        </Text>
        {accountSettingsLinksArray.map((link) => (
          <AppShellNavLink
            {...link}
            location={location}
            key={link.path}
            handleMenuClose={handleMenuClose}
          />
        ))}

        <Divider />

        <Text ml={'sm'} fw={'lighter'} size='sm'>
          Info
        </Text>
        {infoLinksArray.map((link) => (
          <AppShellNavLink
            {...link}
            location={location}
            key={link.path}
            handleMenuClose={handleMenuClose}
          />
        ))}
      </Stack>
    </>
  );
};

export default AppShellNavLinks;
