Aquarius Wallet Server

Todos:

- Proper server logging
- handling of requestitems w/ update requests
- handling of transactions
- creation of wallets / mnemonics w/ endpoints
- minting endpoints

Requires `grpc-tools` globally installed : `npm install -g grpc-tools`.

1. `./scripts/build_protos.sh`
2. `npm run start`
3. in another terminal: `curl localhost:3001` to test the update ledger endpoint.
