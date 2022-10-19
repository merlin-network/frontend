import { useMemo } from 'react';

import { useDataSource } from '@frontend/shared-data-access';
import { BigDecimal } from '@frontend/shared-utils';
import { alpha, useTheme } from '@mui/material';
import { intlFormat } from 'date-fns';
import { sort } from 'ramda';
import { useIntl } from 'react-intl';

import { useMetavaultQuery } from '../../queries.generated';
import { useMetavault } from '../../state';

import type { ChartData, ChartOptions, ScriptableContext } from 'chart.js';

import type { ChartTimeframe, ChartType } from './types';

export const useChartConfig = () => {
  const intl = useIntl();
  const mv = useMetavault();

  const chartTypes = {
    APY: {
      id: 'APY' as ChartType,
      label: intl.formatMessage({ defaultMessage: 'APY' }),
      getValue: (v) => Number(v.apy),
      getLabel: (v) => (Number(v) * 100).toFixed(2) + '%',
    },
    TVL: {
      id: 'TVL' as ChartType,
      label: intl.formatMessage({ defaultMessage: 'TVL' }),
      getValue: (v) =>
        new BigDecimal(v.totalAssets, mv?.assetToken?.decimals).simple,
      getLabel: (v) => intl.formatNumber(v, { notation: 'compact' }),
    },
  };

  const chartTimeframes = {
    '1W': {
      id: '1W' as ChartTimeframe,
      label: intl.formatMessage({ defaultMessage: '1W' }),
      days: 7,
    },
    '1M': {
      id: '1M' as ChartTimeframe,
      label: intl.formatMessage({ defaultMessage: '1M' }),
      days: 30,
    },
    '1Y': {
      id: '1Y' as ChartTimeframe,
      label: intl.formatMessage({ defaultMessage: '1Y' }),
      days: 365,
    },
  };

  return {
    chartTypes,
    chartTimeframes,
    defaultChartType: 'TVL' as ChartType,
    defaultChartTimeframe: '1M' as ChartTimeframe,
  };
};

const getBackgroundColor =
  (tone: string) => (ctx: ScriptableContext<'line'>) => {
    const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);

    gradient?.addColorStop(0, alpha(tone, 0.4));
    gradient?.addColorStop(0.25, alpha(tone, 0.2));
    gradient?.addColorStop(0.65, alpha(tone, 0));

    return gradient;
  };

export const useChartData = (
  chartTimeframe: ChartTimeframe,
  chartType: ChartType,
) => {
  const {
    metavault: { address },
  } = useMetavault();
  const theme = useTheme();
  const { chartTimeframes, chartTypes } = useChartConfig();
  const dataSource = useDataSource();
  const { data } = useMetavaultQuery(
    dataSource,
    {
      id: address,
      days: chartTimeframes[chartTimeframe].days,
    },
    { enabled: !!address },
  );
  const chartData: { data: ChartData<'line'>; options: ChartOptions<'line'> } =
    useMemo(() => {
      const sortedData = sort(
        (a, b) => Number(a.timestamp) - Number(b.timestamp),
        data?.vault?.DailyVaultStats || [],
      ).map((d) => ({
        label: intlFormat(Number(d.timestamp) * 1000, {
          timeZone: 'UTC',
          day: 'numeric',
          month: 'numeric',
        }).replace('/', '-'),
        value: chartTypes[chartType].getValue(d),
      }));

      return {
        data: {
          labels: sortedData.map((d) => d.label),
          datasets: [
            {
              label: chartTypes[chartType].label,
              data: sortedData.map((d) => d.value),
              borderColor: theme.palette.info.main,
              backgroundColor: getBackgroundColor(theme.palette.info.light),
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          interaction: {
            mode: 'nearest',
            intersect: false,
          },
          datasets: {
            line: {
              tension: 0.2,
              pointRadius: 0,
            },
          },
          scales: {
            y: {
              grid: {
                color: theme.palette.divider,
                drawBorder: false,
              },
              min: 0,
              ticks: {
                callback: chartTypes[chartType].getLabel,
                color: theme.palette.text.secondary,
                count: 5,
                font: {
                  family: theme.typography.value5.fontFamily,
                  size: theme.typography.value5.fontSize,
                  weight: theme.typography.value5.fontWeight,
                } as any,
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: theme.palette.text.secondary,
                maxTicksLimit: 5,
                maxRotation: 0,
                font: {
                  family: theme.typography.value5.fontFamily,
                  size: theme.typography.value5.fontSize,
                  weight: theme.typography.value5.fontWeight,
                } as any,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },
        },
      };
    }, [
      chartType,
      chartTypes,
      data?.vault?.DailyVaultStats,
      theme.palette.divider,
      theme.palette.info.light,
      theme.palette.info.main,
      theme.palette.text.secondary,
      theme.typography.value5.fontFamily,
      theme.typography.value5.fontSize,
      theme.typography.value5.fontWeight,
    ]);

  return chartData;
};