import { useMemo } from 'react';

import { Metavault as Mv } from '@frontend/mfury-metavault';
import { metavaults } from '@frontend/shared-constants';
import { useMatch } from '@tanstack/react-location';
import { propEq } from 'ramda';
import { useMount } from 'react-use';
import { useNetwork } from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { useTransitionBackgroundColor } from '../components/Backgrounds';
import { UnsupportedMvPage } from '../components/Errors';

import type { MfuryRoute } from '../routes';

export const Metavault = () => {
  const updateBkgColor = useTransitionBackgroundColor();
  const { chain } = useNetwork();
  const {
    params: { mvid },
  } = useMatch<MfuryRoute>();
  const metavault = useMemo(
    () => metavaults[chain?.id ?? mainnet.id].find(propEq(mvid, 'id')),
    [chain?.id, mvid],
  );

  useMount(() => {
    if (metavault) {
      updateBkgColor(metavault.primaryColor);
    }
  });

  if (!metavault) return <UnsupportedMvPage />;

  return <Mv />;
};
