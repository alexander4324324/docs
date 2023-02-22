import{_ as l,W as c,X as u,$ as s,a0 as n,Y as a,Z as t,a1 as o,D as i}from"./framework-46b0e263.js";const r={},d=s("h1",{id:"writing-a-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#writing-a-plugin","aria-hidden":"true"},"#"),n(" Writing a Plugin")],-1),v={class:"hint-container tip"},k=s("p",{class:"hint-container-title"},"Tips",-1),m=s("h2",{id:"create-a-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-plugin","aria-hidden":"true"},"#"),n(" Create a Plugin")],-1),h=s("em",null,"Plugin Object",-1),g=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> fooPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;vuepress-plugin-foo&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=s("em",null,"Plugin Object",-1),_=s("em",null,"Plugin Function",-1),f=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">barPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;vuepress-plugin-bar&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A plugin usually needs to allow user options, so we typically provide users with a function to receive options, and returns a <em>Plugin Object</em> or a <em>Plugin Function</em>. Then your plugin should be converted like this:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">fooPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;vuepress-plugin-foo&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">barPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&quot;vuepress-plugin-bar&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="publish-to-npm" tabindex="-1"><a class="header-anchor" href="#publish-to-npm" aria-hidden="true">#</a> Publish to NPM</h2>`,4),y={href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},w=o(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress-plugin-foo&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vuepress-plugin&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=s("code",null,"name",-1),P=s("code",null,"vuepress-plugin-xxx",-1),q=s("code",null,"@org/vuepress-plugin-xxx",-1),j=s("em",null,"Plugin Object",-1),N=s("li",null,[n("Set "),s("code",null,"keywords"),n(" to include "),s("code",null,"vuepress-plugin"),n(", so that users can search your plugin on NPM.")],-1);function A(V,B){const e=i("RouterLink"),p=i("ExternalLinkIcon");return c(),u("div",null,[d,s("div",v,[k,s("p",null,[n("Before reading this guide, you'd better learn the VuePress "),a(e,{to:"/advanced/architecture.html"},{default:t(()=>[n("architecture")]),_:1}),n(" first.")])]),m,s("p",null,[n("A plugin should be a plain JavaScript object that satisfies the "),a(e,{to:"/reference/plugin-api.html"},{default:t(()=>[n("Plugin API")]),_:1}),n(", which is called a "),h,n(":")]),g,s("p",null,[n("A plugin could also be a function that receives the "),a(e,{to:"/reference/node-api.html#app"},{default:t(()=>[n("app instance")]),_:1}),n(" as the param and returns a "),b,n(", which is called a "),_,n(":")]),f,s("p",null,[n("After creating a plugin, you should follow some conventions in the "),s("a",y,[n("package.json"),a(p)]),n(" file before publishing it to NPM:")]),w,s("ul",null,[s("li",null,[n("Set "),x,n(" to follow the naming convention, i.e. "),P,n(" or "),q,n(", which should be consistent with the "),a(e,{to:"/reference/plugin-api.html#name"},{default:t(()=>[n("name")]),_:1}),n(" field of the "),j,n(".")]),N])])}const O=l(r,[["render",A],["__file","plugin.html.vue"]]);export{O as default};
