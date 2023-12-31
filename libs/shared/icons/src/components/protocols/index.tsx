import { SvgIcon } from '@mui/material';

import { ReactComponent as AaveSvg } from './aave.svg';
import { ReactComponent as ConvexSvg } from './convex.svg';
import CRVWebp from './crv.webp';
import { ReactComponent as MFurySvg } from './mfury.svg';
import { ReactComponent as UniswapSvg } from './uniswap.svg';

import type { SvgIconProps } from '@mui/material';

export const AaveProtocol = (props: SvgIconProps) => (
  <SvgIcon {...props} component={AaveSvg} viewBox="0 0 800 800" />
);
export const ConvexProtocol = (props: SvgIconProps) => (
  <SvgIcon {...props} component={ConvexSvg} viewBox="0 0 124.2 143.6" />
);
export const CurveProtocol = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 100 100">
    <image href={CRVWebp} height="100" width="100" />
  </SvgIcon>
);
export const MFuryProtocol = (props: SvgIconProps) => (
  <SvgIcon {...props} component={MFurySvg} viewBox="0 0 700 700" />
);
export const UniswapProtocol = (props: SvgIconProps) => (
  <SvgIcon {...props} component={UniswapSvg} viewBox="40.04 0 470.19 541.43" />
);
