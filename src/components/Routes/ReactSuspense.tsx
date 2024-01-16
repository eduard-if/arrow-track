import React from 'react';
import PageLoader from '../../pages/PageLoader';

const ReactSuspense = ({children}: {children: React.ReactNode}) => {
  return <React.Suspense fallback={<PageLoader />}>{children}</React.Suspense>;
};

export default ReactSuspense;
