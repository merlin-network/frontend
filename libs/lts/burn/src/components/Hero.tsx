import { Stack, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

import { furyBuybackPrice } from '../constants';

import type { StackProps } from '@mui/material';

export const Hero = (props: StackProps) => {
  const intl = useIntl();

  return (
    <Stack justifyContent="center" alignItems="center" {...props}>
      <Typography variant="h1" py={4}>
        {intl.formatMessage({
          defaultMessage: 'Burn your FURY and receive stablecoins',
          id: 'v4b/gp',
        })}
      </Typography>
      <Typography textAlign="center">
        {intl.formatMessage(
          {
            defaultMessage: `Exchange rate <b>{price} USD</b> per FURY. This is the floor price for the FURY token, backed by the mFury Treasury Yield.<br></br>
          If burning FURY from Ethereum, it may take a few minutes to be issued yield tokens on Optimism.
          `,
            id: 'uXnBLJ',
          },
          {
            price: Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
              maximumSignificantDigits: 4,
            }).format(furyBuybackPrice),
          },
        )}
      </Typography>
    </Stack>
  );
};
