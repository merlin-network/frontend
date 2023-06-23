import { Stack, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

import type { StackProps } from '@mui/material';

export const Hero = (props: StackProps) => {
  const intl = useIntl();

  return (
    <Stack justifyContent="center" alignItems="center" {...props}>
      <Typography variant="h1" py={4}>
        {intl.formatMessage({
          defaultMessage: 'mFury Withdraw',
          id: 'Et6LvI',
        })}
      </Typography>
      <Typography textAlign="center">
        {intl.formatMessage({
          defaultMessage: `This app simplifies the process of exiting all mFury products and positions.<br></br>By connecting your wallet, you can easily access your remaining balances and initiate the withdrawal process.`,
          id: '/4MXW3',
        })}
      </Typography>
    </Stack>
  );
};
