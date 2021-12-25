module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper: {
      "\\.(scss|sass|css|module.css)$": "identity-obj-proxy"
    }
};