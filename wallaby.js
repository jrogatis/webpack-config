export default wallaby => {
    return {
        files: [
            'src/**/*.js',
            'test/fixtures/**/*.js',
            'test/helpers/**/*.js'
        ],
        tests: [
            'test/**/*.spec.js'
        ],
        testFramework: 'jasmine',
        env: {
            type: 'node'
        },
        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babelrc: true
            })
        }
    };
};
