import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as l}from"./app-dYRofbQn.js";const s={},d=l(`<h1 id="c-类内存分布分析" tabindex="-1"><a class="header-anchor" href="#c-类内存分布分析" aria-hidden="true">#</a> c++类内存分布分析</h1><h2 id="类的大小" tabindex="-1"><a class="header-anchor" href="#类的大小" aria-hidden="true">#</a> 类的大小</h2><h3 id="基础类的大小" tabindex="-1"><a class="header-anchor" href="#基础类的大小" aria-hidden="true">#</a> 基础类的大小</h3><p>在c语言里面一个struct的大小就它所包含的所有成员大小的和，那么在c++里面呢？考虑下面的例子:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>#include&lt;iostream&gt;
using namespace std;

class A {
public:
    void func1() {}
    void func2() {}

    int a;
    int b;
    double c;
};

int main() {
    cout &lt;&lt; &quot;sizeof(int): &quot; &lt;&lt; sizeof(int) &lt;&lt; endl;
    cout &lt;&lt; &quot;sizeof(double): &quot; &lt;&lt; sizeof(double) &lt;&lt; endl;
    cout &lt;&lt; &quot;sizeof(A): &quot; &lt;&lt; sizeof(A) &lt;&lt; endl;
    return 0;
}
/* 输出
sizeof(int): 4
sizeof(double): 8
sizeof(A): 16
*/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类的大小为类成员的大小之和(不包含成员函数)</strong>，从这一点可以发现和c语言的类有些类似。</p><blockquote><p>only data members got the space</p></blockquote><h3 id="继承类的大小" tabindex="-1"><a class="header-anchor" href="#继承类的大小" aria-hidden="true">#</a> 继承类的大小</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>#include&lt;iostream&gt;
using namespace std;

//取消注释改行关闭数据对其
//#pragma pack(1)

class A {
public:
    void func1() {}
    void func2() {}

    int a;
    int b;
    double c;
    static int d;
};

class B : public A{
public:
    int d;
};

int main() {
    cout &lt;&lt; &quot;sizeof(int): &quot; &lt;&lt; sizeof(int) &lt;&lt; endl;
    cout &lt;&lt; &quot;sizeof(double): &quot; &lt;&lt; sizeof(double) &lt;&lt; endl;
    cout &lt;&lt; &quot;sizeof(A): &quot; &lt;&lt; sizeof(A) &lt;&lt; endl;
    cout &lt;&lt; &quot;sizeof(B): &quot; &lt;&lt; sizeof(B) &lt;&lt; endl;
    return 0;
}
/* 输出
sizeof(int): 4
sizeof(double): 8
sizeof(A): 16
sizeof(B): 24
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到sizeof(B)的大小为24可能会令人感到疑惑，这是由于编译器开启了内存对齐，我的是64位系统所以编译器会按8byte对齐。另外为何sizeof(A)的大小为16而不是20呢，对于静态数据成员它有专门的存放地区，后面我们会提到。到此我们就可以得出结论了：<strong>只有类数据成员才会被分配内存</strong></p><h2 id="参考链接、书籍" tabindex="-1"><a class="header-anchor" href="#参考链接、书籍" aria-hidden="true">#</a> 参考链接、书籍</h2><p><a href="http://www.vishalchovatiya.com/memory-layout-of-cpp-object/" target="_blank" rel="noopener noreferrer">Memory Layout of C++ Object in Different Scenarios</a></p><p>《深度探索C++对象模型》</p>`,13),a=[d];function t(c,r){return e(),n("div",null,a)}const o=i(s,[["render",t],["__file","c__ClassMemoryLayout.html.vue"]]);export{o as default};
