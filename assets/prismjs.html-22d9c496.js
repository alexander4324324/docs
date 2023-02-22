import{_ as o,W as l,X as p,Y as e,$ as n,a0 as s,a1 as r,D as t}from"./framework-46b0e263.js";const c={},d=n("h1",{id:"prismjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prismjs","aria-hidden":"true"},"#"),s(" prismjs")],-1),u={href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"},h=r(`<p>This plugin has been integrated into the default theme.</p><p>Notice that this plugin would only tokenize the code fence without adding styles. When using it with a custom theme, you may need to choose and import Prism.js style theme yourself.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-prismjs@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> prismjsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-prismjs&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">prismjsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="preloadlanguages" tabindex="-1"><a class="header-anchor" href="#preloadlanguages" aria-hidden="true">#</a> preloadLanguages</h3>`,7),m=n("li",null,[n("p",null,[s("Type: "),n("code",null,"string[]")])],-1),g=n("li",null,[n("p",null,[s("Default: "),n("code",null,"['markdown', 'jsdoc', 'yaml']")])],-1),k=n("p",null,"Details:",-1),v=n("p",null,"Languages to preload.",-1),_=n("p",null,"By default, languages will be loaded on demand when parsing markdown files.",-1),b={href:"https://github.com/PrismJS/prism/issues/2716",target:"_blank",rel:"noopener noreferrer"};function f(y,j){const i=t("NpmBadge"),a=t("ExternalLinkIcon");return l(),p("div",null,[d,e(i,{package:"@vuepress/plugin-prismjs"}),n("p",null,[s("This plugin will enable syntax highlighting for markdown code fence with "),n("a",u,[s("Prism.js"),e(a)]),s(".")]),h,n("ul",null,[m,g,n("li",null,[k,v,_,n("p",null,[s("However, Prism.js has "),n("a",b,[s("some potential issues"),e(a)]),s(" about loading languages dynamically. To avoid them, you can preload languages via this option.")])])])])}const x=o(c,[["render",f],["__file","prismjs.html.vue"]]);export{x as default};
