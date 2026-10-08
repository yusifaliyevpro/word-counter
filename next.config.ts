import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    useTypeScriptCli: true,
    turbopackRustReactCompiler: true,
    agentUpgrade: "security",
  },
};

export default nextConfig;
