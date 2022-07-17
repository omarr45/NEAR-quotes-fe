import { Contract, Near, WalletConnection, keyStores } from 'near-api-js';

export const CONTRACT_ID = 'intern.omar45.testnet';

// use new NEAR here to avoid needing async/await
export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
});

// can now create a new WalletConnection with the created Near object
export const wallet = new WalletConnection(near, 'sampleproject');

// a service to get messages from the blockchain
export const listWritings = () => {
  return wallet.account().viewFunction(CONTRACT_ID, 'listWritings', {});
};

// a service to add a message to the blockchain
export const writeSomething = ({ text }) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'writeSomething',
    args: { text },
  });
};
