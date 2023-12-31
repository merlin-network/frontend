import { forwardRef, useCallback, useEffect, useState } from 'react';

import { BigDecimal } from '@frontend/shared-utils';
import { Box, InputBase, Skeleton } from '@mui/material';
import { constants } from 'ethers';

import type { BoxProps, InputBaseProps } from '@mui/material';
import type { ChangeEvent } from 'react';

export type BigDecimalInputProps = {
  value: BigDecimal | null;
  decimals: number;
  onChange?: (value: BigDecimal) => void;
  min?: BigDecimal;
  max?: BigDecimal;
  isLoading?: boolean;
  InputProps?: Omit<InputBaseProps, 'value' | 'onChange'>;
} & Omit<BoxProps, 'onChange' | 'error'>;

const inRange = (val: string, min: BigDecimal, max: BigDecimal) => {
  const value = BigDecimal.maybeParse(val);

  return (
    !value || (value?.simple >= min.simple && value?.simple <= max?.simple)
  );
};

export const BigDecimalInput = forwardRef<
  HTMLInputElement,
  BigDecimalInputProps
>(
  (
    {
      value,
      decimals,
      onChange,
      min = BigDecimal.ZERO,
      max = new BigDecimal(constants.MaxUint256),
      isLoading,
      InputProps,
      ...rest
    },
    ref,
  ) => {
    const [val, setVal] = useState(value?.simpleRounded.toString() ?? '');

    useEffect(() => {
      if (value) {
        setVal(value?.simpleRounded.toString());
      } else {
        setVal('');
      }
    }, [value]);

    const handleChange = useCallback(
      (evt: ChangeEvent<HTMLInputElement>) => {
        if (evt.target.validity.valid && inRange(evt.target.value, min, max)) {
          setVal(evt.target.value);
          const regex = new RegExp(`.*\\.0{0,2}$`);
          const oldval = BigDecimal.maybeParse(val, decimals);
          const newval = BigDecimal.maybeParse(evt.target.value, decimals);
          if (
            onChange &&
            (!regex.test(evt.target.value) || oldval?.simple !== newval?.simple)
          ) {
            onChange(newval);
          }
        }
      },
      [decimals, max, min, onChange, val],
    );

    return (
      <Box {...rest}>
        {isLoading ? (
          <Skeleton width={120} height={48} sx={{ pt: '4px', pb: '5px' }} />
        ) : (
          <InputBase
            {...InputProps}
            inputRef={ref}
            value={val}
            onChange={handleChange}
            componentsProps={{
              input: {
                pattern: `[0-9]*(.[0-9]{0,2})`,
                inputMode: 'numeric',
              },
            }}
            sx={{ typography: 'value1', ...InputProps?.sx }}
          />
        )}
      </Box>
    );
  },
);
BigDecimalInput.displayName = 'BigDecimalInput';
