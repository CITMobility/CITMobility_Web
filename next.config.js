// next.config.js
/**
 * Next.js configuration with security best practices.
 * Includes React strict mode, SWC minification, and HTTP security headers.
 */
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // Adjust CSP as needed for fonts, images, etc.
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src https://fonts.gstatic.com;",
          },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
          { key: 'Permissions-Policy', value: 'geolocation=(), camera=()' },
        ],
      },
    ];
  },
};
