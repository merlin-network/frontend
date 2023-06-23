import { TokenInput } from '@frontend/shared-ui';
import { Box, Button, Skeleton, Stack, Typography } from '@mui/material';
import { ArrowFatDown } from 'phosphor-react';
import { useIntl } from 'react-intl';
import { useAccount } from 'wagmi';

import { useSetFURYAmount } from '../../../hooks';
import { useTrackedState } from '../../../state';

import type { BoxProps } from '@mui/material';

export const TokenInputs = (props: BoxProps) => {
  const intl = useIntl();
  const { isConnected } = useAccount();
  const { fury, mty, isLoading, isError } = useTrackedState();
  const setFURYAmount = useSetFURYAmount();

  const handleSetMax = () => {
    setFURYAmount(fury.balance);
  };

  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        ...props?.sx,
      }}
    >
      <TokenInput
        amount={fury.amount}
        max={fury.balance}
        error={isError}
        onChange={setFURYAmount}
        token={fury.contract}
        hideBottomRow
        disabled={!isConnected || fury.balance.exact.isZero()}
        components={{
          container: {
            width: 1,
            padding: (theme) => theme.spacing(0.5, 2, 0.5, 2),
          },
        }}
      />
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          width: 1,
          padding: (theme) => theme.spacing(0.5, 2, 2, 2),
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="label2" color="text.secondary">
          {isLoading ? (
            <Skeleton width={60} />
          ) : (
            Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
              maximumSignificantDigits: 2,
            }).format(fury.price)
          )}
        </Typography>
        {isConnected &&
          (isLoading ? (
            <Skeleton width={100} height={18} />
          ) : (
            <Button
              variant="text"
              size="small"
              onClick={handleSetMax}
              sx={{
                color: 'text.secondary',
                typography: 'label2',
                p: 0,
                minHeight: 18,
              }}
            >
              {intl.formatMessage(
                {
                  defaultMessage: 'Balance: {balance}',
                  id: 'vclhrb',
                },
                {
                  balance: fury.balance.simpleRounded,
                },
              )}
            </Button>
          ))}
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        p={1.5}
        border={(theme) => `1px solid ${theme.palette.divider}`}
        borderRadius={1}
        bgcolor="divider"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          svg: { color: 'text.primary' },
        }}
      >
        <ArrowFatDown size={20} />
      </Stack>
      <TokenInput
        amount={mty.amount}
        token={mty.contract}
        hideBottomRow
        components={{
          container: {
            width: 1,
            padding: (theme) => theme.spacing(0.5, 2, 0.5, 2),
          },
          input: {
            InputProps: {
              tabIndex: -1,
              disabled: true,
            },
          },
        }}
      />
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          width: 1,
          padding: (theme) => theme.spacing(0.5, 2, 2, 2),
        }}
      >
        <Typography variant="label2" color="text.secondary">
          {isLoading ? (
            <Skeleton width={60} />
          ) : (
            Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
            }).format(mty.price)
          )}
        </Typography>
        {isConnected && (
          <Typography variant="label2" color="text.secondary">
            {isLoading ? (
              <Skeleton width={100} />
            ) : (
              intl.formatMessage(
                {
                  defaultMessage: 'Balance: {balance}',
                  id: 'vclhrb',
                },
                {
                  balance: mty.balance.simpleRounded,
                },
              )
            )}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};
