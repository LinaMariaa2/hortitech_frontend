/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // ESTE HOSTNAME DEBE COINCIDIR EXACTAMENTE CON EL DE TU SUPABASE_URL:
        hostname: 'yasjwniajgvwkrxyyfrm.supabase.co', 
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },

  // ✅ Mantienes lo que ya tenías y agregas esto:
  reactStrictMode: true,

  // ✅ Esto evita el error del build que viste en Railway
  experimental: {
    serverActions: {}, // CAMBIO: de 'true' a un objeto vacío para cumplir con la API de Next.js 15
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Esto es necesario para que Railway pueda ejecutar el build correctamente
  output: "standalone",
};

module.exports = nextConfig;
