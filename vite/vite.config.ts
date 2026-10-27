import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { analyzer } from "vite-bundle-analyzer";
import { compression, defineAlgorithm } from "vite-plugin-compression2";

export default defineConfig({
	plugins: [
		checker({ typescript: true }),
		analyzer({
			analyzerMode: "static",
			openAnalyzer: false,
			reportTitle: "Bundle Analysis",
			fileName: "bundle-report.html",
		}),
		compression({
			algorithms: [defineAlgorithm("gzip"), defineAlgorithm("brotliCompress")],
		}),
	],
	build: {
		assetsDir: "",
		modulePreload: {
			polyfill: false,
		},
	},
});
