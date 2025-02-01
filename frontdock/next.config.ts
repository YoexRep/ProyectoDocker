const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fileSystemPolling: true,
  },
  // Añade esto para forzar el host:
  serverOptions: {
    host: "0.0.0.0",
  },
};

export default nextConfig;
