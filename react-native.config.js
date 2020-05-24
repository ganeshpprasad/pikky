module.exports = {
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer');
    },
    getSourceExts() {
        return ['ts', 'tsx'];
    },
    project: {
        ios: {},
        android: {}, // grouped into "project"
    },
    assets: ['./fonts/'], // stays the same
};
