Aquarius Wallet Server

Todos:

- Proper server logging + proper error handling (just has throws right now esp. in wallet)
- handling of requestitems w/ update requests
- handling of transactions
- creation of wallets / mnemonics w/ endpoints
- minting endpoints + faucet connection
- validator validations
- unit tests

Requires `grpc-tools` globally installed : `npm install -g grpc-tools`.

1. `../scripts/build_protos.sh`
2. `./scripts/build_server.sh`
3. `node ./dist/server/src/app.js`
4. in another terminal: `curl localhost:3001` to test the update ledger endpoint and `curl localhost:3001/test` to test whatever I've got in there atm until I put unit tests in here.

Sources:
https://github.com/libra/libra/tree/master/client/libra_wallet -> Based on libra_wallet implementation.
https://github.com/perfectmak/libra-core -> Good examples on how to handle crupto w/ typescript
