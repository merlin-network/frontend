import { Ethereum, Polygon } from '@frontend/shared-icons';
import { WarningAmberRounded } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Plugs } from 'phosphor-react';
import { chainId, useNetwork } from 'wagmi';

import type { SvgIconProps } from '@mui/material';

export type CurrentNetworkIconProps = SvgIconProps & {
  activeChain?: { id: number; unsupported?: boolean };
};

export const CurrentNetworkIcon = (props: SvgIconProps) => {
  const { chain } = useNetwork();

  return chain?.id ? (
    chain?.unsupported ? (
      <WarningAmberRounded color="warning" {...props} />
    ) : ([chainId.polygon, chainId.polygonMumbai] as number[]).includes(
        chain?.id,
      ) ? (
      <Polygon {...props} sx={{ width: 24, height: 24, ...props?.sx }} />
    ) : (
      <Ethereum {...props} sx={{ width: 24, height: 24, ...props?.sx }} />
    )
  ) : (
    <Box sx={{ width: 24, height: 24, ...props?.sx }}>
      <Plugs size={24} />
    </Box>
  );
};