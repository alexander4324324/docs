import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as p,c as r,d as l,a as e,b as t,w as a,e as d}from"./app-jviAgftA.js";const c={},u=e("h1",{id:"theme-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme-api"},[e("span",null,"Theme API")])],-1),h=d(`<h2 id="basic-options" tabindex="-1"><a class="header-anchor" href="#basic-options"><span>Basic Options</span></a></h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Name of the theme.</p><p>It should follow the naming convention, and ensure consistency with the package name when publishing to NPM:</p><ul><li>Non-scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple"><span>multiple</span></a></h3><ul><li><p>Details:</p><p>A theme should never be used multiple times, so this option is not supported in theme API.</p></li></ul><h2 id="theme-specific-options" tabindex="-1"><a class="header-anchor" href="#theme-specific-options"><span>Theme Specific Options</span></a></h2><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends"><span>extends</span></a></h3><ul><li><p>Type: <code>Theme</code></p></li><li><p>Details:</p><p>The theme to inherit.</p><p>All of the Theme API of the parent theme will be inherited, but the child theme will not override the parent theme directly. Theme specific options will override according to following rules:</p><ul><li><a href="#plugins">plugins</a>: When a same plugin is used in both child and parent theme, if the plugin does not support to be used multiple times, only the one used in the child theme will take effect.</li><li><a href="#templatebuild">templateBuild</a> / <a href="#templatedev">templateDev</a>: Child theme templates will override parent theme templates.</li></ul><p>Multi-level inheritance is supported, i.e. theme B could be extended from theme A, and then theme C could be extended from theme B. In other words, a theme could have a parent theme, a grandparent theme and so on.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/utils&#39;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// inherit the default theme</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins"><span>plugins</span></a></h3>`,10),m=e("li",null,[e("p",null,[t("Type: "),e("code",null,"(Plugin | Plugin[])[]")])],-1),f=e("li",null,[e("p",null,"Details:"),e("p",null,"Plugins to use in the theme.")],-1),g=e("p",null,"Also see:",-1),v=e("h3",{id:"templatebuild",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuild"},[e("span",null,"templateBuild")])],-1),_=e("li",null,[e("p",null,[t("Type: "),e("code",null,"string")])],-1),b=e("p",null,"Details:",-1),k=e("p",null,"Specify the path of the HTML template for build.",-1),y=e("p",null,"Also see:",-1),T=e("h3",{id:"templatebuildrenderer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuildrenderer"},[e("span",null,"templateBuildRenderer")])],-1),x=e("li",null,[e("p",null,[t("Type: "),e("code",null,"TemplateRenderer")])],-1),w=e("p",null,"Details:",-1),A=e("p",null,"Specify the HTML template renderer to be used for build.",-1),B=e("p",null,"Also see:",-1),P=e("h3",{id:"templatedev",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatedev"},[e("span",null,"templateDev")])],-1),D=e("li",null,[e("p",null,[t("Type: "),e("code",null,"string")])],-1),I=e("p",null,"Details:",-1),N=e("p",null,"Specify the HTML template for dev.",-1),S=e("p",null,"Also see:",-1);function C(R,M){const i=s("NpmBadge"),n=s("RouteLink");return p(),r("div",null,[u,l(i,{package:"@vuepress/core"}),e("p",null,[t("VuePress theme also works as a plugin, so Theme API can accept all the options of "),l(n,{to:"/reference/plugin-api.html"},{default:a(()=>[t("Plugin API")]),_:1}),t(" with following differences.")]),h,e("ul",null,[m,f,e("li",null,[g,e("ul",null,[e("li",null,[l(n,{to:"/reference/config.html#plugins"},{default:a(()=>[t("Config > plugins")]),_:1})])])])]),v,e("ul",null,[_,e("li",null,[b,k,e("p",null,[t("It would override the default value of "),l(n,{to:"/reference/config.html#templatebuild"},{default:a(()=>[t("templateBuild")]),_:1}),t(", and could be overridden by user config.")])]),e("li",null,[y,e("ul",null,[e("li",null,[l(n,{to:"/reference/config.html#templatebuild"},{default:a(()=>[t("Config > templateBuild")]),_:1})])])])]),T,e("ul",null,[x,e("li",null,[w,A,e("p",null,[t("It would override the default value of "),l(n,{to:"/reference/config.html#templatebuildrenderer"},{default:a(()=>[t("templateBuildRenderer")]),_:1}),t(", and could be overridden by user config.")])]),e("li",null,[B,e("ul",null,[e("li",null,[l(n,{to:"/reference/config.html#templatebuildrenderer"},{default:a(()=>[t("Config > templateBuildRenderer")]),_:1})])])])]),P,e("ul",null,[D,e("li",null,[I,N,e("p",null,[t("It would override the default value of "),l(n,{to:"/reference/config.html#templatedev"},{default:a(()=>[t("templateDev")]),_:1}),t(", but could be overridden by user config.")])]),e("li",null,[S,e("ul",null,[e("li",null,[l(n,{to:"/reference/config.html#templatedev"},{default:a(()=>[t("Config > templateDev")]),_:1})])])])])])}const O=o(c,[["render",C],["__file","theme-api.html.vue"]]),z=JSON.parse('{"path":"/reference/theme-api.html","title":"Theme API","lang":"en-US","frontmatter":{"icon":"fa6-solid:palette","description":"Theme API ","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/reference/theme-api.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/reference/theme-api.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Theme API"}],["meta",{"property":"og:description","content":"Theme API "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Theme API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Basic Options","slug":"basic-options","link":"#basic-options","children":[{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"multiple","slug":"multiple","link":"#multiple","children":[]}]},{"level":2,"title":"Theme Specific Options","slug":"theme-specific-options","link":"#theme-specific-options","children":[{"level":3,"title":"extends","slug":"extends","link":"#extends","children":[]},{"level":3,"title":"plugins","slug":"plugins","link":"#plugins","children":[]},{"level":3,"title":"templateBuild","slug":"templatebuild","link":"#templatebuild","children":[]},{"level":3,"title":"templateBuildRenderer","slug":"templatebuildrenderer","link":"#templatebuildrenderer","children":[]},{"level":3,"title":"templateDev","slug":"templatedev","link":"#templatedev","children":[]}]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.23,"words":368},"filePathRelative":"reference/theme-api.md","localizedDate":"December 3, 2023","autoDesc":true}');export{O as comp,z as data};
