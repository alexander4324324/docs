import{_ as c,W as r,X as u,Y as s,$ as n,a0 as a,Z as p,a1 as o,D as t}from"./framework-46b0e263.js";const d={},k=n("h1",{id:"container",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#container","aria-hidden":"true"},"#"),a(" container")],-1),h=n("p",null,"Register markdown custom containers in your VuePress site.",-1),m={href:"https://github.com/markdown-it/markdown-it-container",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-container@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> containerPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-container&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">containerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="container-syntax" tabindex="-1"><a class="header-anchor" href="#container-syntax" aria-hidden="true">#</a> Container Syntax</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [info]
[content]

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>The <code>type</code> is required and should be specified via <a href="#type">type</a> option.</li><li>The <code>info</code> is optional, and the default value can be specified via <code>defaultInfo</code> in <a href="#locales">locales</a> option.</li><li>The <code>content</code> can be any valid markdown content.</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>This plugin can be used multiple times to support different types of containers.</p></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>`,9),f=n("li",null,[n("p",null,[a("Type: "),n("code",null,"string")])],-1),g=n("p",null,"Details:",-1),b=n("p",null,"The type of the container.",-1),_=n("code",null,"name",-1),y={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},w=o(`<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, { defaultInfo: string }&gt;</code></p></li><li><p>Details:</p><p>The default <code>info</code> of the container in different locales.</p><p>If this option is not specified, the default <code>info</code> will fallback to the uppercase of the <a href="#type">type</a> option.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">containerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;tip&quot;</span><span class="token punctuation">,</span>
      locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          defaultInfo<span class="token operator">:</span> <span class="token string">&quot;TIP&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          defaultInfo<span class="token operator">:</span> <span class="token string">&quot;提示&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=o(`<h3 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> before</h3><ul><li><p>Type: <code>(info: string) =&gt; string</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div class=&quot;custom-container </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
    info <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p class=&quot;custom-container-title&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>A function to render the starting tag of the container.</p><p>The first param is the <code>info</code> part of <a href="#container-syntax">container syntax</a>.</p><p>This option will not take effect if you don&#39;t specify the <a href="#after">after</a> option.</p></li></ul><h3 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> after</h3><ul><li><p>Type: <code>(info: string) =&gt; string</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;&lt;/div&gt;\\n&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>A function to render the ending tag of the container.</p><p>The first param is the <code>info</code> part of <a href="#container-syntax">container syntax</a>.</p><p>This option will not take effect if you don&#39;t specify the <a href="#before">before</a> option.</p></li></ul><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3><ul><li>Type:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MarkdownItContainerRenderFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  env<span class="token operator">:</span> MarkdownEnv<span class="token punctuation">,</span>
  self<span class="token operator">:</span> Renderer
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),T=n("p",null,"Details:",-1),q=n("code",null,"render",-1),I={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},D=n("p",null,[a("This plugin uses a default "),n("code",null,"render"),a(" function. If you specify this option, the default "),n("code",null,"render"),a(" function will be replaced, and the "),n("a",{href:"#locales"},"locales"),a(", "),n("a",{href:"#before"},"before"),a(" and "),n("a",{href:"#after"},"after"),a(" options will be ignored.")],-1),C=n("h3",{id:"validate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#validate","aria-hidden":"true"},"#"),a(" validate")],-1),N=n("li",null,[n("p",null,[a("Type: "),n("code",null,"(params: string) => boolean")])],-1),R=n("p",null,"Details:",-1),B=n("code",null,"validate",-1),E={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},P=n("h3",{id:"marker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#marker","aria-hidden":"true"},"#"),a(" marker")],-1),V=n("li",null,[n("p",null,[a("Type: "),n("code",null,"string")])],-1),L=n("p",null,"Details:",-1),$=n("code",null,"marker",-1),A={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"};function M(S,z){const l=t("NpmBadge"),e=t("ExternalLinkIcon"),i=t("RouterLink");return r(),u("div",null,[k,s(l,{package:"@vuepress/plugin-container"}),h,n("p",null,[a("This plugin simplifies the use of "),n("a",m,[a("markdown-it-container"),s(e)]),a(", but also retains its original capabilities.")]),n("p",null,[a("The "),s(i,{to:"/reference/default-theme/markdown.html#custom-containers"},{default:p(()=>[a("Custom Containers")]),_:1}),a(" of default theme is powered by this plugin.")]),v,n("ul",null,[f,n("li",null,[g,b,n("p",null,[a("It will be used as the "),_,a(" param of "),n("a",y,[a("markdown-it-container"),s(e)]),a(".")])])]),w,n("ul",null,[n("li",null,[a("Also see: "),n("ul",null,[n("li",null,[s(i,{to:"/guide/i18n.html"},{default:p(()=>[a("Guide > I18n")]),_:1})])])])]),x,n("ul",null,[n("li",null,[T,n("p",null,[a("The "),q,a(" option of "),n("a",I,[a("markdown-it-container"),s(e)]),a(".")]),D])]),C,n("ul",null,[N,n("li",null,[R,n("p",null,[a("The "),B,a(" option of "),n("a",E,[a("markdown-it-container"),s(e)]),a(".")])])]),P,n("ul",null,[V,n("li",null,[L,n("p",null,[a("The "),$,a(" option of "),n("a",A,[a("markdown-it-container"),s(e)]),a(".")])])])])}const G=c(d,[["render",M],["__file","container.html.vue"]]);export{G as default};
