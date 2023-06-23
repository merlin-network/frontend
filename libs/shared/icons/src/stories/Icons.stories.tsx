// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { IconsView } from '@frontend/tools-storybook';

import * as chainIcons from '../components/chains';
import * as mvIcons from '../components/meta-vaults';
import * as mfuryIcons from '../components/mfury';
import * as protocolIcons from '../components/protocols';
import * as socialIcons from '../components/social';
import * as tokenIcons from '../components/tokens';
import * as walletIcons from '../components/wallets';

export default {
  title: 'Icons',
};

export const ChainIcons = IconsView.bind({});
ChainIcons.args = { icons: chainIcons };

export const MetaVaultIcons = IconsView.bind({});
MetaVaultIcons.args = { icons: mvIcons };

export const MFuryIcons = IconsView.bind({});
MFuryIcons.args = { icons: mfuryIcons };

export const ProtocolIcons = IconsView.bind({});
ProtocolIcons.args = { icons: protocolIcons };

export const SocialIcons = IconsView.bind({});
SocialIcons.args = { icons: socialIcons };

export const TokenIcons = IconsView.bind({});
TokenIcons.args = { icons: tokenIcons };

export const WalletIcons = IconsView.bind({});
WalletIcons.args = { icons: walletIcons };
