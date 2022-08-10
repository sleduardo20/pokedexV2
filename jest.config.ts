import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/local/**",
    "!src/mocks/**",
    "!src/**/styles.ts",
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/.jest/transformer.js",
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleNameMapper: {
    "^styled-components":
      "<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js",
  },
};

export default config;
