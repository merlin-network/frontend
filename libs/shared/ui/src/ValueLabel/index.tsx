import { Stack, Typography } from '@mui/material';

import { InfoTooltip } from '../InfoTooltip';

import type { StackProps, TypographyProps } from '@mui/material';
import type { ReactNode } from 'react';

export type ValueLabelProps = {
  label: string;
  value?: string;
  subvalue?: string;
  hint?: string;
  subhint?: string;
  children?: ReactNode;
  disableResponsive?: boolean;
  components?: {
    container?: StackProps;
    label?: TypographyProps;
    value?: TypographyProps;
    valueContainer?: StackProps;
    subvalue?: TypographyProps;
  };
};

export const ValueLabel = ({
  label,
  value,
  children,
  subvalue,
  hint,
  subhint,
  components,
  disableResponsive,
}: ValueLabelProps) => {
  return (
    <Stack
      direction={disableResponsive ? 'column' : { xs: 'row', md: 'column' }}
      alignItems={
        disableResponsive ? 'flex-start' : { xs: 'center', md: 'flex-start' }
      }
      justifyContent={
        disableResponsive
          ? 'flex-start'
          : { xs: 'space-between', md: 'flex-start' }
      }
      {...components?.container}
    >
      <Typography
        variant="label2"
        noWrap
        position="relative"
        mb={{ xs: 0.5, md: 2 }}
        color="text.secondary"
        {...(hint && { pr: 1.75 })}
        {...components?.label}
      >
        {label}
        {hint && (
          <InfoTooltip
            label={hint}
            variant="exclamation"
            position="absolute"
            top={0}
            right={0}
          />
        )}
      </Typography>

      <Stack
        my={0.5}
        height={24}
        direction="row"
        alignItems="center"
        {...components?.valueContainer}
      >
        {value && (
          <Typography variant="value2" noWrap {...components?.value}>
            {value}
          </Typography>
        )}
        {children}
      </Stack>
      {subvalue && (
        <Typography
          variant="value5"
          noWrap
          position="relative"
          {...(subhint && { pr: 1.75 })}
          {...components?.subvalue}
        >
          {subvalue}
          {subhint && (
            <InfoTooltip
              label={subhint}
              variant="exclamation"
              position="absolute"
              top={0}
              right={0}
            />
          )}
        </Typography>
      )}
    </Stack>
  );
};
