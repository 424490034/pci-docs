// nav
module.exports = [
    { text: '首页', link: '/' },
    {
        text: '软件获取',
        link: '/pages/069d12/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            { text: '软件下载', link: '/pages/069d12/' },
            { text: '浏览器插件下载', link: '/pages/d4d802/' },
            // {
            //     text: '下载中心',
            //     items: [
            //         { text: '软件下载', link: '/pages/069d12/' },
            //         { text: '浏览器插件下载', link: '/pages/d4d802/' },
            //     ],
            // },
        ],
    },
    // 配置示例
    // {
    //   text: '前端',
    //   link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    //   items: [
    //     // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
    //     {
    //       text: '前端文章',
    //       items: [
    //         { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
    //         // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
    //       ],
    //     },
    //     {
    //       text: '学习笔记',
    //       items: [
    //         { text: '《JavaScript教程》', link: '/note/javascript/' },
    //         { text: '《JavaScript高级程序设计》', link: '/note/js/' },
    //         { text: '《ES6 教程》', link: '/note/es6/' },
    //         { text: '《Vue》', link: '/note/vue/' },
    //         { text: '《React》', link: '/note/react/' },
    //         {
    //           text: '《TypeScript 从零实现 axios》',
    //           link: '/note/typescript-axios/',
    //         },
    //         {
    //           text: '《Git》',
    //           link: '/note/git/',
    //         },
    //         {
    //           text: 'TypeScript',
    //           link: '/pages/51afd6/',
    //         },
    //         {
    //           text: 'JS设计模式总结',
    //           link: '/pages/4643cd/',
    //         },
    //       ],
    //     },
    //   ],
    // },

]