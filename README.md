# Kickstart Voting App  
## Problem Definition  
### Introduction to Kickstart    
Kickstart is an application, where developers showcase their product in order to get some funding. After the prduct is ready, the contributors get rewarded in return.  

### Problem Definition  
Certain individuals indulge in fraudulent practices, and instead of using the donated amount for their project, they use it for personal expenses. The contributors then have no way to get their money back.  

### Solution
Instead of sending the money to the developer, the contributors can send the money to an ethereum contract. Whenever the developer wants to withdraw some amount, they will ahve to create a `spending request` which the contributors will then `vote` on. In case the request is approved, the developer will then be able to withdraw the amount / send the amount to the vendor  

## Run the Application  
1. Clone the repository: `git clone git@github.com:riyasavant/kickstart-voting.git`
2. `cd kickstart-voting`
3. Install the dependecies: `npm i`
4. Run the project: `npm run dev`
5. Open the application: `localhost:3000`  

## Project Setup  
### Metamask  
1. Install the `metamask` extension on chrome
2. Create an account, and store the recovery phrase
3. Set the network to `Rinkeby Test Network`
4. Get some free faucets by visiting [https://faucets.chain.link/rinkeby](https://faucets.chain.link/rinkeby) and [https://rinkeby-faucet.com/](https://rinkeby-faucet.com/)  

### Infura API  
Acts as the medium between web3 and Test network  
1. Visit the site [https://infura.io/](https://infura.io/)
2. Create an account and Verify
3. Create a project under Ethereum section
4. Get the API endpoint  

### Setup the repo  
1. Clone the repository: `git clone git@github.com:riyasavant/kickstart-voting.git`
2. `cd kickstart-voting`
3. Install the dependecies: `npm i`
4. `cd ethereum`
5. Compile the contract: `node compile.js`
6. Replace your recovery phrase and Infura endpoint in `ethereum/deploy.js` file
7. Deploy the contract: `node deploy.js` and store the deployed contract address in `ethereum/factory.js`
8. Run the project using `npm run dev`  

### Testing  
To test the application using various accounts  
1. Create different accounts on Rinkeby Test Network under the same recovery phrase
2. Follow the same links in order to get faucets
3. Switch to different accounts in order to replicate different users  

## Local testing using Mocha  
Run `npm run test` to test the contract using Mocha