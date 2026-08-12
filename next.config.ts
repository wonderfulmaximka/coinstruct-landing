import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Attribution slugs: /research/<slug> serves the /research page unchanged,
  // but the URL stays distinct so Vercel Web Analytics logs it as its own path.
  // Use one slug per LinkedIn post (1, 2, 3...) to attribute traffic per post.
  async rewrites() {
    return [
      {
        source: "/research/:slug",
        destination: "/research",
      },
    ];
  },
};

export default nextConfig;
