import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                small_businesses: resolve(__dirname, "small_businesses.html"),
                agencies: resolve(__dirname, "agencies.html"),
                freelancers: resolve(__dirname, "freelancers.html"),
                pricing: resolve(__dirname, "pricing.html"),
                coaching: resolve(__dirname, "coaching.html"),
                collaboration: resolve(__dirname, "collaboration.html"),
                consulting: resolve(__dirname, "consulting.html"),
                contracts: resolve(__dirname, "contracts.html"),
                payments: resolve(__dirname, "payments.html"),
                recruiting: resolve(__dirname, "recruiting.html")
            }
        }
    }
})