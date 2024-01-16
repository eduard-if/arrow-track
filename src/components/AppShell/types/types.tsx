import {IsDark} from '../../ThemeButton/types';

export type AppShellHeaderProps = IsDark &
  MobileOpened &
  DesktopOpened &
  ToggleMobile &
  ToggleDesktop &
  HandleMenuClose;

export type AppShellNavBarProps = HandleMenuClose & IsDark;

export type AppShellNavLinksProps = HandleMenuClose;

type MobileOpened = {
  mobileOpened: boolean;
};

type DesktopOpened = {
  desktopOpened: boolean;
};

type ToggleMobile = {
  toggleMobile: () => void;
};

type ToggleDesktop = {
  toggleDesktop: () => void;
};

type HandleMenuClose = {
  handleMenuClose: () => void;
};
