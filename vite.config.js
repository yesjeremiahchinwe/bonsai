import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                small_businesses: resolve(__dirname, "small_businesses.html"),
                agencies: resolve(__dirname, "agencies.html"),
                freelancers: resolve(__dirname, "freelancers.html")
            }
        }
    }
})