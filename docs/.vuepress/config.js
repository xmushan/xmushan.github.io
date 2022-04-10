module.exports = {
    title: 'xumushan',
    description: "xumushan's Blog ",
    theme: 'gungnir',
    themeConfig: {
        base: "/",
        dest: 'build',
        hitokoto: true,
        search: true, // 可选：是否启用搜索，默认：true
        searchMaxSuggestions: 10, // 可选：搜索的最大结果数，默认：10
        searchPlaceholder: '$ grep ...', // 可选：搜索栏占位文本，默认："$ grep ..."
        searchIcon: 'ri-search-2-line', // 可选：搜索图标
        footer: `
        &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2021
        <br>
        Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
        <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
      `,
        personalInfo: {
            name: "xumushan",
            avatar: "/img/avatar.jpeg",
            description: "生存还是毁灭，这是个问题",
            sns: {
                github: 'Renovamen',  // Github
                email: 'renovamenzxh@gmail.com',  // 邮箱
            }
        },
        homeHeaderImages: {
            api: "https://source.unsplash.com/1600x900/?nature"
        },
        pages: {
            tags: {
                subtitle: '吼哇朋友们，这是标签页',
            },
            links: {
                subtitle: '吼哇朋友们，这是链接页',
            }
        },
        comment: {
            platform: "github",
            owner: "This-is-an-Apple",  // 用于放评论的仓库的拥有者 ID
            repo: "gitalk-comments",  // 用于放评论的仓库名
            clientId: "your-client-id",  // OAuth App Client ID
            clientSecret: "client-secret"  // OAuth App Client Secret
        },
        readingTime: {
            excludes: ['/url1', '/url2/.*'],  // 不需要进行统计的页面路径，默认为 ["/tags/.*", "/links"]
            wordsPerMinuteCN: 500,  // 一分钟可以阅读多少个中文字符，默认为 300
            wordsPerMinuteEN: 200,  // 一分钟可以阅读多少个英文字符，默认为 160
            excludeCodeBlock: true,  // 是否排除所有代码块内的字符，默认为 false
            excludeTexBlock: true    // 是否排除所有公式块内的字符，默认为 false
        },
        // Markdown 增强样式
        mdPlus: {
            all: true,  // 全部启用
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }
}