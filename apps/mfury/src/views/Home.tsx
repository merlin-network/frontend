import { Explore } from '@frontend/mfury-explore';
import { useMount } from 'react-use';

import { useTransitionBackgroundColor } from '../components/Backgrounds';

export const Home = () => {
  const updateBkgColor = useTransitionBackgroundColor();

  useMount(() => {
    updateBkgColor(null);
  });

  return <Explore />;
};
