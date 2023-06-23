module.exports = {
  generates: {
    'libs/mfury/data-access/src/generated/graphql.ts': {
      schema: process.env['NX_THE_GRAPH_MV_MAINNET_URL'],
      documents: ['**/src/**/*.graphql'],
      plugins: ['typescript'],
    },
    'libs/mfury/**/src': {
      schema: process.env['NX_THE_GRAPH_MV_MAINNET_URL'],
      documents: ['**/src/**/*.graphql'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: '~@frontend/mfury-data-access',
      },
      plugins: ['typescript-operations', 'typescript-react-query'],
    },
  },
};
