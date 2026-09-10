import type { NextConfig } from "next";

const researchRedirects = [
  {
    slug: "1",
    utm_campaign: "research_post1",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return researchRedirects.map(({ slug, utm_campaign }) => ({
      source: `/research/${slug}`,
      destination: `/research?utm_source=linkedin&utm_medium=social&utm_campaign=${utm_campaign}`,
      permanent: false,
    }));
  },
};

export default nextConfig;
