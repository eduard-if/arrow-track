import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import '@mantine/notifications/styles.css';
import {Notifications} from '@mantine/notifications';
import '@mantine/dates/styles.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='dark'>
      <Notifications position='bottom-right' />
      <App />
    </MantineProvider>
  </React.StrictMode>
);
