module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	coverageDirectory: 'coverage',
	collectCoverage: true,
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
