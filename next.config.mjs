import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const API_URL = "https://api.antenna.insectai.org";

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => {
  // In production, Netlify proxies API requests (see public/_redirects)
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      skipTrailingSlashRedirect: true,
      rewrites: async () => [
        { source: "/api/:path*/", destination: `${API_URL}/api/:path*/` },
      ],
    };
  }

  return {
    output: "export",
  };
};

export default nextConfig;
