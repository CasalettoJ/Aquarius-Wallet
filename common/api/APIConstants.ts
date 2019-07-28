export default {
  constants: {
    walletHost: "http://localhost:3001",
    testnetAddr: "ac.testnet.libra.org:8000"
  },
  // TODO: Endpoint scheme w/ verbs that makes actual sense.
  endpoints: {
    root: "/",
    wallet: {
      create: "/wallet/new",
      newAccount: "/wallet/generate",
      import: "/wallet/import",
      export: "/wallet/export"
    },
    account: {
      getStates: "/account/",
      create: "/account/new",
      createX: "/account/new/:count"
    },
    test: "/test",
    testWords: "/testwords"
  }
};
