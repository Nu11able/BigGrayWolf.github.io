import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a}from"./app-dYRofbQn.js";const d={},s=a(`<h1 id="c-错误汇总" tabindex="-1"><a class="header-anchor" href="#c-错误汇总" aria-hidden="true">#</a> c++错误汇总</h1><h2 id="undefined-reference-to-vtable-for" tabindex="-1"><a class="header-anchor" href="#undefined-reference-to-vtable-for" aria-hidden="true">#</a> undefined reference to \`vtable for ****&#39;</h2><h2 id="默认参数与重载" tabindex="-1"><a class="header-anchor" href="#默认参数与重载" aria-hidden="true">#</a> 默认参数与重载</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>class test{
private:
    int a;

public:
    test() {a = 10;}
    void print(int a_ = a) { // error: invalid use of non-static data member &#39;test::a&#39;
        cout &lt;&lt; a_ &lt;&lt; endl;
    }
};

// solution
class test1{
private:
    int a;

public:
    test() {a = 10;}
    void print() {
        print(a);
    }
    void print(int a_) {
        cout &lt;&lt; a_ &lt;&lt; endl;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[s];function r(c,t){return n(),i("div",null,l)}const m=e(d,[["render",r],["__file","c__error_summary.html.vue"]]);export{m as default};
