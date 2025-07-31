/**
 * @type {import('next').NextConfig}
 *
 * Основная конфигурация Next.js. Здесь включается строгий режим React,
 * который помогает выявлять потенциальные проблемы в приложении. Параметр
 * swcMinify включает использование нового компилятора SWC для более
 * производительной сборки. Конфигурацию можно расширить при необходимости.
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;