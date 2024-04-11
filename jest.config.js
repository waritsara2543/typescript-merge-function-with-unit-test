module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
