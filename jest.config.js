export default {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,cjs,mjs}'
  ],
  coverageProvider: 'v8',
  testEnvironment: 'node',
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/$1',
  },
}
