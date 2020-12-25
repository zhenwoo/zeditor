import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import less from 'rollup-plugin-less'
import eslint from '@rollup/plugin-eslint'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
export default {
    input: 'src/index.ts',
    output: [
        {name: 'demo', file: 'dist/demo.js', format: 'umd'},
        { file: 'dist/demo.cjs.js', format: 'cjs' },
        { file: 'dist/demo.es.js', format: 'es' }
    ],
    plugins: [
        eslint({
            throwOnError: true,
            include: ['src/**/*.ts'],
            exclude: ['node_modules/**', 'lib/**']
        }),
        typescript(),
        nodeResolve(),
        commonjs(),
        less({
            insert: false,
            output: 'dist/demo.css'
        }),
        serve({open: true,host: 'localhost',
            port: 8086,}), // index.html should be in root of project
        livereload(),
        // cssnano()
    ]
}
