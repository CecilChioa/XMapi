import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhXmApiNote = defineNoteConfig({
  dir: 'xmapi',
  link: '/xmapi',
  sidebar: [
    '/japi/README.md',
    '/game/README.md',
  ],
})

const zhXmFwNote = defineNoteConfig({
  dir: 'xmfw',
  link: '/xmfw',
  sidebar: [
    '/japi/README.md',
    '/game/README.md',
  ],
})

const zhXmUiNote = defineNoteConfig({
  dir: 'xmui',
  link: '/xmui',
  sidebar: [
    '/japi/README.md',
    '/game/README.md',
  ],
})


const zhDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const zhApiNote = defineNoteConfig({
  dir: 'api',
  link: '/api',
  sidebar: [
    {
      text: 'XMAPI',
      prefix: '/xmapi',
      collapsed: false,
      items: [
        {
          text: 'JAPI',
          collapsed: false,
          prefix: '/japi',
          items: 'auto',
          // items: [
          //   { text: '测试', link: '/api/2k0wt54a/' },
          // ]
        },
        {
          text: '高频API',
          collapsed: false,
          prefix: '/frequencyapi',
          items: 'auto',
        },
        {
          text: '转换',
          collapsed: false,
          prefix: '/convert',
          items: 'auto',
        },
        {
          text: '计算',
          collapsed: false,
          prefix: '/calculate',
          items: 'auto',
        },
        {
          text: 'JAPI界面',
          collapsed: false,
          prefix: '/japiui',
          items: 'auto',
        },
        {
          text: '装饰物',
          collapsed: false,
          prefix: '/decoration',
          items: 'auto',
        },
        {
          text: '大数',
          collapsed: false,
          prefix: '/bignumber',
          items: 'auto',
        },
        {
          text: '硬件',
          collapsed: false,
          prefix: '/hardware',
          items: 'auto',
        },
        {
          text: '废弃',
          collapsed: false,
          prefix: '/deprecated',
          items: 'auto',
        },
      ]
    },
    {
      text: 'XMFW',
      prefix: '/xmfw',
      collapsed: true,
      items: [
        {
          text: '框架',
          collapsed: false,
          prefix: '/framework',
          items: 'auto', // items 为 'auto'，会根据 prefix 的文件结构自动生成侧边栏
        },
        {
          text: '平台',
          collapsed: false,
          prefix: '/platform',
          items: 'auto',
        },
        {
          prefix: '/game',
          items: [
            '测试', // 相对路径, 最终拼接为 /guide/blog/intro
          ]
        }
      ]
    },
    {
      text: 'XMUI',
      prefix: '/xmui',
      collapsed: true,
      items: [
        {
          text: '界面',
          collapsed: false,
          prefix: 'interface',
          items: 'auto', // items 为 'auto'，会根据 prefix 的文件结构自动生成侧边栏
        },
        {
          text: '界面动画',
          collapsed: false,
          prefix: 'interface-animation',
          items: 'auto',
        },
        {
          text: '废弃',
          collapsed: false,
          prefix: 'deprecated',
          items: 'auto',
        },
      ]
    },
  ]
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhDemoNote, zhApiNote],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

