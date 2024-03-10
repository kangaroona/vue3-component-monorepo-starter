/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 产物输出目录，默认值就是 dist。我们使用默认值，注释掉此字段。
    outDir: 'dist',

    // 参考：https://cn.vitejs.dev/config/build-options.html#build-lib
    lib: {
      // 构建的入口文件
      entry: './src/index.ts',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "./dist/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "./dist/lib",
        },
      ],
    },
    // 为了方便学习，查看构建产物，将此置为 false，不要混淆产物代码
    minify: "terser",
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    }
  },
  plugins: [vue(), dts({ include: './src' })],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**'],
      exclude: ['src/**/*.d.ts', 'src/**/*.spec.ts', 'src/**/*.test.ts']
    }
  }
});
