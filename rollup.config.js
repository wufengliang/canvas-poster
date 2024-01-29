/*
 * @Author: wufengliang 44823912@qq.com
 * @Date: 2024-01-27 22:53:31
 * @LastEditTime: 2024-01-29 11:50:55
 * @Description: rollup配置
 */
const typescript = require('rollup-plugin-typescript2');
const { terser } = require('rollup-plugin-terser');

const inputs = [{ input: 'src/browser.ts', outputName: 'canvas-poster.browser.min' }, { input: 'src/mini.ts', outputName: 'canvas-poster.mini.min' }];

const globals = {};

function renderSingleOptions(input, outputName) {
  return [
    // CommonJS 格式
    {
      input,
      output: {
        file: `dist/${outputName}.cjs.js`,
        format: 'cjs',
        exports: 'named',
      },
      plugins: [
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              target: 'es5',
              module: 'ESNext',
            },
          },
        }),
        terser({
          ecma: 6,
          compress: {
            unused: true,
            dead_code: true,
            drop_console: true,
            global_defs: {
              DEBUG: false
            }
          },
          output: {
            comments: false
          }
        })
      ],
      external: [],
    },
    // ES6 格式
    {
      input,
      output: {
        file: `dist/${outputName}.esm.js`,
        format: 'esm',
      },
      plugins: [
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              target: 'es6',
              module: 'ESNext',
            },
          },
        }),
        terser({
          ecma: 6,
          compress: {
            unused: true,
            dead_code: true,
            drop_console: true,
            global_defs: {
              DEBUG: false
            }
          },
          output: {
            comments: false
          }
        })
      ],
      external: [],
    },
    // IIFE 格式
    {
      input,
      output: {
        file: `dist/${outputName}.iife.js`,
        format: 'iife',
        name: 'CanvasInstance',
        globals,
      },
      plugins: [
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              target: 'es5',
            },
          },
        }),
        terser({
          ecma: 6,
          compress: {
            unused: true,
            dead_code: true,
            drop_console: true,
            global_defs: {
              DEBUG: false
            }
          },
          output: {
            comments: false
          }
        })
      ],
      external: Object.keys(globals),
    },
  ];

}

module.exports = inputs.map(input => renderSingleOptions(input.input, input.outputName)).flat()