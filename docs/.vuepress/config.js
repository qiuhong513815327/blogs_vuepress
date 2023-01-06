module.exports = {
  base: '/',
  title: '纳斯码图的学习笔记文档',
  description: '日常随记',
  markdown: {
    lineNumbers: true, // 是否在每个代码块的左侧显示行号。
  },
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],
  themeConfig: {
    logo: '/icon.png',
    sidebar: {
      "/note/": [
        {
          title: "Git常用命令及方法大全",
          collapsable: true,
          children: ["git/base.md", "git/gitCommand.md"]
        },
        {
          title: "Bug日常记录",
          collapsable: true,
          children: ["bugRecord/mobileBug.md"]
        },
      ]
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习笔记',
        link: '/note/',
      },
      {
        text: 'VUE页面',
        link: '/vuePage/',
      },
      {
        text: '自定义项目',
        link: '/untitled/',
      },
    ]
  },
}