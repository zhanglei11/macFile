module.exports = {
  title: '博泽智造',
  description: '',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      // { text: 'Home', link: '/', icon: 'reco-home' },
      // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'Docs',
        icon: 'reco-message',
        items: [{ text: 'vuepress-reco', link: '/docs/theme-reco/' }]
      },
      {
        text: 'Docs11',
        icon: 'reco-message',
        link: '/docs/theme-reco11/'
      },
      {
        text: '文档',
        icon: 'reco-message',
        items: [
          { text: 'es6', link: '/docs/es6/array' },
          { text: 'JavaScript', link: '/docs/JavaScript/== _===' },
          { text: 'vue', link: '/docs/vue/404' },
          { text: 'vue3', link: '/docs/vue3/composition' },
          { text: 'webpack', link: '/docs/webpack/build_process' }
        ]
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/recoluan',
            icon: 'reco-github'
          }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api', 'theme22'],
      '/docs/theme-reco11/': ['', 'theme', 'plugin', 'api', 'theme22'],
      '/docs/es6/': [
        'array',
        'decorator',
        'function',
        'generator',
        'module',
        'object',
        'promise',
        'proxy',
        'set_map',
        'var_let_const'
      ],
      '/docs/JavaScript/': [
        '== _===',
        'ajax',
        'array_api',
        'bind_call_apply',
        'BOM',
        'closure',
        'context_stack',
        'continue_to_upload',
        'copy',
        'data_type',
        'debounce_throttle',
        'Dom',
        'event_agent',
        'event_loop',
        'event_Model',
        'function_cache',
        'functional_programming',
        'inherit',
        'js_data_structure',
        'loss_accuracy',
        'memory_leak',
        'new',
        'prototype',
        'pull_up_loading_pull_down_refresh',
        'regexp',
        'scope',
        'security',
        'single_sign',
        'string_api',
        'tail_recursion',
        'this',
        'type_conversion',
        'typeof_instanceof',
        'visible'
      ],
      '/docs/vue/': [
        '404',
        'axios',
        'axiosCode',
        'bind',
        'communication',
        'components_plugin',
        'cors',
        'data_object_add_attrs',
        'data',
        'diff',
        'directive',
        'error',
        'filter',
        'first_page_time',
        'if_for',
        'keepalive',
        'key',
        'lifecycle',
        'mixin',
        'modifier',
        'new_vue',
        'nexttick',
        'observable',
        'permission',
        'show_if',
        'slot',
        'spa',
        'ssr',
        'structure',
        'vnode',
        'vue',
        'vue3_vue2'
      ],
      '/docs/vue3/': [
        'composition',
        'goal',
        'modal_component',
        'performance',
        'proxy',
        'treeshaking'
      ],
      '/docs/webpack/': [
        'build_process',
        'HMR',
        'improve_build',
        'Loader_Plugin',
        'Loader',
        'performance',
        'Plugin',
        'proxy',
        'Rollup_Parcel_snowpack_Vite',
        'webpack'
      ]
    },
    // type: 'blog',
    // // 博客设置
    // blogConfig: {
    //   category: {
    //     location: 3, // 在导航栏菜单中所占的位置，默认2
    //     text: 'Category' // 默认 “分类”
    //   },
    //   tag: {
    //     location: 4, // 在导航栏菜单中所占的位置，默认3
    //     text: 'Tag' // 默认 “标签”
    //   }
    // },
    friendLink: [
      // {
      //   title: '午后南杂',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: '1156743527@qq.com',
      //   link: 'https://www.recoluan.com'
      // }
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //   avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   link: 'https://vuepress-theme-reco.recoluan.com'
      // },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: false
    // searchMaxSuggestions: 10,

    // 自动形成侧边导航
    // sidebar: 'auto',

    // 最后更新时间
    // lastUpdated: 'Last Updated',

    // 作者
    // author: 'zhanglei',

    // 作者头像
    // authorAvatar: '/avatar.png',

    // 备案号
    // record: 'xxxx',

    // 项目开始时间
    // startYear: '2017'
  },
  markdown: {
    lineNumbers: true
  }
}
