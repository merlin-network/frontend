export const FeederPoolABI = [
  {
    inputs: [
      { internalType: 'address', name: '_nexus', type: 'address' },
      { internalType: 'address', name: '_mAsset', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'bAssets',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newIntegrator',
        type: 'address',
      },
    ],
    name: 'BassetsMigrated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'cacheSize',
        type: 'uint256',
      },
    ],
    name: 'CacheSizeChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'swapFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'redemptionFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'govFee',
        type: 'uint256',
      },
    ],
    name: 'FeesChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'minter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'output',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'input',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'inputQuantity',
        type: 'uint256',
      },
    ],
    name: 'Minted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'minter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'output',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'inputs',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'inputQuantities',
        type: 'uint256[]',
      },
    ],
    name: 'MintedMulti',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'redeemer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'mAssetQuantity',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'output',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'outputQuantity',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'scaledFee',
        type: 'uint256',
      },
    ],
    name: 'Redeemed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'redeemer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'mAssetQuantity',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'outputs',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'outputQuantity',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'scaledFee',
        type: 'uint256',
      },
    ],
    name: 'RedeemedMulti',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentA',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'targetA',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rampEndTime',
        type: 'uint256',
      },
    ],
    name: 'StartRampA',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentA',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'time',
        type: 'uint256',
      },
    ],
    name: 'StopRampA',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'swapper',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'input',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'output',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'outputAmount',
        type: 'uint256',
      },
      { indexed: false, internalType: 'uint256', name: 'fee', type: 'uint256' },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'Swapped',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint128', name: 'min', type: 'uint128' },
      { indexed: false, internalType: 'uint128', name: 'max', type: 'uint128' },
    ],
    name: 'WeightLimitsChanged',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collectPendingFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collectPlatformInterest',
    outputs: [
      { internalType: 'uint256', name: 'mintAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'newSupply', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'data',
    outputs: [
      { internalType: 'uint256', name: 'swapFee', type: 'uint256' },
      { internalType: 'uint256', name: 'redemptionFee', type: 'uint256' },
      { internalType: 'uint256', name: 'govFee', type: 'uint256' },
      { internalType: 'uint256', name: 'pendingFees', type: 'uint256' },
      { internalType: 'uint256', name: 'cacheSize', type: 'uint256' },
      {
        components: [
          { internalType: 'uint64', name: 'initialA', type: 'uint64' },
          { internalType: 'uint64', name: 'targetA', type: 'uint64' },
          { internalType: 'uint64', name: 'rampStartTime', type: 'uint64' },
          { internalType: 'uint64', name: 'rampEndTime', type: 'uint64' },
        ],
        internalType: 'struct AmpData',
        name: 'ampData',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'uint128', name: 'min', type: 'uint128' },
          { internalType: 'uint128', name: 'max', type: 'uint128' },
        ],
        internalType: 'struct WeightLimits',
        name: 'weightLimits',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_bAsset', type: 'address' }],
    name: 'getBasset',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'addr', type: 'address' },
          { internalType: 'address', name: 'integrator', type: 'address' },
          { internalType: 'bool', name: 'hasTxFee', type: 'bool' },
          { internalType: 'enum BassetStatus', name: 'status', type: 'uint8' },
        ],
        internalType: 'struct BassetPersonal',
        name: 'personal',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'uint128', name: 'ratio', type: 'uint128' },
          { internalType: 'uint128', name: 'vaultBalance', type: 'uint128' },
        ],
        internalType: 'struct BassetData',
        name: 'vaultData',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getBassets',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'addr', type: 'address' },
          { internalType: 'address', name: 'integrator', type: 'address' },
          { internalType: 'bool', name: 'hasTxFee', type: 'bool' },
          { internalType: 'enum BassetStatus', name: 'status', type: 'uint8' },
        ],
        internalType: 'struct BassetPersonal[]',
        name: '',
        type: 'tuple[]',
      },
      {
        components: [
          { internalType: 'uint128', name: 'ratio', type: 'uint128' },
          { internalType: 'uint128', name: 'vaultBalance', type: 'uint128' },
        ],
        internalType: 'struct BassetData[]',
        name: 'vaultData',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'supply', type: 'uint256' },
          { internalType: 'uint256', name: 'a', type: 'uint256' },
          {
            components: [
              { internalType: 'uint128', name: 'min', type: 'uint128' },
              { internalType: 'uint128', name: 'max', type: 'uint128' },
            ],
            internalType: 'struct WeightLimits',
            name: 'limits',
            type: 'tuple',
          },
        ],
        internalType: 'struct FeederConfig',
        name: 'config',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: '_inputs', type: 'address[]' },
      {
        internalType: 'uint256[]',
        name: '_inputQuantities',
        type: 'uint256[]',
      },
    ],
    name: 'getMintMultiOutput',
    outputs: [{ internalType: 'uint256', name: 'mintOutput', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_input', type: 'address' },
      { internalType: 'uint256', name: '_inputQuantity', type: 'uint256' },
    ],
    name: 'getMintOutput',
    outputs: [{ internalType: 'uint256', name: 'mintOutput', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPrice',
    outputs: [
      { internalType: 'uint256', name: 'price', type: 'uint256' },
      { internalType: 'uint256', name: 'k', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: '_outputs', type: 'address[]' },
      {
        internalType: 'uint256[]',
        name: '_outputQuantities',
        type: 'uint256[]',
      },
    ],
    name: 'getRedeemExactBassetsOutput',
    outputs: [
      { internalType: 'uint256', name: 'fpTokenQuantity', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_output', type: 'address' },
      { internalType: 'uint256', name: '_fpTokenQuantity', type: 'uint256' },
    ],
    name: 'getRedeemOutput',
    outputs: [
      { internalType: 'uint256', name: 'bAssetOutput', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_input', type: 'address' },
      { internalType: 'address', name: '_output', type: 'address' },
      { internalType: 'uint256', name: '_inputQuantity', type: 'uint256' },
    ],
    name: 'getSwapOutput',
    outputs: [{ internalType: 'uint256', name: 'swapOutput', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: '_nameArg', type: 'string' },
      { internalType: 'string', name: '_symbolArg', type: 'string' },
      {
        components: [
          { internalType: 'address', name: 'addr', type: 'address' },
          { internalType: 'address', name: 'integrator', type: 'address' },
          { internalType: 'bool', name: 'hasTxFee', type: 'bool' },
          { internalType: 'enum BassetStatus', name: 'status', type: 'uint8' },
        ],
        internalType: 'struct BassetPersonal',
        name: '_mAsset',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'address', name: 'addr', type: 'address' },
          { internalType: 'address', name: 'integrator', type: 'address' },
          { internalType: 'bool', name: 'hasTxFee', type: 'bool' },
          { internalType: 'enum BassetStatus', name: 'status', type: 'uint8' },
        ],
        internalType: 'struct BassetPersonal',
        name: '_fAsset',
        type: 'tuple',
      },
      { internalType: 'address[]', name: '_mpAssets', type: 'address[]' },
      {
        components: [
          { internalType: 'uint256', name: 'a', type: 'uint256' },
          {
            components: [
              { internalType: 'uint128', name: 'min', type: 'uint128' },
              { internalType: 'uint128', name: 'max', type: 'uint128' },
            ],
            internalType: 'struct WeightLimits',
            name: 'limits',
            type: 'tuple',
          },
        ],
        internalType: 'struct InvariantConfig',
        name: '_config',
        type: 'tuple',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mAsset',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: '_bAssets', type: 'address[]' },
      { internalType: 'address', name: '_newIntegration', type: 'address' },
    ],
    name: 'migrateBassets',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_input', type: 'address' },
      { internalType: 'uint256', name: '_inputQuantity', type: 'uint256' },
      { internalType: 'uint256', name: '_minOutputQuantity', type: 'uint256' },
      { internalType: 'address', name: '_recipient', type: 'address' },
    ],
    name: 'mint',
    outputs: [{ internalType: 'uint256', name: 'mintOutput', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: '_inputs', type: 'address[]' },
      {
        internalType: 'uint256[]',
        name: '_inputQuantities',
        type: 'uint256[]',
      },
      { internalType: 'uint256', name: '_minOutputQuantity', type: 'uint256' },
      { internalType: 'address', name: '_recipient', type: 'address' },
    ],
    name: 'mintMulti',
    outputs: [{ internalType: 'uint256', name: 'mintOutput', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nexus',
    outputs: [{ internalType: 'contract INexus', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_output', type: 'address' },
      { internalType: 'uint256', name: '_fpTokenQuantity', type: 'uint256' },
      { internalType: 'uint256', name: '_minOutputQuantity', type: 'uint256' },
      { internalType: 'address', name: '_recipient', type: 'address' },
    ],
    name: 'redeem',
    outputs: [
      { internalType: 'uint256', name: 'outputQuantity', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: '_outputs', type: 'address[]' },
      {
        internalType: 'uint256[]',
        name: '_outputQuantities',
        type: 'uint256[]',
      },
      { internalType: 'uint256', name: '_maxInputQuantity', type: 'uint256' },
      { internalType: 'address', name: '_recipient', type: 'address' },
    ],
    name: 'redeemExactBassets',
    outputs: [
      { internalType: 'uint256', name: 'fpTokenQuantity', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_inputQuantity', type: 'uint256' },
      {
        internalType: 'uint256[]',
        name: '_minOutputQuantities',
        type: 'uint256[]',
      },
      { internalType: 'address', name: '_recipient', type: 'address' },
    ],
    name: 'redeemProportionately',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'outputQuantities',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_cacheSize', type: 'uint256' }],
    name: 'setCacheSize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_swapFee', type: 'uint256' },
      { internalType: 'uint256', name: '_redemptionFee', type: 'uint256' },
      { internalType: 'uint256', name: '_govFee', type: 'uint256' },
    ],
    name: 'setFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint128', name: '_min', type: 'uint128' },
      { internalType: 'uint128', name: '_max', type: 'uint128' },
    ],
    name: 'setWeightLimits',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_targetA', type: 'uint256' },
      { internalType: 'uint256', name: '_rampEndTime', type: 'uint256' },
    ],
    name: 'startRampA',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stopRampA',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_input', type: 'address' },
      { internalType: 'address', name: '_output', type: 'address' },
      { internalType: 'uint256', name: '_inputQuantity', type: 'uint256' },
      { internalType: 'uint256', name: '_minOutputQuantity', type: 'uint256' },
      { internalType: 'address', name: '_recipient', type: 'address' },
    ],
    name: 'swap',
    outputs: [{ internalType: 'uint256', name: 'swapOutput', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
