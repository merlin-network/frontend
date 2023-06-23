<br/>
<img src="https://mfury.org/assets/img/email/mfury_logo_horizontal_black.png" width="420" >

<br />

# mFury Frontend

This repository contains the latest frontend applications of mFury. It is a monorepo comprising multiple mFury apps, all built using common libraries and a common UI.

## Apps

The following table lists the mFury apps included in this repository

| Status | Name              | Nx project | Port | Public hosts                                            |
| :---: | :---------------- | :--------- | :--- | :------------------------------------------------------ |
| ✅    | Meta Vaults       | `mfury`  | 4200 | [Google Cloud](https://yield.mfury.org/)              |
| ✅    | Long Term Support | `lts`      | 4201 | [Google Cloud](https://withdraw.mfury.org/) |

## Quickstart
To get started with this repository, run the following commands:

```bash
git clone https://github.com/mfury/frontend.git
cd frontend
yarn
```
If you encounter any issues during the installation process, please refer to the [environment setup guide](./docs/DEVELOPING.md#environment-setup).

### Running an app

```bash
yarn nx serve mfury
yarn nx serve lts
```

### Building an app

```bash
yarn nx run build mfury
yarn nx run build lts
```

## Developing

For detailed instructions and information on local development, please refer to the [Developing Guide](./docs/DEVELOPING.md).

## Contributing

If you would like to contribute to this repository, please refer to the [Contributing Guide](./docs/CONTRIBUTING.md).

## Subgraph

To learn more about our Meta Vault Subgraph, please refer to the [Meta Vault Subgraph](./docs/SUBGRAPH.md).

## Contact us

If you have any questions or concerns, please join our [Discord server](https://discordapp.com/channels/525087739801239552/).
