import { SvgIcon } from '@mui/material';

import { ReactComponent as MFurySvg } from './mfury.svg';
import { ReactComponent as MFuryShortSvg } from './mfury-short.svg';
import { ReactComponent as WarningSvg } from './warning.svg';

import type { SvgIconProps } from '@mui/material';

export const MFury = (props: SvgIconProps) => (
  <SvgIcon {...props} component={MFurySvg} viewBox="0 0 1108 192" />
);
export const MFuryShort = (props: SvgIconProps) => (
  <SvgIcon {...props} component={MFuryShortSvg} viewBox="0 0 700 700" />
);
export const Warning = (props: SvgIconProps) => (
  <SvgIcon {...props} component={WarningSvg} viewBox="0 0 48 48" />
);
