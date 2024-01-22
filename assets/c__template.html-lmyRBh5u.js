import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a as l}from"./app-dYRofbQn.js";const s={},t=l(`<h1 id="c-template基础" tabindex="-1"><a class="header-anchor" href="#c-template基础" aria-hidden="true">#</a> c++ template基础</h1><h2 id="template定义" tabindex="-1"><a class="header-anchor" href="#template定义" aria-hidden="true">#</a> template定义</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>// 类模板
template&lt;typename T&gt;
class TemplateClass { }

// 函数模板
template&lt;typename T, typename RT = int&gt;
RT TemplateFunction(T &amp;) { }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="template特化" tabindex="-1"><a class="header-anchor" href="#template特化" aria-hidden="true">#</a> template特化</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>// 类模板的特化
template&lt;&gt;
class TemplateClass&lt;int&gt; { }

// 显式实例化
template int TemplateFunction(int ) { }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="占坑" tabindex="-1"><a class="header-anchor" href="#占坑" aria-hidden="true">#</a> 占坑</h2><h3 id="如何实现对类模板的某个成员函数进行特化" tabindex="-1"><a class="header-anchor" href="#如何实现对类模板的某个成员函数进行特化" aria-hidden="true">#</a> 如何实现对类模板的某个成员函数进行特化</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>// handle.cpp
#include&lt;iostream&gt;

template&lt;typename T1, typename RT = int&gt;
class Test {
public:
    RT operator()();
};

template&lt;typename T1, typename RT&gt;
RT Test&lt;T1, RT&gt;::operator()() {
    std::cout &lt;&lt; &quot;This is generic implementation&quot; &lt;&lt; std::endl;
    return RT();
}

template&lt;typename RT&gt;
RT Test&lt;int, RT&gt;::operator()() {
    std::cout &lt;&lt; &quot;This is int type implementation&quot; &lt;&lt; std::endl;
    return RT();
}

int main() {
    Test&lt;char, bool&gt; t1;
    Test&lt;int, int&gt; t2;
    t1();
    t2();
    return 0;
}

/*
.\\handle.cpp:16:30: error: invalid use of incomplete type &#39;class Test&lt;int, RT&gt;&#39;   16 | RT Test&lt;int, RT&gt;::operator()() {
      |                              ^
.\\handle.cpp:4:7: note: declaration of &#39;class Test&lt;int, RT&gt;&#39;
    4 | class Test {
*/


// solution1
#include&lt;iostream&gt;

template&lt;typename T1, typename RT = int&gt;
class Test {
public:
    template&lt;typename _T&gt;
    class TypeTrait {};

    template&lt;typename _T&gt;
    RT Helper(const TypeTrait&lt;_T&gt; &amp;) {
        std::cout &lt;&lt; &quot;This is generic implementation&quot; &lt;&lt; std::endl;
        return RT();
    }

    RT Helper(const TypeTrait&lt;int&gt; &amp;) {
        std::cout &lt;&lt; &quot;This is int type implementation&quot; &lt;&lt; std::endl;
        return RT();
    }

    RT operator()() {
        return Helper(TypeTrait&lt;T1&gt;());
    }
};

int main() {
    Test&lt;char, bool&gt; t1;
    Test&lt;int, int&gt; t2;
    t1();
    t2();
    return 0;
}

// solution2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[t];function a(v,r){return n(),i("div",null,d)}const u=e(s,[["render",a],["__file","c__template.html.vue"]]);export{u as default};
