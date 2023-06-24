resolve: {
  fallback: {
    constants: false;
    crypto: false;
    crypto: require.resolve("crypto-browserify");
    stream: require.resolve("stream-browserify");
  }
}
