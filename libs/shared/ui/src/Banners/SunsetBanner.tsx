import { Warning } from '@frontend/shared-icons';
import { Button, Stack, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

import type { StackProps } from '@mui/material';

export const SunsetBanner = (props: StackProps) => {
  const intl = useIntl();

  return (
    <Stack
      direction="column"
      alignItems="center"
      p={4}
      border={(theme) => `1px solid ${theme.palette.divider}`}
      borderRadius={1}
      spacing={2}
      {...props}
    >
      <Warning sx={{ width: 28, height: 28 }} />
      <Typography textAlign="center">
        {intl.formatMessage({
          defaultMessage: `mStable has been aquired by dHedge. Following the outlined aquisition update, certain mStable products will be sunset.`,
          id: 'Yi52g+',
        })}
      </Typography>
      <Typography textAlign="center">
        {intl.formatMessage({
          defaultMessage: `The contracts will always remain live and allow for withdrawals. However, it is recommended to withdraw remaining assets from the contracts since value accrual has been disabled.`,
          id: 'bkwgp4',
        })}
      </Typography>
      <Button
        href="https://forum.mstable.org/t/dhedge-acquisition-update/1024"
        target="_blank"
        rel="noopener noreferrer"
      >
        {intl.formatMessage({
          defaultMessage: 'Read the Announcement',
          id: 'YP4aoM',
        })}
      </Button>
    </Stack>
  );
};