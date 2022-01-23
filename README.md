# NFT Minting Sanbox

To run the project:
- Make sure you have Metamask installed and setup an account on localhost network.
- In separate terminal: npx hardhat node (This starts a local instance of the blockchain which will give you several local accounts for testing that can be added to Metamask).
- npx compile (Compiles the smart contract).
- npx hardhat run scripts/sample-script.js --network localhost (This deploys the smart contract on your local blockchain; you will receive a contract address).
- update Home.jsx with the contract address in [const contractAddress = 'YOUR CONTRACT ADDRESS';].
- yarn start