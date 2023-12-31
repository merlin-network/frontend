import { usePushNotification } from '@frontend/shared-providers';
import { AddressLabel, CountUp } from '@frontend/shared-ui';
import { BigDecimal, countFirstDecimal } from '@frontend/shared-utils';
import { alpha, Button, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from '@tanstack/react-location';
import { constants } from 'ethers';
import { propEq } from 'ramda';
import { useIntl } from 'react-intl';
import { mainnet, useNetwork, useSwitchNetwork } from 'wagmi';

import type { Grid2Props, StackProps } from '@mui/material';

import type { WithdrawRoute } from '../../../types';
import type { LTSContract } from '../types';

export type ContractCardProps = {
  contract: LTSContract;
} & Grid2Props;

const rowProps: StackProps = {
  width: 1,
  direction: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const ContractCard = ({ contract, ...rest }: ContractCardProps) => {
  const intl = useIntl();
  const pushNotification = usePushNotification();
  const navigate = useNavigate<WithdrawRoute>();
  const { chains, chain } = useNetwork();
  const contractChain = chains.find(propEq(contract.chainId, 'id')) ?? mainnet;
  const { switchNetwork } = useSwitchNetwork({
    onError: () => {
      pushNotification({
        title: intl.formatMessage(
          {
            defaultMessage:
              'Switch your wallet to {name} to use this contract.',
            id: 'sLLUMv',
          },
          { name: contractChain.name },
        ),
        severity: 'info',
      });
    },
    onSuccess: () => {
      navigate({ search: { address: `"${contract.address}"` } });
    },
  });

  const handleExitClick = async () => {
    if (chain?.id !== contract.chainId) {
      switchNetwork(contract.chainId);
    } else {
      navigate({ search: { address: `"${contract.address}"` } });
    }
  };

  const blockExplorer = contractChain.blockExplorers.default;
  const bal = new BigDecimal(contract.balance, contract.decimals).simple;
  const decimals = Math.max(2, countFirstDecimal(bal));

  return (
    <Grid2 {...rest}>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          p: 2,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: (theme) =>
            alpha(theme.palette.background.highlight, 0.5),
          borderRadius: 1,
        }}
      >
        <Stack {...rowProps}>
          <Stack direction="row" spacing={2} alignItems="center" {...rest}>
            <contract.icon sx={{ width: 44, height: 44 }} />
            <Stack>
              <Typography fontWeight="bold">{contract.name}</Typography>
              <AddressLabel
                address={contract.address}
                small
                link
                maxWidth={120}
                blockExplorerUrl={blockExplorer.url}
              />
            </Stack>
          </Stack>
          <CountUp
            variant="value4"
            duration={1}
            end={new BigDecimal(contract.balance, contract.decimals).simple}
            suffix={contract.symbol}
            maxWidth={250}
            noWrap
            decimals={decimals}
          />
        </Stack>
        {contract.balance.gt(constants.Zero) && (
          <Button onClick={handleExitClick}>
            {chain?.id === contract.chainId
              ? intl.formatMessage({
                  defaultMessage: 'Exit Position',
                  id: 'hPs6J+',
                })
              : intl.formatMessage({
                  defaultMessage: 'Switch Network',
                  id: 'rSsD3z',
                })}
          </Button>
        )}
      </Stack>
    </Grid2>
  );
};
