require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot current rate machine exchange coral light army genre'; 
let testAccounts = [
"0x1373b23e2cdb4ae9c919a716a325c114e9282d8204ed73723adb1b19cd99444d",
"0x7881912ddf975cb050afba0bb84f2fa8b1c82988d98c0d806ea21cbd1b99fc7b",
"0x549117d61a1373f7048877f1ef3919e2b5b9e498fd836b3d33b2e3c580c7b82b",
"0xdca766fe7657467a45c885066493bba04c41957685ed15de7ba461c981bc6e15",
"0xfe6f7906cabcb61aecbf30d54f24f7c5f6446003cf0ce83b326737253fa184e2",
"0x61cd216c9eb305b8206813ba5789fa2abbf2d23c8e0bd86893ddf46b95c189cf",
"0xe1654fdf7d3c23171e0e17bfa9795fedfb20781f6f1c6013a69ae5e827822f20",
"0xc2f544d7bb108b421a3a9f56ef1cf6b0e67a56eb35f7bacdccd3bd269032c0c0",
"0x2d1fd76b60fab3af6faaed9e2ee65b7d40596792cbad65cae6a64cbdc19ff015",
"0x95621254d22a0e385d2b5f64f3fcd8222b2c6a21c3f25e6d52e162ba061f92f8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
