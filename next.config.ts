import type { NextConfig } from "next";
import { headersFor } from "./security-headers.mjs";

const nextConfig: NextConfig = {
  // No "X-Powered-By: Next.js" header (LAUNCH-STANDARD.md D).
  poweredByHeader: false,
  // Security headers on every response, plus X-Robots-Tag noindex while it's an unpaid preview (security-headers.mjs).
  async headers() {
    return [{ source: "/:path*", headers: headersFor() }];
  },
};

export default nextConfig;
