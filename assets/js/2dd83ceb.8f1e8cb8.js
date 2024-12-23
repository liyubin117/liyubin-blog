"use strict";
(self["webpackChunkliyubin_blog"] = self["webpackChunkliyubin_blog"] || []).push([[4186],{

/***/ 9073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_docusaurus_github_pages_md_2dd_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_docusaurus_github_pages_md_2dd_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7676);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'docusaurus_github_pages',
	title: 'Docusaurus+GithubPages搭博客',
	authors: '转载',
	tags: [
		'docusaurus',
		'github pages'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "前言",
  "id": "前言",
  "level": 2
}, {
  "value": "一、 环境准备",
  "id": "一-环境准备",
  "level": 2
}, {
  "value": "git",
  "id": "git",
  "level": 3
}, {
  "value": "Node",
  "id": "node",
  "level": 3
}, {
  "value": "二、安装脚手架",
  "id": "二安装脚手架",
  "level": 2
}, {
  "value": "1. 初始化新项目：",
  "id": "1-初始化新项目",
  "level": 3
}, {
  "value": "2. 项目结构",
  "id": "2-项目结构",
  "level": 3
}, {
  "value": "3. 运行开发服务器",
  "id": "3-运行开发服务器",
  "level": 3
}, {
  "value": "三、 配置 ❗",
  "id": "三-配置-",
  "level": 2
}, {
  "value": "必填字段",
  "id": "必填字段",
  "level": 3
}, {
  "value": "可选字段",
  "id": "可选字段",
  "level": 3
}, {
  "value": "常用配置",
  "id": "常用配置",
  "level": 4
}, {
  "value": "主题配置",
  "id": "主题配置",
  "level": 4
}, {
  "value": "个性化",
  "id": "个性化",
  "level": 4
}, {
  "value": "四、 部署 ❗❗",
  "id": "四-部署-",
  "level": 2
}, {
  "value": "五、 总结",
  "id": "五-总结",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "本文  详细介绍了基于 Docusaurus + Github Pages 搭建博客的过程，包括环境准备（git 和 Node 下载）、安装脚手架、项目结构、配置（必填和可选字段）、个性化主题、部署（生成静态文件、配置相关文件、本地测试等），最后进行了总结。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "关联问题: Docusaurus有何优势 Node版本如何选择 部署能换分支吗"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "前言",
      children: "前言"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["解决问题时经常看到大佬们的个人博客，于是一直想有一个属于自己的博客，为了满足自己的博客愿望，也为了督促自己要一直学习，小记一下（过程曲折）。暂时接触 React 稍多，而 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Docusaurus"
      }), "是 React 驱动的，所以这里博客是基于", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Docusaurus"
      }), "+", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Github Pages"
      }), "来实现。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["🔗 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Docusaurus"
      }), "官网链接：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://link.juejin.cn/?target=https%3A%2F%2Fdocusaurus.io%2Fzh-CN%2F",
        title: "https://docusaurus.io/zh-CN/",
        children: "docusaurus.io/zh-CN/"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "一-环境准备",
      children: "一、 环境准备"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "git",
      children: "git"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["git 下载链接：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://link.juejin.cn/?target=https%3A%2F%2Fgit-scm.com%2Fdownloads",
        title: "https://git-scm.com/downloads",
        children: "git-scm.com/downloads"
      }), " 自己用的是 Windows 10，下载的是：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fgit-for-windows%2Fgit%2Freleases%2Fdownload%2Fv2.37.3.windows.1%2FGit-2.37.3-64-bit.exe",
        title: "https://github.com/git-for-windows/git/releases/download/v2.37.3.windows.1/Git-2.37.3-64-bit.exe",
        children: "64-bit Git for Windows Setup"
      }), "，其他设备按照对应机型选即可。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(6734)/* ["default"] */ .A) + "",
        width: "1512",
        height: "819"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "node",
      children: "Node"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Node 下载链接：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://link.juejin.cn/?target=https%3A%2F%2Fnodejs.org%2Fzh-cn%2F",
        title: "https://nodejs.org/zh-cn/",
        children: "nodejs.org/zh-cn/"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Docusaurus"
      }), "官方要求 Node.js -- v16.14 或以上版本（你可以运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "node -v"
      }), "命令查看版本号），安装 Node.js 时，建议勾选所有和依赖相关的选项，其他设备按照对应机型选即可。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(1592)/* ["default"] */ .A) + "",
        width: "1512",
        height: "819"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "二安装脚手架",
      children: "二、安装脚手架"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "1-初始化新项目",
      children: "1. 初始化新项目："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-shell",
        children: "npm init docusaurus\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "控制台会提示输入项目名称、模板等信息，这里一直回车向后就可以，这些信息都是可以自己修改的。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "2-项目结构",
      children: "2. 项目结构"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["初始化完成后就会得到如下的项目结构（里面会有一些示例文件，后续删除即可），详细的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://link.juejin.cn/?target=https%3A%2F%2Fdocusaurus.io%2Fzh-CN%2Fdocs%2Finstallation%23project-structure-rundown",
        title: "https://docusaurus.io/zh-CN/docs/installation#project-structure-rundown",
        children: "项目结构解读"
      }), "："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "website ├── blog // 包含博客的 Markdown 文件 │ ├── ... │ └── ... ├── docs // 包含文档的 Markdown 文件 │ ├── ... │ └── ... ├── src // 如页面或自定义 React 组件一类的非文档文件 │ ├──components │ │ └── HomepageFeatures │ │ ├── styles.module.css │ │ └── index.jsindex.js │ ├── css // 页面的 css 样式 │ │ └── custom.css │ └── pages // 所有放在此目录中的 JSX/TSX/MDX 文件都会被转换成网站页面 │ ├── styles.module.css │ └── index.js ├── static // 静态目录，保存头像等文件 │ ├── img │ └── .nojekyll ├── babel.config.js // JavaScript 编译配置文件 ├── docusaurus.config.js // 站点配置文件！！ ├── package.json // 包管理文件 └── sidebars.js // 由文档使用，用于指定侧边栏中的文档顺序\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "3-运行开发服务器",
      children: "3. 运行开发服务器"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-shell",
        children: "# 进入根目录 cd website # 启动服务 npm run start\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["默认情况下，浏览器会自动打开 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://link.juejin.cn/?target=http%3A%2F%2Flocalhost%3A3000",
        title: "http://localhost:3000",
        children: "http://localhost:3000"
      }), " 的新窗口，如下： ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(4362)/* ["default"] */ .A) + "",
        width: "1512",
        height: "811"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "三-配置-",
      children: "三、 配置 ❗"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "docusaurus.config.js"
      }), " 位于你的网站的根目录，包含了你的站点的配置信息。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "必填字段",
      children: "必填字段"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "👆 title：网站标题。 会用于页面元数据中，以及浏览器选项卡标题。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["修改标题", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "title:'Kuriyama'"
      }), "，可以看到： ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(176)/* ["default"] */ .A) + "",
        width: "1512",
        height: "811"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "✌️ url：网站网址。 你可以把它看作是顶级主机名。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["网站网址。 你可以把它看作是顶级主机名。 举个例子，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://link.juejin.cn/?target=https%3A%2F%2Ffacebook.github.io%2Fmetro%2F",
          title: "https://facebook.github.io/metro/",
          children: "facebook.github.io/metro/"
        }), " 的 URL 是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "https://facebook.github.io"
        }), "，而", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "https://docusaurus.io"
        }), "的 URL 就是它本身。这个字段和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "[baseUrl](https://docusaurus.io/zh-CN/docs/api/docusaurus-config#baseUrl)"
        }), "字段相关。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "👌 baseUrl：站点的 base URL。 可以被看作是主机名后的路径。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["比如，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://link.juejin.cn/?target=https%3A%2F%2Ffacebook.github.io%2Fmetro%2F",
          title: "https://facebook.github.io/metro/",
          children: "facebook.github.io/metro/"
        }), " 的 base URL 是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "/metro/"
        }), "。 对于没有路径的网址，baseUrl 应设置为", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "/"
        }), "。这个字段和", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "[url](https://docusaurus.io/zh-CN/docs/api/docusaurus-config#url)"
        }), "字段相关。 开头和末尾始终要包含斜杠。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "可选字段",
      children: "可选字段"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "常用配置",
      children: "常用配置"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "tagline：网站标语。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["修改标语", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "tagline:'没有未来的未来，不是我想要的未来'"
      }), "，可以看到： ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(9287)/* ["default"] */ .A) + "",
        width: "1512",
        height: "811"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "onBrokenLinks：Docusaurus 在检测到无效链接时的行为。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onBrokenLinks:'throw' // 抛出错误"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "onBrokenMarkdownLinks：Docusaurus 在检测到无效 Markdown 链接时的行为。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onBrokenMarkdownLinks:'warn' // 警告"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "favicon：你的网站图标的路径；必须是可以用于链接 href 的 URL。 比如，如果你的图标位于 static/img/favicon.ico："
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "favicon:'img/favicon.ico'"
      }), "，可以看到： ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(298)/* ["default"] */ .A) + "",
        width: "290",
        height: "38"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["i18n：用于", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://link.juejin.cn/?target=https%3A%2F%2Fdocusaurus.io%2Fzh-CN%2Fdocs%2Fi18n%2Fintroduction",
          title: "https://docusaurus.io/zh-CN/docs/i18n/introduction",
          children: "本地化站点"
        }), "的 i18n 配置对象。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "// 设置默认语言为中文简体 i18n: { defaultLocale: 'zh-Hans', locales: ['zh-Hans'], },\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "presets：预设，此处已经有了默认的** classic **预设："
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "presets: [ [ 'classic', /** @type {import('@docusaurus/preset-classic').Options} */ ({ docs: { // 文档 sidebarPath: require.resolve('./sidebars.js'), // 侧边栏 // editUrl: '' // 编辑此页面的链接 }, blog: { // 博客 showReadingTime: true, // 在博文上显示估计阅读时间 // editUrl: '' // 编辑此页面的链接 }, theme: { // 主题 customCss: require.resolve('./src/css/custom.css'), // 自定义 css }, }), ], ],\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "主题配置",
      children: "主题配置"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "在配置导航栏之前我删除了 blog 和 docs 文件夹内的所有内容，并在 docs 文件夹内放了一个 HTML.md 文件。"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "navbar：导航栏，可以配置 title（标题）、logo（图标）等信息"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "navbar: { title: 'Kuriyama的博客', // 标题 hideOnScroll: false, // 下拉界面时不隐藏导航栏 items: [ { type: 'search', // 搜索框 现在还没做好... position: 'right', // 搜索框位置 在右边 }, { type: 'doc', // 把这个项目的类型设置为文档链接。 docId: 'HTML', // 这个项目链接到的文档的 ID。 position: 'right', // 显示位置 在右边 label: '正文', // 项目显示的名称 }, { href: 'https://github.com/Dcose', // 点击图标时跳转到的链接 label: 'GitHub', // 项目显示的名称 position: 'right', // 显示位置 在右边 }, ], },\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["可以看到导航栏的改变： ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(4252)/* ["default"] */ .A) + "",
        width: "1512",
        height: "78"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "prism：语法高亮主题"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "prism: { theme: lightCodeTheme, // 用于浅色模式下代码块的 Prism 主题 darkTheme: darkCodeTheme, // 用于暗黑模式下代码块的 Prism 主题 defaultLanguage: 'javascript', // 项目应该出现在导航栏的哪一侧 },\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "colorMode：主题色彩模式"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "colorMode: { respectPrefersColorScheme: true, // 根据系统配色改变色彩模式 },\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "配置完成的 docusaurus.config.js（含默认配置）："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "const lightCodeTheme = require('prism-react-renderer/themes/github'); const darkCodeTheme = require('prism-react-renderer/themes/dracula'); /** @type {import('@docusaurus/types').Config} */ const config = { title: 'Kuriyama', tagline: '没有未来的未来，不是我想要的未来', url: 'https://your-docusaurus-test-site.com', baseUrl: '/', onBrokenLinks: 'throw', onBrokenMarkdownLinks: 'warn', favicon: 'img/favicon.ico', i18n: { defaultLocale: 'zh-Hans', locales: ['zh-Hans'], }, presets: [ [ 'classic', /** @type {import('@docusaurus/preset-classic').Options} */ ({ docs: { sidebarPath: require.resolve('./sidebars.js'), }, blog: { showReadingTime: true, }, theme: { customCss: require.resolve('./src/css/custom.css'), }, }), ], ], themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({ navbar: { title: 'Kuriyama的博客', hideOnScroll: false, items: [ { type: 'search', position: 'right', }, { type: 'doc', docId: 'HTML', position: 'right', label: '正文', }, { href: 'https://github.com/Dcose', label: 'GitHub', position: 'right', }, ], }, prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme, defaultLanguage: 'javascript', }, colorMode: { respectPrefersColorScheme: true, }, }), }; module.exports = config;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["效果如下： ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(5988)/* ["default"] */ .A) + "",
        width: "1512",
        height: "811"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(4478)/* ["default"] */ .A) + "",
        width: "1512",
        height: "811"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "个性化",
      children: "个性化"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["💯 使用的是", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://link.juejin.cn/?target=https%3A%2F%2Fmessiahhh.github.io%2Fblog%2F",
          title: "https://messiahhh.github.io/blog/",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
            children: "Akara"
          })
        }), "大佬的主题。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "四-部署-",
      children: "四、 部署 ❗❗"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "生成静态文件："
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-shell",
        children: "npm run build\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Docusaurus 只负责构建站点，然后把静态文件输出到 build 文件夹。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["配置", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "docusaurus.config.js"
        }), "："]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "... const config = { url: 'https://dcose.github.io', baseUrl: '/', ... organizationName: 'Dcose', // 一般是 github 的名字 projectName: 'dcose', // 一般是仓库的名称 deploymentBranch: 'gh-pages', // 要把静态文件部署到的分支名称 ... }; module.exports = config;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["配置", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "package.json"
        }), "："]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "{ \"name\": \"dcose\", // 项目名称 ... \"scripts\": { ... \"deploy\": \"GIT_USER=dcose docusaurus deploy\", // 部署用户名设置 ... }, ... }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "本地测试"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "可以快速定位部署项目可能存在的问题："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-shell",
        children: "npm run serve\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "在 github 新建一个仓库"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["名字：dcose.github.io ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(5009)/* ["default"] */ .A) + "",
        width: "1512",
        height: "811"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["在项目的根目录下新建一个", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "deploy.sh"
        }), "脚本文件，注意修改对应的用户名和仓库名："]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-shell",
        children: "#!/usr/bin/env sh # 确保脚本抛出遇到的错误 set -e # 生成静态文件 npm run build # 进入生成的文件夹 cd build # 如果是发布到自定义域名 # echo 'www.example.com' > CNAME git init git add -A git commit -m 'deploy' # 如果发布到 https://<USERNAME>.github.io # git push -f git@github.com:messiahhh/messiahhh.github.io.git master # 如果发布到 https://<USERNAME>.github.io/<REPO> # git push -f git@github.com:messiahhh/blog.git master:gh-pages git push -f https://${access_token}@github.com/Dcose/dcose.github.io.git master:gh-pages cd -\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["切换到项目的根目录，运行", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "deploy.sh"
        }), "脚本文件"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "注意：执行文件会启动 Git Bash，等待执行完成就好"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "打开 github 仓库，可以看到 gh-pages 推送的静态文件了："
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(9642)/* ["default"] */ .A) + "",
        width: "1512",
        height: "811"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["点击 setting，找到 Pages，就可以看到我们生成的", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://link.juejin.cn/?target=https%3A%2F%2Fdcose.github.io%2F",
          title: "https://dcose.github.io/",
          children: "博客地址"
        }), "："]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "image.png",
        src: (__webpack_require__(9573)/* ["default"] */ .A) + "",
        width: "1512",
        height: "811"
      }), " 完成部署！！！"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "五-总结",
      children: "五、 总结"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["关于博客的搭建和部署就暂告一段啦，虽然还有很多功能和插件都没有用到，希望可以在日后的学习中逐渐补全。这算是对于产出的第一次尝试，看了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog",
        title: "https://github.com/mqyqingfeng/Blog",
        children: "mqyqingfeng"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://link.juejin.cn/?target=https%3A%2F%2Fsudongyuer.github.io%2Fblogs%2Fdaily%2F070602.html%23%25E4%25B8%2580%25E3%2580%2581%25E5%2587%2586%25E5%25A4%2587%25E5%25B7%25A5%25E4%25BD%259C",
        title: "https://sudongyuer.github.io/blogs/daily/070602.html#%E4%B8%80%E3%80%81%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C",
        children: "sudongyuer"
      }), " 两位大佬的文章有感而发，想自己也可以有一些学习的记录，同时感谢 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://link.juejin.cn/?target=https%3A%2F%2Fmessiahhh.github.io%2Fblog%2F",
        title: "https://messiahhh.github.io/blog/",
        children: "Akara"
      }), " 大佬的开源主题。本文旨在分享，也希望可以帮助到有需要的人，如有存在错误或不妥的地方，请各位大佬务必帮我指正！！感谢大家！！！希望大家可以一起", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "无限学习，无限进步！！！！"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 5988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/20f8da47abb44002bb09a9847c3a2f93~tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-fd177120158438df4fe1b30260c21cc0.webp");

/***/ }),

/***/ 6734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2386d8ad33f2404e999671c75b72dfa9~tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-dbe7561e7b8f6fffd71392f5bb2f55d1.webp");

/***/ }),

/***/ 4252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,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");

/***/ }),

/***/ 9573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5721e3ba322246d4a0bcea877c6ad3a4~tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-afa03408a19aa209cd51c3c6fec412c5.webp");

/***/ }),

/***/ 9287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5a3f5e4ae1064c0fbdd94517beb4ed95~tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-29d5d63a2321cdba1d72c30644f0dfa5.webp");

/***/ }),

/***/ 1592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6134fe5d7cd449c8982c09a99a221f62~tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-a3ba9d4eab7d9f6b21e310db6a282346.webp");

/***/ }),

/***/ 298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,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");

/***/ }),

/***/ 4478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a6a30378b1b24cfbb54a8746abdb466c~tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-d32599253fd1d0c82b95e14dc8a0d2b5.webp");

/***/ }),

/***/ 4362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b3125aabc7014118a82cdbf3c98c0831~tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-dc9800074a3ffc7f58a1ede05499d953.webp");

/***/ }),

/***/ 5009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c7031180bb344b5294b86f44ffdfda17~tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-3c71e326bf3f0bc10b6c940205827f4f.webp");

/***/ }),

/***/ 9642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ef1aa76548d84f179d0678cc175920b6~tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-c7d2f41d8d084a8b0069a3e5f8284624.webp");

/***/ }),

/***/ 176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fc31f13fa10b40ecb56621679dd99b81~tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-5fdea46c93494d8b7793b43586c5e7d5.webp");

/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 7676:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/docusaurus_github_pages","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/docusaurus_github_pages.md","source":"@site/blog/docusaurus_github_pages.md","title":"Docusaurus+GithubPages搭博客","description":"本文  详细介绍了基于 Docusaurus + Github Pages 搭建博客的过程，包括环境准备（git 和 Node 下载）、安装脚手架、项目结构、配置（必填和可选字段）、个性化主题、部署（生成静态文件、配置相关文件、本地测试等），最后进行了总结。","date":"2024-12-20T03:35:10.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"},{"inline":true,"label":"github pages","permalink":"/blog/tags/github-pages"}],"readingTime":10.625,"hasTruncateMarker":false,"authors":[{"name":"转载","title":"others","key":"转载","page":null}],"frontMatter":{"slug":"docusaurus_github_pages","title":"Docusaurus+GithubPages搭博客","authors":"转载","tags":["docusaurus","github pages"]},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}}');

/***/ })

}]);