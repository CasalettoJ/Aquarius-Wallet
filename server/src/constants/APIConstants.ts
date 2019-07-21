export default {
  constants: {
    testnetAddr: "ac.testnet.libra.org:8000",
    serverPort: 3001
  },
  endpoints: {
    root: "/",
    wallet: {
      create: "/wallet/new",
      import: "/wallet/import",
      export: "/wallet/export"
    },
    account: {
      get: "/account/:depth",
      getAll: "/account",
      create: "/account/new",
      createX: "/account/new/:count"
    },
    test: "/test",
    testWords: "/testwords"
  }
};
