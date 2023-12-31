import { useSettings } from '@frontend/lts-settings';
import { ChainIcon } from '@frontend/shared-ui';
import { Button, Divider, Stack } from '@mui/material';
import { constants } from 'ethers';
import { filter, groupBy, pipe, prop } from 'ramda';
import { useEffectOnce } from 'react-use';
import { useAccount } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';

import { useSetChainId } from '../hooks';
import { useTrackedState } from '../state';

import type { StackProps } from '@mui/material';

import type { LTSContract } from '../types';

export const NetworkSwitch = (props: StackProps) => {
  const { isConnected } = useAccount();
  const { showEmpty } = useSettings();
  const setChainId = useSetChainId();
  const { contracts, chainId } = useTrackedState();

  const grouped = pipe(
    filter<LTSContract>((c) => showEmpty || c.balance.gt(constants.Zero)),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    groupBy<LTSContract, number>(prop('chainId')),
  )(contracts);

  useEffectOnce(() => {
    const newChainId =
      isConnected && Object.keys(grouped)?.length === 1
        ? Number(Object.keys(grouped)[0])
        : chainId;
    setChainId(newChainId);
  });

  const handleClick = (newChainId: number) => () => {
    setChainId(newChainId);
  };

  return (
    <Stack
      direction="row"
      border={(theme) => `1px solid ${theme.palette.divider}`}
      borderRadius={1}
      divider={<Divider orientation="vertical" />}
      {...props}
    >
      {[mainnet, polygon].map((c, i) => (
        <Button
          variant="text"
          key={c.id}
          onClick={handleClick(c.id)}
          sx={[
            {
              width: 56,
              height: 56,

              svg: {
                width: 24,
                height: 24,
              },
            },
            chainId === c.id && {
              backgroundColor: (theme) => theme.palette.action.selected,
            },
            i === 0 && {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            i === 1 && {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          ]}
        >
          <ChainIcon chainId={c.id} />
        </Button>
      ))}
    </Stack>
  );
};
