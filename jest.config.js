module.exports = {
    preset: 'jest-puppeteer',
    roots: ['e2e', 'src'],
    testTimeout: 60000,
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
        "\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
    },
};

