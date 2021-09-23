module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "@sucrase/jest-plugin",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/types/"],
  testMatch: ["**/*.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["jest-extended"],
};
