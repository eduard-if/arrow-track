import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';

const ThemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Tooltip
      
      openDelay={1000}
      withArrow
      arrowSize={10}
      label={dark ? 'Turn on light theme' : 'Turn on dark theme'}
    >
      <ActionIcon
        variant='transparent'
        color={dark ? 'gray' : 'dark'}
        size={'xl'}
        radius={'1000'}
        onClick={() => toggleColorScheme()}
      >
        {dark ? (
          <IconSunFilled stroke={1} size={25} />
        ) : (
          <IconMoonFilled stroke={1} size={25} />
        )}
      </ActionIcon>
    </Tooltip>
  );
};

export default ThemeButton;
