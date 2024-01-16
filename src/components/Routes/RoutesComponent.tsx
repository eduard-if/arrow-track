import React from 'react';

// dynamically importing lazy loaded page components
const AllWorkoutsPage = React.lazy(
  () => import('../../pages/AllWorkoutsPage/AllWorkoutsPage')
);
const EquipmentPage = React.lazy(
  () => import('../../pages/EquipmentPage/EquipmentPage')
);
const ActivityPresetsPage = React.lazy(
  () => import('../../pages/ActivityPresetsPage/ActivityPresetsPage')
);
const DashboardPage = React.lazy(
  () => import('../../pages/DashboardPage/DashboardPage')
);
const AboutPage = React.lazy(() => import('../../pages/AboutPage/AboutPage'));
const TrackWorkoutPage = React.lazy(
  () => import('../../pages/TrackWorkoutPage/TrackWorkoutPage')
);
const SettingsPage = React.lazy(
  () => import('../../pages/SettingsPage/SettingsPage')
);

const AccountPage = React.lazy(
  () => import('../../pages/AccountPage/AccountPage')
);
const HelpPage = React.lazy(() => import('../../pages/HelpPage/HelpPage'));

const PageNotFound = React.lazy(
  () => import('../../pages/PageNotFound/PageNotFound')
);
// dynamically importing lazy loaded page components

import ReactSuspense from './ReactSuspense';
import PageLoader from '../../pages/PageLoader';
import {Route, Routes} from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/LandingPage';
import WorkoutTagsPage from '../../pages/WorkoutTagsPage/WorkoutTagsPage';


const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <React.Suspense fallback={<PageLoader />}>
            <LandingPage />
          </React.Suspense>
        }
      />
      <Route
        path='/dashboard'
        element={
          <ReactSuspense>
            <DashboardPage />
          </ReactSuspense>
        }
      />
      <Route
        path='/track-workout'
        element={
          <ReactSuspense>
            <TrackWorkoutPage />
          </ReactSuspense>
        }
      />

      <Route
        path='/all-workouts'
        element={
          <ReactSuspense>
            <AllWorkoutsPage />
          </ReactSuspense>
        }
      />

      <Route
        path='/equipment'
        element={
          <ReactSuspense>
            <EquipmentPage />
          </ReactSuspense>
        }
      />
      <Route
        path='/activity-presets'
        element={
          <ReactSuspense>
            <ActivityPresetsPage />
          </ReactSuspense>
        }
      />

      <Route
        path='/workout-tags'
        element={
          <ReactSuspense>
            <WorkoutTagsPage />
          </ReactSuspense>
        }
      />

      <Route
        path='/settings'
        element={
          <ReactSuspense>
            <SettingsPage />
          </ReactSuspense>
        }
      />
      <Route
        path='/account'
        element={
          <ReactSuspense>
            <AccountPage />
          </ReactSuspense>
        }
      />

      <Route
        path='/about'
        element={
          <React.Suspense fallback={<PageLoader />}>
            <AboutPage />
          </React.Suspense>
        }
      />
      <Route
        path='/help'
        element={
          <React.Suspense fallback={<PageLoader />}>
            <HelpPage />
          </React.Suspense>
        }
      />
      <Route
        path='*'
        element={
          <React.Suspense fallback={<PageLoader />}>
            <PageNotFound />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default RoutesComponent;
