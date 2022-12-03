/** @type {import('next').NextConfig} */

const { withAxiom } = require('next-axiom')
const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withPWA(withAxiom(nextConfig))
