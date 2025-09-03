import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/sig-sdlc/',
  title: "HC1 SDLC SIG",
  description: "HyperCore One SDLC SIG",
  rewrites: {
    'README.md': 'index.md',
    '(.*)/README.md': '(.*)/index.md'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Matrix', link: 'https://matrix.to/#/#zenon-sigs:zenon.chat' },
      { text: 'Forum', link: 'https://forum.hypercore.one/' }
    ],

    sidebar: [
      {
        text: 'SDLC SIG',
        items: [
          { text: 'README', link: '/'},
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/hypercore-one/sig-sdlc/edit/master/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hypercore-one/sig-sdlc' }
    ]
  }
})
