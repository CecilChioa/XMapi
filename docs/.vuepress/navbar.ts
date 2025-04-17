import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: 'API', link: '/notes/api/README.md' },
  { text: '更新日志', link: '/blog/' },
  {
    text: '更多',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'API', link: '/en/notes/api/README.md' },
  { text: 'Changelog', link: '/en/blog/' },
  {
    text: 'More',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

