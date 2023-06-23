import { useCallback, useEffect, useMemo, useState } from 'react';

import { toks } from '@frontend/shared-constants';
import { BigDecimal } from '@frontend/shared-utils';
import produce from 'immer';
import { createContainer } from 'react-tracked';
import { useAccount, useContractReads, useNetwork } from 'wagmi';
import { mainnet, optimism } from 'wagmi/chains';

import {
  furyBuybackPrice,
  l1Comptroller,
  l2Comptroller,
  mtyPool,
  velodromeFuryUsdcLP,
} from '../../constants';

import type { Token } from '@frontend/shared-constants';
import type { BigNumberish } from 'ethers';

type InputProps = {
  contract: Token;
  amount: BigDecimal;
  balance: BigDecimal;
  price: number;
};

type StateProps = {
  step: number;
  isLoading: boolean;
  isError: boolean;
  needsApproval: boolean;
  fury: InputProps;
  mty: InputProps;
  refetch: () => void;
  reset: () => void;
};

export const { Provider, useTrackedState, useUpdate } = createContainer(() => {
  const { chain } = useNetwork();
  const { address: walletAddress, isConnected } = useAccount();

  const [state, setState] = useState<StateProps>({
    step: 0,
    isLoading: true,
    isError: false,
    needsApproval: true,
    fury: {
      amount: BigDecimal.ZERO,
      balance: BigDecimal.ZERO,
      price: 0,
      contract: toks[mainnet.id]['FURY'],
    },
    mty: {
      amount: BigDecimal.ZERO,
      balance: BigDecimal.ZERO,
      price: 0,
      contract: toks[optimism.id]['MTy'],
    },
    refetch: () => null,
    reset: () => null,
  });

  useEffect(() => {
    setState(
      produce((draft) => {
        draft.fury.contract = toks[chain?.id ?? mainnet.id]['FURY'];
      }),
    );
  }, [chain?.id]);

  const allArgs = useMemo(
    () => [
      walletAddress,
      chain?.id === mainnet.id ? l1Comptroller.address : l2Comptroller.address,
    ],
    [chain?.id, walletAddress],
  );

  const { data, isLoading, refetch } = useContractReads({
    contracts: [
      {
        address: state.fury.contract.address,
        abi: state.fury.contract.abi,
        functionName: 'allowance',
        chainId: state.fury.contract.chainId,
        args: allArgs,
      },
      {
        address: state.fury.contract.address,
        abi: state.fury.contract.abi,
        chainId: state.fury.contract.chainId,
        functionName: 'balanceOf',
        args: [walletAddress],
      },
      {
        address: state.mty.contract.address,
        abi: state.mty.contract.abi,
        chainId: state.mty.contract.chainId,
        functionName: 'balanceOf',
        args: [walletAddress],
      },
      {
        address: mtyPool.address,
        abi: mtyPool.abi,
        chainId: mtyPool.chainId,
        functionName: 'tokenPrice',
      },
      {
        address: velodromeFuryUsdcLP.address,
        abi: velodromeFuryUsdcLP.abi,
        chainId: velodromeFuryUsdcLP.chainId,
        functionName: 'getAmountOut',
        args: [
          BigDecimal.ONE.scale(toks[optimism.id]['USDC'].decimals).exact,
          toks[optimism.id]['USDC'].address,
        ],
      },
    ],
    watch: true,
  });

  useEffect(() => {
    if (data) {
      setState(
        produce((draft) => {
          draft.needsApproval = state.fury.amount.exact.gt(
            new BigDecimal(
              data[0] as unknown as BigNumberish,
              state.fury.contract.decimals,
            ).exact,
          );
          draft.fury.balance = new BigDecimal(
            data[1] as unknown as BigNumberish,
            state.fury.contract.decimals,
          );
          draft.mty.balance = new BigDecimal(
            data[2] as unknown as BigNumberish,
            state.mty.contract.decimals,
          );
          draft.mty.price = new BigDecimal(
            data[3] as unknown as BigNumberish,
            draft.mty.contract.decimals,
          ).simple;
          const price = new BigDecimal(
            data[4] as unknown as BigNumberish,
            draft.fury.contract.decimals,
          ).simple;
          draft.fury.price = price === 0 ? 0 : 1 / price;
        }),
      );
    }
  }, [
    data,
    refetch,
    state.fury.amount.exact,
    state.fury.contract.decimals,
    state.mty.contract.decimals,
  ]);

  const reset = useCallback(() => {
    setState(
      produce((draft) => {
        draft.fury.amount = BigDecimal.ZERO;
        draft.fury.amount = BigDecimal.ZERO;
        draft.fury.balance = BigDecimal.ZERO;
        draft.mty.balance = BigDecimal.ZERO;
        draft.mty.balance = BigDecimal.ZERO;
        draft.needsApproval = true;
        draft.isError = false;
      }),
    );
    refetch();
  }, [refetch]);

  useEffect(() => {
    setState(
      produce((draft) => {
        draft.mty.amount = BigDecimal.fromSimple(
          (draft.fury.amount.simple * furyBuybackPrice) /
            (draft.mty.price === 0 ? 1 : draft.mty.price),
        );
      }),
    );
  }, [state.fury.amount.exact]);

  useEffect(() => {
    setState(
      produce((draft) => {
        draft.isLoading = isLoading;
        draft.refetch = refetch;
        draft.reset = reset;
      }),
    );
  }, [isLoading, refetch, reset]);

  useEffect(() => {
    setState(
      produce((draft) => {
        draft.isError = state.fury.amount.exact.gt(state.fury.balance.exact);
      }),
    );
  }, [state.fury.amount.exact, state.fury.balance.exact]);

  useEffect(() => {
    if (!isConnected) {
      reset();
    }
  }, [isConnected, reset]);

  return [state, setState];
});
