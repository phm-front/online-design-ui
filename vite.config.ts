import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'pui',
      // the proper extensions will be added
      fileName: 'pui',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        exports: "named",
        assetFileNames: 'pui[extname]',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
      plugins: [typescript({
        compilerOptions: {
          declaration: true,
          declarationDir: resolve(__dirname, 'dist/types'),
          emitDeclarationOnly: true, // 只生成 .d.ts 不生成 .js，生成js交给vite
          noEmit: false // noEmit 默认为true，什么都不生成
        }
      })]
    },
  },
})
