import {
  IconBarbell,
  IconDashboard,
  IconHelpCircle,
  IconInfoCircle,
  IconList,
  IconSettings,
  IconTags,
  IconTreadmill,
  IconUser,
} from '@tabler/icons-react';

export const generalLinksArray = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    leftSection: <IconDashboard size={25} stroke={1.5} />,
  },
  {
    label: 'All Workouts',
    path: '/all-workouts',
    leftSection: <IconList size={25} stroke={1.5} />,
  },
];

export const presetsLinksArray = [
  {
    label: 'Activity Presets',
    path: '/activity-presets',
    leftSection: <IconTreadmill size={25} stroke={1.5} />,
  },
  {
    label: 'Workout Tags',
    path: '/workout-tags',
    leftSection: <IconTags size={25} stroke={1.5} />,
  },
  {
    label: 'Equipment',
    path: '/equipment',
    leftSection: <IconBarbell size={25} stroke={1.5} />,
  },
];

export const accountSettingsLinksArray = [
  {
    label: 'Settings',
    path: '/settings',
    leftSection: <IconSettings size={25} stroke={1.5} />,
  },
  {
    label: 'Account',
    path: '/account',
    leftSection: <IconUser size={25} stroke={1.5} />,
  },
];

export const infoLinksArray = [
  {
    label: 'Help',
    path: '/help',
    leftSection: <IconHelpCircle size={25} stroke={1.5} />,
  },
  {
    label: 'About',
    path: '/about',
    leftSection: <IconInfoCircle size={25} stroke={1.5} />,
  },
];
