import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as i,c,a as t,b as e,d as n,w as a,e as s}from"./app-jviAgftA.js";const u={},m=s(`<h1 id="页面" tabindex="-1"><a class="header-anchor" href="#页面"><span>页面</span></a></h1><p>VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。</p><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h2><p>默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。</p><p>假设这是你的 Markdown 文件所处的目录结构：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=t("code",null,"docs",-1),h=t("code",null,"vuepress dev docs",-1),_=s("<table><thead><tr><th>相对路径</th><th>路由路径</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/index.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/getting-started.md</code></td><td><code>/guide/getting-started.html</code></td></tr></tbody></table>",1),g={class:"hint-container tip"},k=t("p",{class:"hint-container-title"},"提示",-1),v=t("p",null,[e("默认配置下， "),t("code",null,"README.md"),e(" 和 "),t("code",null,"index.md"),e(" 都会被转换成 "),t("code",null,"index.html"),e(" ，并且其对应的路由路径都是由斜杠结尾的。然而，如果你想同时保留这两个文件，就可能会造成冲突。")],-1),f=t("code",null,"['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']",-1),b=t("code",null,"README.md",-1),M=t("code",null,":",-1),w=t("code",null,"+",-1),x={href:"https://router.vuejs.org/zh/guide/essentials/route-matching-syntax.html",target:"_blank",rel:"noopener noreferrer"},y=t("h2",{id:"frontmatter",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#frontmatter"},[t("span",null,"Frontmatter")])],-1),E={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},z=s(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token key atrule">title</span><span class="token punctuation">:</span> 页面的标题
<span class="token key atrule">description</span><span class="token punctuation">:</span> 页面的描述</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),V=t("code",null,"lang",-1),F=t("code",null,"title",-1),D=t("code",null,"description",-1),A=t("p",null,"同样的，VuePress 有一些内置支持的 Frontmatter 字段，而你使用的主题也可能有它自己的特殊 Frontmatter 。",-1),P={class:"hint-container tip"},R=t("p",{class:"hint-container-title"},"提示",-1),T={href:"https://ecosystem.vuejs.press/zh/themes/default/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},N=t("h2",{id:"内容",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#内容"},[t("span",null,"内容")])],-1),L=t("p",null,[e("页面的主要内容是使用 Markdown 书写的。VuePress 首先会将 Markdown 转换为 HTML ，然后将 HTML 作为 Vue 单文件组件的 "),t("code",null,"<template>"),e(" 。")],-1),B={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"};function j(C,H){const o=d("RouteLink"),r=d("ExternalLinkIcon");return i(),c("div",null,[m,t("p",null,[e("将 "),p,e(" 目录作为你的 "),n(o,{to:"/zh/reference/cli.html"},{default:a(()=>[e("sourceDir")]),_:1}),e(" ，例如你在运行 "),h,e(" 命令。此时，你的 Markdown 文件对应的路由路径为：")]),_,t("div",g,[k,v,t("p",null,[e("在这种情况下，你可以设置 "),n(o,{to:"/zh/reference/config.html#pagepatterns"},{default:a(()=>[e("pagePatterns")]),_:1}),e(" 来避免某个文件被 VuePress 处理，例如使用 "),f,e(" 来排除所有的 "),b,e(" 文件。")]),t("p",null,[e("此外，一些符号如 "),M,e(" 和 "),w,e(" 可能对 vue-router 有特殊含义，因此你应该避免使用它们，请参阅 "),t("a",x,[e("vue-router 文档"),n(r)]),e(" 了解更多详情。")])]),y,t("p",null,[e("Markdown 文件可以包含一个 "),t("a",E,[e("YAML"),n(r)]),e(" Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例：")]),z,t("p",null,[e("你肯定注意到 Frontmatter 中的字段和"),n(o,{to:"/zh/guide/configuration.html#config-file"},{default:a(()=>[e("配置文件")]),_:1}),e("中的"),n(o,{to:"/zh/guide/configuration.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE"},{default:a(()=>[e("站点配置")]),_:1}),e("十分类似。你可以通过 Frontmatter 来覆盖当前页面的 "),V,e(", "),F,e(", "),D,e(" 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。")]),A,t("div",P,[R,t("p",null,[e("前往 "),n(o,{to:"/zh/reference/frontmatter.html"},{default:a(()=>[e("Frontmatter 参考")]),_:1}),e(" 查看 VuePress 支持的 Frontmatter 配置。")]),t("p",null,[e("前往 "),t("a",T,[e("默认主题 > Frontmatter 参考"),n(r)]),e(" 查看默认主题的 Frontmatter 配置。")])]),N,L,t("p",null,[e("借助 "),t("a",B,[e("markdown-it"),n(r)]),e(" 和 Vue 模板语法的能力，基础的 Markdown 可以得到很多的扩展功能。接下来，前往 "),n(o,{to:"/zh/guide/markdown.html"},{default:a(()=>[e("Markdown")]),_:1}),e(" 章节来了解 VuePress 中 Markdown 的扩展功能。")])])}const I=l(u,[["render",j],["__file","page.html.vue"]]),J=JSON.parse('{"path":"/zh/guide/page.html","title":"页面","lang":"zh-CN","frontmatter":{"icon":"fa6-solid:file","description":"页面 VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。 路由 默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。 假设这是你的 Markdown 文件所处的目录结构： 将 docs 目录作为你的 ，例如你在运行 vuepress dev docs 命令。此时，你...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/guide/page.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/guide/page.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"页面"}],["meta",{"property":"og:description","content":"页面 VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。 路由 默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。 假设这是你的 Markdown 文件所处的目录结构： 将 docs 目录作为你的 ，例如你在运行 vuepress dev docs 命令。此时，你..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"页面\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"路由","slug":"路由","link":"#路由","children":[]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[]},{"level":2,"title":"内容","slug":"内容","link":"#内容","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1}]},"readingTime":{"minutes":1.96,"words":587},"filePathRelative":"zh/guide/page.md","localizedDate":"2023年12月3日","autoDesc":true}');export{I as comp,J as data};
