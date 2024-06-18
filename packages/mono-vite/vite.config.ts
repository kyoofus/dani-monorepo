// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    // 라이브러리로 빌드한다.
    lib: {
      // 라이브러리로 빌드합니다. 라이브러리에서 HTML을 진입점으로 사용할 수 없으므로,
      // entry가 필요합니다.
      entry: resolve(__dirname, "src/index.ts"),
      // 브라우저에서 사용 시 name은 전역변수로 노출된다.
      name: "monovite",
      // 파일이름
      fileName: "mono-vite",
    },
  },
  plugins: [dts()],
});
