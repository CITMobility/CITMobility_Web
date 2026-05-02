// next.config.js
/**
 * Next.js configuration with security best practices.
 * Includes React strict mode, SWC minification, and HTTP security headers.
 */
module.exports = {
  reactStrictMode: true,
  // allowedDevOrigins: ['192.168.100.31'], // Solo necesario en desarrollo local en red
  async headers() {
    return [
      {
        // Apply headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob:",
              "font-src 'self' https://fonts.gstatic.com",
              "media-src 'self' blob:",
              "worker-src blob:",
              // Permite cargar fuentes desde Google y el propio dominio
              "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
            ].join('; '),
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

