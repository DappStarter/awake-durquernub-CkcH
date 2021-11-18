require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stone deny six concert grace nature outer shift'; 
let testAccounts = [
"0xe57f235315d783833427e233e84555fe38a698da46e521bc5456706a423b2228",
"0xe0d868a4f3d232081a1c94c03414c35dbc990c260eb64f006f54569bb61ea35d",
"0xaff450f71010363aed629b8878b045d28cfedd3483c48f4da66c1717febca5de",
"0x214bde1f4cb7026361825987be78a637db21ab290dc7b8ad1d4569ac29a29e84",
"0x4329975a3066df0a12d8361c9772b09820940c7020cd0c0075c6e3e05de319af",
"0x4dbacbceab85d6595ec2647f6cba5d9d8ae7edba89373bef0ecc96caa89d0368",
"0xcc315984627da8eec686d1f9217f8435a7e3350a1fe4492e443810d79530d28c",
"0xbfd76c67d04f451004521f375507092a23dde826c644d7b811ef08e64cacd18d",
"0xaaa1b1f01ff9844f01185591afbd2077e098e1ffa869898138e81c4f0273fa41",
"0x63ad80a52db6548cac5c8e439166da5e3ccfb4e8bead905137c47fd5b9ada863"
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
            version: '^0.8.0'
        }
    }
};

