module.exports = {
    env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }
},
setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

}