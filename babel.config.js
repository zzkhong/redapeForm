module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          common: './src/common',
          modules: './src/modules',
          ui: './src/ui',
          utils: './src/utils',
        },
      },
    ],
  ],
};
