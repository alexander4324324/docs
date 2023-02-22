import{_ as o,W as l,X as d,$ as n,a0 as e,Y as s,Z as t,a1 as i,D as r}from"./framework-46b0e263.js";const c={},p=i(`<h1 id="migrating-from-v1" tabindex="-1"><a class="header-anchor" href="#migrating-from-v1" aria-hidden="true">#</a> Migrating from v1</h1><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Plugins and themes of VuePress v1 are not compatible with VuePress v2. You need to update them to corresponding v2 version.</p></div><p>Some major changes and enhancements of VuePress v2:</p><ul><li>VuePress v2 is now using Vue 3, so make sure your components and other client files are compatible with Vue 3.</li><li>VuePress v2 is developed with TypeScript, so it provides better TS support now. It&#39;s highly recommended to use TypeScript to develop plugins and themes. VuePress config file also supports TypeScript, and you can use <code>.vuepress/config.ts</code> directly.</li><li>VuePress v2 supports both Webpack and Vite as bundler. Now Vite is the default bundler, while you can still choose to use Webpack. You can even use Vite in dev mode to get better development experience, and use Webpack in build mode to get better browser compatibility.</li><li>VuePress v2 is now released as pure ESM packages, and CommonJS config files are no longer supported.</li></ul><p>Core ideas and processes of VuePress v2 are the same with v1, while v2 API has been re-designed and becomes more normalized. So you might encounter breaking changes when migrating an existing v1 project to v2. This guide is here to help you migrating v1 sites / plugins / themes to v2.</p><ul><li>If you are a common user, you need to read the guide <a href="#for-users">for users</a>.</li><li>If you are a plugin author, you need to read the guide <a href="#for-plugin-authors">for plugin authors</a>.</li><li>If you are a theme author, you need to read the guide <a href="#for-theme-authors">for theme authors</a>.</li></ul><h2 id="for-users" tabindex="-1"><a class="header-anchor" href="#for-users" aria-hidden="true">#</a> For Users</h2><h3 id="user-config-change" tabindex="-1"><a class="header-anchor" href="#user-config-change" aria-hidden="true">#</a> User Config Change</h3><p>Config file should be in ESM format, and CommonJS format config file is no longer supported.</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code>// .vuepress/config.js

<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> module.exports = {
</span><span class="token prefix deleted">-</span><span class="token line">   // user config
</span><span class="token prefix deleted">-</span><span class="token line"> }
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> export default {
</span><span class="token prefix inserted">+</span><span class="token line">   // user config
</span><span class="token prefix inserted">+</span><span class="token line"> }
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h4><p>Using a theme via string is not supported. Import the theme directly.</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> module.exports = {
</span><span class="token prefix deleted">-</span><span class="token line">   theme: &#39;@vuepress/theme-default&#39;,
</span><span class="token prefix deleted">-</span><span class="token line">   themeConfig: {
</span><span class="token prefix deleted">-</span><span class="token line">     // default theme config
</span><span class="token prefix deleted">-</span><span class="token line">   },
</span><span class="token prefix deleted">-</span><span class="token line"> }
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import { defaultTheme } from &#39;vuepress&#39;
</span><span class="token prefix inserted">+</span><span class="token line"> export default {
</span><span class="token prefix inserted">+</span><span class="token line">   theme: defaultTheme({
</span><span class="token prefix inserted">+</span><span class="token line">     // default theme config
</span><span class="token prefix inserted">+</span><span class="token line">   })
</span><span class="token prefix inserted">+</span><span class="token line"> }
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="themeconfig" tabindex="-1"><a class="header-anchor" href="#themeconfig" aria-hidden="true">#</a> themeConfig</h4><p>Removed. Set config to the theme directly.</p><h4 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h4><p>Using a plugin via string is not supported. Import the plugin directly.</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> module.exports = {
</span><span class="token prefix deleted">-</span><span class="token line">   plugins: [
</span><span class="token prefix deleted">-</span><span class="token line">     [
</span><span class="token prefix deleted">-</span><span class="token line">       &#39;@vuepress/plugin-google-analytics&#39;,
</span><span class="token prefix deleted">-</span><span class="token line">       {
</span><span class="token prefix deleted">-</span><span class="token line">         id: &#39;G-XXXXXXXXXX&#39;,
</span><span class="token prefix deleted">-</span><span class="token line">       },
</span><span class="token prefix deleted">-</span><span class="token line">     ],
</span><span class="token prefix deleted">-</span><span class="token line">   ],
</span><span class="token prefix deleted">-</span><span class="token line"> }
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import { googleAnalyticsPlugin } from &#39;@vuepress/plugin-google-analytics&#39;
</span><span class="token prefix inserted">+</span><span class="token line"> export default {
</span><span class="token prefix inserted">+</span><span class="token line">   plugins: [
</span><span class="token prefix inserted">+</span><span class="token line">     googleAnalyticsPlugin({
</span><span class="token prefix inserted">+</span><span class="token line">         id: &#39;G-XXXXXXXXXX&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">     }),
</span><span class="token prefix inserted">+</span><span class="token line">   ],
</span><span class="token prefix inserted">+</span><span class="token line"> }
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="shouldprefetch" tabindex="-1"><a class="header-anchor" href="#shouldprefetch" aria-hidden="true">#</a> shouldPrefetch</h4><p>Default value is changed from <code>() =&gt; true</code> to <code>true</code>.</p><h4 id="extrawatchfiles" tabindex="-1"><a class="header-anchor" href="#extrawatchfiles" aria-hidden="true">#</a> extraWatchFiles</h4><p>Removed.</p>`,22),u=n("h4",{id:"patterns",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#patterns","aria-hidden":"true"},"#"),e(" patterns")],-1),h=n("p",null,[e("Renamed to "),n("code",null,"pagePatterns")],-1),m=n("h4",{id:"markdown-linenumbers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-linenumbers","aria-hidden":"true"},"#"),e(" markdown.lineNumbers")],-1),f=n("p",null,[e("Default value is changed from "),n("code",null,"false"),e(" to "),n("code",null,"true"),e(".")],-1),g=n("h4",{id:"markdown-pagesuffix",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-pagesuffix","aria-hidden":"true"},"#"),e(" markdown.pageSuffix")],-1),v=n("p",null,"Removed.",-1),k=n("h4",{id:"markdown-externallinks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-externallinks","aria-hidden":"true"},"#"),e(" markdown.externalLinks")],-1),b=n("h4",{id:"markdown-toc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-toc","aria-hidden":"true"},"#"),e(" markdown.toc")],-1),_=n("p",null,"Changed.",-1),x=n("h4",{id:"markdown-plugins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-plugins","aria-hidden":"true"},"#"),e(" markdown.plugins")],-1),y=n("p",null,"Removed.",-1),w=n("h4",{id:"markdown-extendmarkdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-extendmarkdown","aria-hidden":"true"},"#"),e(" markdown.extendMarkdown")],-1),C=n("p",null,"Removed.",-1),P=n("h4",{id:"markdown-extractheaders",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-extractheaders","aria-hidden":"true"},"#"),e(" markdown.extractHeaders")],-1),S=i(`<h4 id="webpack-related-configs" tabindex="-1"><a class="header-anchor" href="#webpack-related-configs" aria-hidden="true">#</a> Webpack Related Configs</h4><p>All webpack related configs are moved to options of <code>@vuepress/bundler-webpack</code>, including:</p><ul><li><code>postcss</code></li><li><code>stylus</code></li><li><code>scss</code></li><li><code>sass</code></li><li><code>less</code></li><li><code>chainWebpack</code></li><li><code>configureWebpack</code></li><li><code>evergreen</code>: default value is changed from <code>false</code> to <code>true</code></li></ul><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> module.exports = {
</span><span class="token prefix deleted">-</span><span class="token line">   sass: { /* ... */ },
</span><span class="token prefix deleted">-</span><span class="token line"> }
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import { webpackBundler } from &#39;@vuepress/bundler-webpack&#39;
</span><span class="token prefix inserted">+</span><span class="token line"> export default {
</span><span class="token prefix inserted">+</span><span class="token line">   bundler: webpackBundler({
</span><span class="token prefix inserted">+</span><span class="token line">     sass: { /* ... */ },
</span><span class="token prefix inserted">+</span><span class="token line">   }),
</span><span class="token prefix inserted">+</span><span class="token line"> }
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),T=n("h3",{id:"frontmatter-change",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#frontmatter-change","aria-hidden":"true"},"#"),e(" Frontmatter Change")],-1),A=n("h4",{id:"meta",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#meta","aria-hidden":"true"},"#"),e(" meta")],-1),V=n("p",null,"Removed.",-1),F=i(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
      <span class="token key atrule">content</span><span class="token punctuation">:</span> bar
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> link
    <span class="token punctuation">-</span> <span class="token key atrule">rel</span><span class="token punctuation">:</span> canonical
      <span class="token key atrule">href</span><span class="token punctuation">:</span> foobar
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> script
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> console.log(&#39;hello from frontmatter&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Has the same structure with:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&quot;canonical&quot;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&quot;foobar&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">console.log(&#39;hello from frontmatter&#39;);</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="permalink-patterns-change" tabindex="-1"><a class="header-anchor" href="#permalink-patterns-change" aria-hidden="true">#</a> Permalink Patterns Change</h3><ul><li><code>:i_month</code>: removed</li><li><code>:i_day</code>: removed</li><li><code>:minutes</code>: removed (undocumented in v1)</li><li><code>:seconds</code>: removed (undocumented in v1)</li><li><code>:regular</code>: renamed to <code>:raw</code></li></ul>`,5),X=n("h3",{id:"palette-system-change",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#palette-system-change","aria-hidden":"true"},"#"),e(" Palette System Change")],-1),q=n("p",null,[e("The stylus palette system of VuePress v1 (i.e. "),n("code",null,"styles/palette.styl"),e(" and "),n("code",null,"styles/index.styl"),e(") is no longer provided by VuePress Core.")],-1),M=n("p",null,"Theme authors can use their own way to allow users to customize styles, and not be limited with stylus.",-1),j=n("h3",{id:"conventional-files-change",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#conventional-files-change","aria-hidden":"true"},"#"),e(" Conventional Files Change")],-1),I=n("h4",{id:"vuepress-enhanceapp-js",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-enhanceapp-js","aria-hidden":"true"},"#"),e(" .vuepress/enhanceApp.js")],-1),D=n("p",null,[e("Renamed to "),n("code",null,".vuepress/client.{js,ts}"),e(", and the usage has been changed, too.")],-1),W=n("h4",{id:"vuepress-components",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-components","aria-hidden":"true"},"#"),e(" .vuepress/components/")],-1),Y=n("p",null,"Files in this directory will not be registered as Vue components automatically.",-1),R=n("code",null,".vuepress/client.{js,ts}",-1),B=n("h4",{id:"vuepress-theme",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-theme","aria-hidden":"true"},"#"),e(" .vuepress/theme/")],-1),N=n("p",null,"This directory will not be used as local theme implicitly if it is existed.",-1),U=i('<h3 id="markdown-slot-change" tabindex="-1"><a class="header-anchor" href="#markdown-slot-change" aria-hidden="true">#</a> Markdown slot Change</h3><p>Markdown slot is no longer supported.</p><h3 id="cli-change" tabindex="-1"><a class="header-anchor" href="#cli-change" aria-hidden="true">#</a> CLI Change</h3><h4 id="eject-command" tabindex="-1"><a class="header-anchor" href="#eject-command" aria-hidden="true">#</a> eject command</h4><p>Removed.</p><h4 id="cache-options" tabindex="-1"><a class="header-anchor" href="#cache-options" aria-hidden="true">#</a> cache options</h4><ul><li><code>-c, --cache [cache]</code>: changed to <code>--cache &lt;cache&gt;</code>, which means that the shorthand <code>-c</code> is not for <code>cache</code> option, and the value of <code>cache</code> option is not optional.</li><li><code>--no-cache</code>: renamed to <code>--clean-cache</code> .</li></ul><h3 id="default-theme-change" tabindex="-1"><a class="header-anchor" href="#default-theme-change" aria-hidden="true">#</a> Default Theme Change</h3><h4 id="built-in-components" tabindex="-1"><a class="header-anchor" href="#built-in-components" aria-hidden="true">#</a> Built-in Components</h4><ul><li><code>&lt;CodeGroup /&gt;</code> and <code>&lt;CodeBlock /&gt;</code> renamed to <code>&lt;CodeGroup /&gt;</code> and <code>&lt;CodeGroupItem /&gt;</code></li><li><code>&lt;Badge /&gt;</code><ul><li><code>$badgeErrorColor</code> palette variable renamed to <code>$badgeDangerColor</code></li><li><code>type</code> prop only accepts <code>tip</code>, <code>warning</code> and <code>danger</code> now</li></ul></li></ul><h4 id="palette-system" tabindex="-1"><a class="header-anchor" href="#palette-system" aria-hidden="true">#</a> Palette System</h4><p>The palette system of default theme has migrated to SASS and CSS variables.</p>',12),G=n("h4",{id:"theme-config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#theme-config","aria-hidden":"true"},"#"),e(" Theme Config")],-1),E=n("p",null,"Default theme config has been changed a lot. You'd better check the config reference of v2 default theme to migrate it properly.",-1),L=i('<h3 id="official-plugins-change" tabindex="-1"><a class="header-anchor" href="#official-plugins-change" aria-hidden="true">#</a> Official Plugins Change</h3><p>Check the v2 docs of official plugins.</p><h3 id="community-themes-and-plugins" tabindex="-1"><a class="header-anchor" href="#community-themes-and-plugins" aria-hidden="true">#</a> Community Themes and Plugins</h3><p>Themes and plugins of v1 are not compatible with v2.</p><p>Please make sure that those themes and plugins you are using have supported v2, and refer to their own documentation for migration guide.</p><h2 id="for-plugin-authors" tabindex="-1"><a class="header-anchor" href="#for-plugin-authors" aria-hidden="true">#</a> For Plugin Authors</h2><p>Some major breaking changes:</p>',7),$=n("li",null,"You cannot use other plugins in your plugin anymore, which avoids lots of potential issues caused by plugin nesting. If your plugin depends on other plugins, you could list them in the docs to ask users import them manually. Alternatively, you can provide users with an array of plugins for convenience.",-1),z=n("li",null,[e("Most of the v1 hooks have equivalents in v2. The only exception is "),n("code",null,"extendsCli"),e(", which has been removed.")],-1),H=i('<h3 id="plugin-api-change" tabindex="-1"><a class="header-anchor" href="#plugin-api-change" aria-hidden="true">#</a> Plugin API Change</h3><ul><li><code>plugins</code>: removed</li><li><code>ready</code>: renamed to <code>onPrepared</code></li><li><code>updated</code>: renamed to <code>onWatched</code></li><li><code>generated</code>: renamed to <code>onGenerated</code></li><li><code>additionalPages</code>: removed, use <code>app.pages.push(createPage())</code> in <code>onInitialized</code> hook</li><li><code>clientDynamicModules</code>: removed, use <code>app.writeTemp()</code> in <code>onPrepared</code> hook</li><li><code>enhanceAppFiles</code>: removed, use <code>clientConfigFile</code> hook</li><li><code>globalUIComponents</code>: removed, use <code>clientConfigFile</code> hook</li><li><code>clientRootMixin</code>: removed, use <code>clientConfigFile</code> hook</li><li><code>extendMarkdown</code>: renamed to <code>extendsMarkdown</code></li><li><code>chainMarkdown</code>: removed</li><li><code>extendPageData</code>: renamed to <code>extendsPage</code></li><li><code>extendsCli</code>: removed</li><li><code>configureWebpack</code>: removed</li><li><code>chainWebpack</code>: removed</li><li><code>beforeDevServer</code>: removed</li><li><code>afterDevServer</code>: removed</li></ul>',2),J=n("h2",{id:"for-theme-authors",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#for-theme-authors","aria-hidden":"true"},"#"),e(" For Theme Authors")],-1),O=n("p",null,"Although we do not allow using other plugins in a plugin anymore, you can still use plugins in your theme.",-1),Z=n("p",null,"Some major breaking changes:",-1),K=n("strong",null,"conventional theme directory structure",-1),Q=n("li",null,[e("The file "),n("code",null,"theme/enhanceApp.js"),e(" will not be used as client app enhance file implicitly. You need to specify it explicitly in "),n("code",null,"clientConfigFile"),e(" hook.")],-1),ee=n("code",null,"theme/global-components/",-1),ne=n("code",null,"clientConfigFile",-1),ae=i("<li>Files in <code>theme/layouts/</code> directory will not be registered as layout components automatically. You need to specify it explicitly in <code>layouts</code> option in <code>clientConfigFile</code>.</li><li>Files in <code>theme/templates/</code> directory will not be used as dev / ssr template automatically. You need to specify theme explicitly in <code>templateBuild</code> and <code>templateDev</code> option.</li><li>Always provide a valid js entry file, and do not use <code>&quot;main&quot;: &quot;layouts/Layout.vue&quot;</code> as the theme entry anymore.</li>",3),se=n("code",null,"themeConfig",-1),te=n("code",null,"themeConfig",-1),ie=n("code",null,"this.$site.themeConfig",-1),oe=n("code",null,"useThemeData",-1),le=n("li",null,[e("For scalability concerns, "),n("code",null,"this.$site.pages"),e(" is not available any more.")],-1),de=n("h3",{id:"theme-api-change",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#theme-api-change","aria-hidden":"true"},"#"),e(" Theme API Change")],-1),re=n("h4",{id:"layouts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#layouts","aria-hidden":"true"},"#"),e(" layouts")],-1),ce=n("p",null,"Removed.",-1),pe=n("p",null,"Now you need to specify layout component in the client config file of your theme.",-1),ue=n("h4",{id:"extend",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#extend","aria-hidden":"true"},"#"),e(" extend")],-1),he=n("p",null,[e("Renamed to "),n("code",null,"extends"),e(".")],-1),me=n("p",null,[e("You can still inherit a parent theme with "),n("code",null,"extends: parentTheme()"),e(", which will extends the plugins, layouts, etc.")],-1),fe=n("code",null,"@theme",-1),ge=n("code",null,"@parent-theme",-1);function ve(ke,be){const a=r("RouterLink");return l(),d("div",null,[p,n("p",null,[e("You can watch files manually in "),s(a,{to:"/reference/plugin-api.html#onwatched"},{default:t(()=>[e("onWatched")]),_:1}),e(" hook.")]),u,h,m,n("p",null,[e("Moved to "),s(a,{to:"/reference/config.html#markdown-code-linenumbers"},{default:t(()=>[e("markdown.code.lineNumbers")]),_:1}),e(".")]),f,g,v,k,n("p",null,[e("Moved to "),s(a,{to:"/reference/config.html#markdown-links"},{default:t(()=>[e("markdown.links.externalAttrs")]),_:1}),e(".")]),b,_,n("p",null,[e("See "),s(a,{to:"/reference/config.html#markdown-toc"},{default:t(()=>[e("Config > markdown.toc")]),_:1})]),x,y,n("p",null,[e("Use markdown-it plugins in "),s(a,{to:"/reference/plugin-api.html#extendsmarkdown"},{default:t(()=>[e("extendsMarkdown")]),_:1}),e(" hook.")]),w,C,n("p",null,[e("Use "),s(a,{to:"/reference/plugin-api.html#extendsmarkdown"},{default:t(()=>[e("extendsMarkdown")]),_:1}),e(" hook.")]),P,n("p",null,[e("Moved to "),s(a,{to:"/reference/config.html#markdown-headers"},{default:t(()=>[e("markdown.headers")]),_:1}),e(".")]),S,n("p",null,[e("Please refer to "),s(a,{to:"/guide/bundler.html"},{default:t(()=>[e("Guide > Bundler")]),_:1}),e(".")]),T,A,V,n("p",null,[e("Use "),s(a,{to:"/reference/frontmatter.html#head"},{default:t(()=>[e("head")]),_:1}),e(" instead. For example:")]),F,n("p",null,[e("See "),s(a,{to:"/reference/frontmatter.html#permalinkpattern"},{default:t(()=>[e("Frontmatter > permalinkPattern")]),_:1}),e(".")]),X,q,n("p",null,[e("The palette system is extracted to "),s(a,{to:"/reference/plugin/palette.html"},{default:t(()=>[e("@vuepress/plugin-palette")]),_:1}),e(".")]),M,n("p",null,[e("If you are using default theme, the palette system is still available but migrated to SASS, while most variables have been migrated to CSS variables. See "),s(a,{to:"/reference/default-theme/styles.html"},{default:t(()=>[e("Default Theme > Styles")]),_:1}),e(".")]),j,I,D,n("p",null,[e("See "),s(a,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:t(()=>[e("Advanced > Cookbook > Usage of Client Config")]),_:1}),e(".")]),W,Y,n("p",null,[e("You need to use "),s(a,{to:"/reference/plugin/register-components.html"},{default:t(()=>[e("@vuepress/plugin-register-components")]),_:1}),e(", or register your components manually in "),R,e(".")]),B,N,n("p",null,[e("You need to import and set your local theme via "),s(a,{to:"/reference/config.html#theme"},{default:t(()=>[e("theme")]),_:1}),e(" option.")]),U,n("p",null,[e("See "),s(a,{to:"/reference/default-theme/styles.html"},{default:t(()=>[e("Default Theme > Styles")]),_:1}),e(".")]),G,E,n("p",null,[e("See "),s(a,{to:"/reference/default-theme/config.html"},{default:t(()=>[e("Default Theme > Config")]),_:1}),e(".")]),L,n("ul",null,[$,z,n("li",null,[e("Webpack related hooks are removed, because VuePress Core has decoupled with webpack. You can try to use "),s(a,{to:"/reference/plugin-api.html#extendsbundleroptions"},{default:t(()=>[e("extendsBundlerOptions")]),_:1}),e(" hook for similar purpose, and make sure to work with all bundlers.")])]),n("p",null,[e("For more detailed guide about how to write a plugin in v2, see "),s(a,{to:"/advanced/plugin.html"},{default:t(()=>[e("Advanced > Writing a Plugin")]),_:1}),e(".")]),H,n("p",null,[e("See "),s(a,{to:"/reference/plugin-api.html"},{default:t(()=>[e("Plugin API")]),_:1}),e(".")]),J,O,Z,n("ul",null,[n("li",null,[e("There is no "),K,e(" anymore. "),n("ul",null,[Q,n("li",null,[e("Files in "),ee,e(" directory will not be registered as Vue components automatically. You need to use "),s(a,{to:"/reference/plugin/register-components.html"},{default:t(()=>[e("@vuepress/plugin-register-components")]),_:1}),e(", or register components manually in "),ne,e(".")]),ae])]),n("li",null,[se,e(" is removed from user config and site data. To access the "),te,e(" as you would via "),ie,e(" in v1, we now recommend using the "),s(a,{to:"/reference/plugin/theme-data.html"},{default:t(()=>[e("@vuepress/plugin-theme-data")]),_:1}),e(" plugin and its "),oe,e(" composition API.")]),n("li",null,[e("Stylus is no longer the default CSS pre-processor, and the stylus palette system is not embedded. If you still want to use similar palette system as v1, "),s(a,{to:"/reference/plugin/palette.html"},{default:t(()=>[e("@vuepress/plugin-palette")]),_:1}),e(" may help.")]),n("li",null,[e("Markdown code blocks syntax highlighting by Prism.js is not embedded by default. You can use either "),s(a,{to:"/reference/plugin/prismjs.html"},{default:t(()=>[e("@vuepress/plugin-prismjs")]),_:1}),e(" or "),s(a,{to:"/reference/plugin/shiki.html"},{default:t(()=>[e("@vuepress/plugin-shiki")]),_:1}),e(", or implement syntax highlighting in your own way.")]),le]),n("p",null,[e("For more detailed guide about how to write a theme in v2, see "),s(a,{to:"/advanced/theme.html"},{default:t(()=>[e("Advanced > Writing a Theme")]),_:1}),e(".")]),de,re,ce,pe,n("p",null,[e("See "),s(a,{to:"/advanced/theme.html"},{default:t(()=>[e("Advanced > Writing a theme")]),_:1}),e(".")]),ue,he,me,n("p",null,[e("You can refer to "),s(a,{to:"/reference/default-theme/extending.html"},{default:t(()=>[e("Default Theme > Extending")]),_:1}),e(" for how to extend default theme.")]),n("p",null,[e("The "),fe,e(" and "),ge,e(" aliases are removed by default, but you can still make a extendable theme with similar approach, see "),s(a,{to:"/advanced/cookbook/making-a-theme-extendable.html"},{default:t(()=>[e("Advanced > Cookbook > Making a Theme Extendable")]),_:1}),e(".")])])}const xe=o(c,[["render",ve],["__file","migration.html.vue"]]);export{xe as default};
