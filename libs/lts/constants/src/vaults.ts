import { FeederPoolVaultABI } from '@frontend/shared-constants';
import { Vault } from '@frontend/shared-icons';
import { mainnet, polygon } from 'wagmi/chains';

import type { Contract } from './types';

export const vaults: Contract[] = [
  {
    name: 'mUSD Save Vault',
    address: '0x78befca7de27d07dc6e71da295cc2946681a6c7b',
    symbol: 'v-imUSD',
    decimals: 18,
    type: 'vault',
    abi: FeederPoolVaultABI,
    chainId: mainnet.id,
    icon: Vault,
  },
  {
    name: 'mBTC Save Vault',
    address: '0xf38522f63f40f9dd81abafd2b8efc2ec958a3016',
    type: 'vault',
    symbol: 'v-imBTC',
    decimals: 18,
    abi: FeederPoolVaultABI,
    chainId: mainnet.id,
    icon: Vault,
  },
  {
    name: 'mBTC/HBTC Vault',
    address: '0xF65D53AA6e2E4A5f4F026e73cb3e22C22D75E35C',
    type: 'vault',
    decimals: 18,
    symbol: 'v-fPmBTC/HBTC',
    abi: FeederPoolVaultABI,
    chainId: mainnet.id,
    icon: Vault,
  },
  {
    name: 'mBTC/TBTC Vault',
    address: '0x760ea8CfDcC4e78d8b9cA3088ECD460246DC0731',
    type: 'vault',
    decimals: 18,
    symbol: 'v-fPmBTC/TBTC',
    abi: FeederPoolVaultABI,
    chainId: mainnet.id,
    icon: Vault,
  },
  {
    name: 'mBTC/tBTCv2 Vault',
    address: '0x97E2a2F97A2E9a4cFB462a49Ab7c8D205aBB9ed9',
    type: 'vault',
    decimals: 18,
    symbol: 'v-fPmBTC/tBTCv2',
    abi: FeederPoolVaultABI,
    chainId: mainnet.id,
    icon: Vault,
  },
  {
    name: 'mUSD/BUSD Vault',
    address: '0xd124b55f70d374f58455c8aedf308e52cf2a6207',
    type: 'vault',
    decimals: 18,
    symbol: 'v-fPmUSD/BUSD',
    abi: FeederPoolVaultABI,
    chainId: mainnet.id,
    icon: Vault,
  },
  {
    name: 'mUSD/GUSD Vault',
    address: '0xadeedd3e5768f7882572ad91065f93ba88343c99',
    type: 'vault',
    decimals: 18,
    symbol: 'v-fPmUSD/GUSD',
    abi: FeederPoolVaultABI,
    chainId: mainnet.id,
    icon: Vault,
  },
  {
    name: 'mUSD/alUSD Vault',
    address: '0x0997dddc038c8a958a3a3d00425c16f8eca87deb',
    type: 'vault',
    decimals: 18,
    symbol: 'v-fPmUSD/alUSD',
    abi: FeederPoolVaultABI,
    chainId: mainnet.id,
    icon: Vault,
  },
  {
    name: 'mUSD/FEI Vault',
    address: '0xd24099eb4cd604198071958655e4f2d263a5539b',
    type: 'vault',
    decimals: 18,
    symbol: 'v-fPmUSD/FEI',
    abi: FeederPoolVaultABI,
    chainId: mainnet.id,
    icon: Vault,
  },
  {
    name: 'mUSD/RAI Vault',
    address: '0xf93e0dde0f7c48108abbd880db7697a86169f13b',
    type: 'vault',
    decimals: 18,
    symbol: 'v-fPmUSD/RAI',
    abi: FeederPoolVaultABI,
    chainId: mainnet.id,
    icon: Vault,
  },
  {
    name: 'imUSD Vault',
    address: '0x32aBa856Dc5fFd5A56Bcd182b13380e5C855aa29',
    type: 'vault',
    decimals: 18,
    symbol: 'v-imUSD',
    abi: FeederPoolVaultABI,
    chainId: polygon.id,
    icon: Vault,
  },
];
