import { getBlogPosts } from 'app/blog/utils'

function getBaseUrl() {
  // Prefer an explicitly configured site URL for canonical + OG URLs.
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (siteUrl) return siteUrl.replace(/\/$/, '')

  // Vercel provides the hostname without protocol.
  let vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) return `https://${vercelUrl}`

  // Local dev fallback.
  return 'http://localhost:3000'
}

export const baseUrl = getBaseUrl()

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
