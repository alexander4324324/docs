import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c,d as a,a as e,w as r,e as s,b as n}from"./app-jviAgftA.js";const u={},d=e("h1",{id:"built-in-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#built-in-components"},[e("span",null,"Built-in Components")])],-1),m=s(`<h2 id="clientonly" tabindex="-1"><a class="header-anchor" href="#clientonly"><span>ClientOnly</span></a></h2><ul><li>Usage:</li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NonSsrFriendlyComponent</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>This component and its children will only be rendered in client-side. That means, it will not be rendered to HTML during build (SSR).</p><p>If a component is trying to access Browser / DOM APIs directly in <code>setup()</code>, an error will occur during build because those APIs are unavailable in Node.js environment. In such case, you could do either:</p><ul><li>Modify the component to only access Browser / DOM APIs in <code>onBeforeMount()</code> or <code>onMounted()</code> hook.</li><li>Wrap the component with <code>&lt;ClientOnly&gt;</code>.</li></ul></li></ul><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>Content</span></a></h2><ul><li><p>Props:</p><ul><li>path <ul><li>Type: <code>string</code></li><li>Required: <code>false</code></li></ul></li></ul></li><li><p>Usage:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/page.md<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),h=e("li",null,[e("p",null,"Details:"),e("p",null,"This component will render the Markdown content of a page."),e("p",null,[n("If the "),e("code",null,"path"),n(" prop is not provided, it will render the page content of current route.")]),e("p",null,"This component is mainly for developing themes. You won't need it in most cases.")],-1),g=e("p",null,"Also see:",-1),k=s(`<h2 id="routelink" tabindex="-1"><a class="header-anchor" href="#routelink"><span>RouteLink</span></a></h2><ul><li><p>Props:</p><ul><li>to <ul><li>Type: <code>string</code></li><li>Required: <code>true</code></li></ul></li><li>active <ul><li>Type: <code>boolean</code></li><li>Required: <code>false</code></li><li>Default: <code>false</code></li></ul></li><li>activeClass <ul><li>Type: <code>string</code></li><li>Required: <code>false</code></li><li>Default: <code>&#39;route-link-active&#39;</code></li></ul></li></ul></li><li><p>Usage:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouteLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/target-page.md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>target page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouteLink</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouteLink</span> <span class="token attr-name">active</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/current-page.md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>current page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouteLink</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>This component will render a link to the target page.</p><p>If the <code>active</code> prop is set to <code>true</code>, the link will have an extra <code>activeClass</code>. Notice that the active status won&#39;t be updated automatically when the route changes.</p><p>This component is mainly for developing themes. You won&#39;t need it in most cases. For theme authors, it&#39;s recommended to use this component instead of the <code>&lt;RouterLink&gt;</code> component from <code>vue-router</code>.</p></li></ul>`,4);function v(f,y){const o=t("NpmBadge"),l=t("RouteLink");return p(),c("div",null,[d,a(o,{package:"@vuepress/client"}),m,e("ul",null,[h,e("li",null,[g,e("ul",null,[e("li",null,[a(l,{to:"/reference/node-api.html#path"},{default:r(()=>[n("Node API > Page Properties > path")]),_:1})])])])]),k])}const w=i(u,[["render",v],["__file","components.html.vue"]]),C=JSON.parse('{"path":"/reference/components.html","title":"Built-in Components","lang":"en-US","frontmatter":{"icon":"fa6-solid:puzzle-piece","description":"Built-in Components ","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/reference/components.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/reference/components.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Built-in Components"}],["meta",{"property":"og:description","content":"Built-in Components "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-06T03:36:59.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-06T03:36:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Built-in Components\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-06T03:36:59.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"ClientOnly","slug":"clientonly","link":"#clientonly","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[]},{"level":2,"title":"RouteLink","slug":"routelink","link":"#routelink","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1707190619000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2}]},"readingTime":{"minutes":0.94,"words":281},"filePathRelative":"reference/components.md","localizedDate":"December 3, 2023","autoDesc":true}');export{w as comp,C as data};
