export default {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,cjs,mjs}'
  ],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/$1',
  },
}
