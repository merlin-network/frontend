import { Warning } from '@frontend/shared-icons';
import { OpenAccountModalButton } from '@frontend/shared-providers';
import { MotionStack } from '@frontend/shared-ui';
import { Button, Link, Stack, Typography } from '@mui/material';
import { constants } from 'ethers';
import { useIntl } from 'react-intl';
import { useAccount } from 'wagmi';

import { furyBuybackPrice } from '../../../../constants';
import { useSetStep } from '../../hooks';
import { useTrackedState } from '../../state';
import { ApprovalButton } from './components/ApprovalButton';
import { SubmitButton } from './components/SubmitButton';
import { TokenInputs } from './components/TokenInputs';

import type { MotionStackProps } from '@frontend/shared-ui';
export const InputStep = (props: MotionStackProps) => {
  const intl = useIntl();
  const { isConnected } = useAccount();
  const { fury, mty, needsApproval } = useTrackedState();
  const setStep = useSetStep();

  return (
    <MotionStack alignItems="flex-start" {...props}>
      <Typography variant="h4" mb={4}>
        {intl.formatMessage({
          defaultMessage:
            'Burn your FURY tokens to receive mFury Treasury Yield tokens',
          id: 'EkKL8A',
        })}
      </Typography>
      <Typography>
        {intl.formatMessage(
          {
            defaultMessage:
              'Burn FURY to receive {yield} vault tokens on Optimism at a value of <b>{price}</b> per FURY.<br></br>Here is the {roadmap} to help you make a better informed decision.',
            id: 'UMUlwc',
          },
          {
            yield: (
              <Link
                href="https://app.dhedge.org/vault/0x0f6eae52ae1f94bc759ed72b201a2fdb14891485"
                target="_blank"
                rel="noopener noreferrer"
              >
                {intl.formatMessage({
                  defaultMessage: 'mFury Treasury Yield',
                  id: 'BKPFUy',
                })}
              </Link>
            ),
            price: Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
              maximumSignificantDigits: 4,
            }).format(furyBuybackPrice),
            roadmap: (
              <Link
                href="https://medium.com/mfury/some-article"
                target="_blank"
                rel="noopener noreferrer"
              >
                {intl.formatMessage({
                  defaultMessage: 'mFury roadmap',
                  id: 'nSzbu7',
                })}
              </Link>
            ),
          },
        )}
      </Typography>
      <Stack width={1} justifyContent="center" alignItems="center" my={8}>
        <Stack width={3 / 4}>
          <TokenInputs mb={4} />
          {isConnected ? (
            <>
              {fury.balance.exact.gt(constants.Zero) &&
                fury.price > furyBuybackPrice && (
                  <Stack spacing={2} alignItems="center" mb={2}>
                    <Typography
                      sx={{
                        color: 'warning.main',
                        display: 'flex',
                        svg: { mr: 1 },
                      }}
                      mb={2}
                    >
                      <Warning />
                      {intl.formatMessage({
                        defaultMessage: 'Price is more favorable on Velodrome',
                        id: 'K1NWSN',
                      })}
                    </Typography>
                    <Button
                      href="https://app.velodrome.finance/liquidity/manage?address=0x66a8bd7ccfd52bfb5bc838d149fba78e6920303f"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="large"
                      fullWidth
                    >
                      {intl.formatMessage({
                        defaultMessage: 'Swap on Velodrome',
                        id: 'CuTvKy',
                      })}
                    </Button>
                  </Stack>
                )}
              {needsApproval ? <ApprovalButton /> : <SubmitButton />}
            </>
          ) : (
            <OpenAccountModalButton fullWidth size="large" />
          )}
        </Stack>
      </Stack>
      <Stack
        width={1}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          onClick={() => {
            setStep(1);
          }}
          disabled={mty.balance.exact.eq(constants.Zero)}
        >
          {intl.formatMessage({ defaultMessage: 'Next Step', id: '8cv9D4' })}
        </Button>
      </Stack>
    </MotionStack>
  );
};
