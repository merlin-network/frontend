import { Home } from './views/Home';

import type { MvRoute } from '@frontend/mfury-metavault';
import type { Route } from '@tanstack/react-location';

export type MfuryRoute = MvRoute;

export const routes: Route<MfuryRoute>[] = [
  {
    id: 'metavault',
    path: '/:mvid',
    element: () => import('./views/Metavault').then((mod) => <mod.Metavault />),
  },
  {
    id: 'explore',
    path: '/',
    element: <Home />,
  },
];
