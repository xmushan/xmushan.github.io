module.exports = {
    title: 'xumushan',
    description: "xumushan's Blog ",
    theme: 'gungnir',
    themeConfig: {
        base: "/",
        hitokoto: true,
        footer: `
        &copy; <a href="https://github.com/xmushan" target="_blank">xmushan</a>
        <br>
        Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
        <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
      `,
        personalInfo: {
            name: "xumushan",
            avatar: "/img/avatar.jpeg",
            description: "今天不想做，所以才要做",
            sns: {
                github: 'xmushan',  // Github
                email: 'xmushan@163.com',  // 邮箱
            }
        },
        homeHeaderImages: {
            // api: "https://source.unsplash.com/1600x900/?nature"
            local: [
                {
                    "path": "/img/home-bg/1.jpg",
                    "mask": "rgba(40, 57, 101, .4)"
                },
                {
                    "path": "/img/home-bg/2.jpeg",
                    "mask": "rgba(40, 57, 101, .4)"
                },
                {
                    "path": "/img/home-bg/3.jpeg",
                    "mask": "rgba(40, 57, 101, .4)"
                },
            ]
        },

        pages: {
            tags: {
                subtitle: '永远骄傲！～',
                // bgImage: {
                //     path: '/img/pages/tags.jpg',
                //     mask: 'rgba(211, 136, 37, .5)'
                // }
            },
            links: {
                subtitle: '永远自豪！～',
                // bgImage: {
                //     path: '/img/pages/tags.jpg',
                //     mask: 'rgba(211, 136, 37, .5)'
                // }
            }
        },
        locales: {
            "/": {
                label: 'English',
                selectText: 'Languages',
                nav: require('./configs/navBar/zh'),
                // sidebar: require('./configs/sidebar/en'),
            },
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