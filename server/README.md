Aquarius Wallet Server

Todos:

- Proper server logging + proper error handling (just has throws right now esp. in wallet) -- > https://www.npmjs.com/package/morgan / https://www.npmjs.com/package/http-errors
- handling of requestitems w/ update requests
- handling of transactions
- minting endpoints + faucet connection
- validator validations
- unit tests
- make sure that any key buffers are deliberately nulled out if they go out of scope (does this happen automatically in js? ... What's the lifecycle of a buffer?) (https://github.com/dalek-cryptography/ed25519-dalek/blob/master/src/secret.rs#L264)
- Modular crypto that can be swapped out for next gen crypto easier -- right now the hasher being used is mainly sha3 but that is probably going to change eventually?
- make typing names consistent -- end in type or not??

Requires `grpc-tools` globally installed : `npm install -g grpc-tools`.

1. `../scripts/build_protos.sh`
2. `./scripts/build_server.sh`
3. `node ./dist/server/src/app.js`
4. in another terminal: `curl localhost:3001` to test the update ledger endpoint and `curl localhost:3001/test` to test whatever I've got in there atm until I put unit tests in here.

Sources:

https://github.com/libra/libra/tree/master/client/libra_wallet -> Based on libra_wallet implementation.
https://github.com/perfectmak/libra-core -> Good examples on how to handle crypto w/ typescript
