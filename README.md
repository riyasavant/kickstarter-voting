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

### Setup the repo  
1. Clone the repository: `git clone git@github.com:riyasavant/kickstart-voting.git`
2. `cd kickstart-voting`
3. Install the dependecies: `npm i`
4. `cd ethereum`
5. Compile the contract: `node compile.js`
6. Replace your recovery phrase and Infura endpoint in `ethereum/deploy.js` file
7. Deploy the contract: `node deploy.js` and store the deployed contract address
8. Add the address to `ethereum/factory.js` file
9. Run the project using `npm run dev`  

### Testing  
To test the application using various accounts, create different accounts on Rinkeby Test Network and follow the same links in order to get faucets. Once done, switch to different accounts in order to replicate different users.