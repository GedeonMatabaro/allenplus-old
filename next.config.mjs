/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig = {
    experimental:{
        staleTimes:{
            dynamic: 30,
        }
    }, 
    serverExternalPackages: ["@node-rs/argon2"],
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "utfs.io",
            pathname: `/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/*`,
          },
          {
            protocol: "https",
            hostname: "utfs.io",
            pathname: "/f/**", // Add this for final file URLs
          },
          {
            protocol: "https",
            hostname: `${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh`,
            pathname: `/f/**`,
          },
        ],
    },
    rewrites: () => {
      return [
        {
          source: "/hashtag/:tag",
          destination: "/search?q=%23:tag",
        },
      ];
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
