module.exports = {
  testEnvironment: "jsdom",
  transform: { "^.+\\.(js|jsx)$": "babel-jest" },
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["<rootDir>/src/__tests__/**/*.test.js"],
};
