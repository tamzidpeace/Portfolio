module.exports = {
  moduleNameMapper: {
    '\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$': '<rootDir>/__mocks__/fileMock.js',
    '\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    'rehype-highlight': '<rootDir>/__mocks__/rehype-highlight.js',
    'react-pdf': '<rootDir>/__mocks__/react-pdf.js',
    'tsparticles': '<rootDir>/__mocks__/tsparticles.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts', '<rootDir>/jest.setup.js'],
  transform: {
    '^.+\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [],
};
