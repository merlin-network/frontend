import { MotionStack } from '@frontend/shared-ui';
import { Button, Stack, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

import { useSetStep } from '../hooks';

import type { MotionStackProps } from '@frontend/shared-ui';

export const WithdrawStep = (props: MotionStackProps) => {
  const intl = useIntl();
  const setStep = useSetStep();

  return (
    <MotionStack {...props}>
      <Typography variant="h4" mb={4}>
        {intl.formatMessage({
          defaultMessage:
            'Withdraw your mFury Treasury Yield tokens to stables',
          id: 'KAjgSS',
        })}
      </Typography>
      <Typography mb={2}>
        {intl.formatMessage({
          defaultMessage:
            'Your mFury Treasury Yield tokens are earning yield and you can hold on to them.<br></br>Optionally you can go to dHEDGE app to withdraw your MTy tokens to stablecoins.',
          id: 'oa9/wC',
        })}
      </Typography>
      <Typography>
        {intl.formatMessage({
          defaultMessage:
            'If you burned FURY from Ethereum, please wait while the bridge issues your MTy tokens.',
          id: '0ZWv7O',
        })}
      </Typography>
      <Stack direction="row" my={4} justifyContent="center" alignItems="center">
        <Button
          href="https://app.dhedge.org/vault/0x0f6eae52ae1f94bc759ed72b201a2fdb14891485"
          target="_blank"
          rel="noopener noreferrer"
        >
          {intl.formatMessage({
            defaultMessage: 'Withdraw to stablecoins',
            id: '4K2D1N',
          })}
        </Button>
      </Stack>
      <Stack
        width={1}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          color="secondary"
          onClick={() => {
            setStep(0);
          }}
        >
          {intl.formatMessage({ defaultMessage: 'Back', id: 'cyR7Kh' })}
        </Button>
      </Stack>
    </MotionStack>
  );
};
