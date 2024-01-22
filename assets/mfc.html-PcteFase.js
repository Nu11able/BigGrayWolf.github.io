import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,a as i}from"./app-dYRofbQn.js";const c={},d=i(`<h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> tips</h2><h3 id="怎么获得透明画刷" tabindex="-1"><a class="header-anchor" href="#怎么获得透明画刷" aria-hidden="true">#</a> 怎么获得透明画刷</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>CBrush* pBrush = CBrush::FromHandle((HBRUSH)GetStockObject(NULL_BRUSH));

//例子：
CClientDC dc(this);
CBrush* pBrush = CBrush::FromHandle((HBRUSH)GetStockObject(NULL_BRUSH));
CBrush* pOldBrush = dc.SelectObject(pBrush);
dc.Rectangle(CRect(lbtnd, point));
dc.SelectObject(pOldBrush);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[d];function r(t,l){return n(),s("div",null,a)}const o=e(c,[["render",r],["__file","mfc.html.vue"]]);export{o as default};
