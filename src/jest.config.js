const config = {
   
    collectCoverageFrom: [
      "./src/components/**"
    ],
    coverageThreshold: {
      "global": {
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
    },
    transformIgnorePatterns: [
      "<rootDir>/node_modules/(?!d3-shape | d3-path)"
    ],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
      },
  }

  module.exports = config;

  