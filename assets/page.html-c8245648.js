import{_ as i,W as l,X as c,$ as t,a0 as e,Y as n,Z as a,a1 as o,D as r}from"./framework-46b0e263.js";const u={},h=o(`<h1 id="页面" tabindex="-1"><a class="header-anchor" href="#页面" aria-hidden="true">#</a> 页面</h1><p>VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。</p><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p>默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。</p><p>假设这是你的 Markdown 文件所处的目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),m=t("code",null,"docs",-1),p=t("code",null,"vuepress dev docs",-1),_=o("<table><thead><tr><th>相对路径</th><th>路由路径</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/index.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/getting-started.md</code></td><td><code>/guide/getting-started.html</code></td></tr></tbody></table>",1),g={class:"hint-container tip"},k=t("p",{class:"hint-container-title"},"提示",-1),f=t("p",null,[e("默认配置下， "),t("code",null,"README.md"),e(" 和 "),t("code",null,"index.md"),e(" 都会被转换成 "),t("code",null,"index.html"),e(" ，并且其对应的路由路径都是由斜杠结尾的。然而，如果你想同时保留这两个文件，就可能会造成冲突。")],-1),v=t("code",null,"['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']",-1),b=t("code",null,"README.md",-1),E=t("h2",{id:"frontmatter",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),e(" Frontmatter")],-1),M={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},w=o(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token key atrule">title</span><span class="token punctuation">:</span> 页面的标题
<span class="token key atrule">description</span><span class="token punctuation">:</span> 页面的描述</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=t("code",null,"lang",-1),F=t("code",null,"title",-1),V=t("code",null,"description",-1),D=t("p",null,"同样的，VuePress 有一些内置支持的 Frontmatter 字段，而你使用的主题也可能有它自己的特殊 Frontmatter 。",-1),A={class:"hint-container tip"},R=t("p",{class:"hint-container-title"},"提示",-1),y=t("h2",{id:"内容",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#内容","aria-hidden":"true"},"#"),e(" 内容")],-1),z=t("p",null,[e("页面的主要内容是使用 Markdown 书写的。VuePress 首先会将 Markdown 转换为 HTML ，然后将 HTML 作为 Vue 单文件组件的 "),t("code",null,"<template>"),e(" 。")],-1),L={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"};function P(B,N){const d=r("RouterLink"),s=r("ExternalLinkIcon");return l(),c("div",null,[h,t("p",null,[e("将 "),m,e(" 目录作为你的 "),n(d,{to:"/zh/reference/cli.html"},{default:a(()=>[e("sourceDir")]),_:1}),e(" ，例如你在运行 "),p,e(" 命令。此时，你的 Markdown 文件对应的路由路径为：")]),_,t("div",g,[k,f,t("p",null,[e("在这种情况下，你可以设置 "),n(d,{to:"/zh/reference/config.html#pagepatterns"},{default:a(()=>[e("pagePatterns")]),_:1}),e(" 来避免某个文件被 VuePress 处理，例如使用 "),v,e(" 来排除所有的 "),b,e(" 文件。")])]),E,t("p",null,[e("Markdown 文件可以包含一个 "),t("a",M,[e("YAML"),n(s)]),e(" Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例：")]),w,t("p",null,[e("你肯定注意到 Frontmatter 中的字段和"),n(d,{to:"/zh/guide/configuration.html#config-file"},{default:a(()=>[e("配置文件")]),_:1}),e("中的"),n(d,{to:"/zh/guide/configuration.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE"},{default:a(()=>[e("站点配置")]),_:1}),e("十分类似。你可以通过 Frontmatter 来覆盖当前页面的 "),x,e(", "),F,e(", "),V,e(" 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。")]),D,t("div",A,[R,t("p",null,[e("前往 "),n(d,{to:"/zh/reference/config.html"},{default:a(()=>[e("Frontmatter 参考")]),_:1}),e(" 查看 VuePress 支持的 Frontmatter 配置。")]),t("p",null,[e("前往 "),n(d,{to:"/zh/reference/default-theme/frontmatter.html"},{default:a(()=>[e("默认主题 > Frontmatter 参考")]),_:1}),e(" 查看默认主题的 Frontmatter 配置。")])]),y,z,t("p",null,[e("借助 "),t("a",L,[e("markdown-it"),n(s)]),e(" 和 Vue 模板语法的能力，基础的 Markdown 可以得到很多的扩展功能。接下来，前往 "),n(d,{to:"/zh/guide/markdown.html"},{default:a(()=>[e("Markdown")]),_:1}),e(" 章节来了解 VuePress 中 Markdown 的扩展功能。")])])}const T=i(u,[["render",P],["__file","page.html.vue"]]);export{T as default};
