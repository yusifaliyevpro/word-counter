import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    useTypeScriptCli: true,
    turbopackRustReactCompiler: true,
  },
};

export default nextConfig;
