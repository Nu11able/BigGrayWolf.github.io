import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as r,a as e}from"./app-dYRofbQn.js";const s={},t=e(`<h1 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h1><h2 id="宏-与" tabindex="-1"><a class="header-anchor" href="#宏-与" aria-hidden="true">#</a> 宏# 与 ##</h2><p>使用#把宏参数变为一个字符串,用##把两个宏参数贴合在一起</p><h2 id="const-加在指针前面和后面的区别" tabindex="-1"><a class="header-anchor" href="#const-加在指针前面和后面的区别" aria-hidden="true">#</a> const 加在指针前面和后面的区别</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>int a = 10;
const int *b = &amp;a;//指针指向的内容不能变,但是指针本身还能变
int * const c = &amp;a;//指针不能变,但是指针指向的内容能变
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链接性" tabindex="-1"><a class="header-anchor" href="#链接性" aria-hidden="true">#</a> 链接性</h2><p>内联函数的链接性是内部的,这意味着内联函数的定义必须在使用函数的文件中(将内联函数放在头文件中解决)</p><h2 id="c-中结构体是一种其成员在默认情况下为公有的类" tabindex="-1"><a class="header-anchor" href="#c-中结构体是一种其成员在默认情况下为公有的类" aria-hidden="true">#</a> c++中结构体是一种其成员在默认情况下为公有的类</h2><h2 id="为区分-运算符的前缀版本和后缀版本-c-将operator-作为前缀版本-将operator-int-作为后缀版本。" tabindex="-1"><a class="header-anchor" href="#为区分-运算符的前缀版本和后缀版本-c-将operator-作为前缀版本-将operator-int-作为后缀版本。" aria-hidden="true">#</a> 为区分++运算符的前缀版本和后缀版本,c++将operator++作为前缀版本,将operator++(int)作为后缀版本。</h2><ul><li>内联函数不能递归</li><li>模板重载类似于函数重载</li></ul><h1 id="gcc" tabindex="-1"><a class="header-anchor" href="#gcc" aria-hidden="true">#</a> gcc</h1><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>char *restrict addr;
/*restrict 关键字:相当于编程者承诺: 使用restrict修饰过的指针，它所指向的内容只能经由该指针（或从该指针继承而来的指针，如通过该指针赋值或做指针运算而得到的其他指针）修改，而不会被其他不相干的指针所修改。*/

__attribute__(xxx)
/*attribute是GNU C特色之一,在iOS用的比较广泛.系统中有许多地方使用到. attribute可以设置函数属性（Function Attribute ）、变量属性（Variable Attribute ）和类型属性（Type Attribute)等*/

#pragma
/*#pragma用于指示编译器完成一些特定的动作 #pragma所定义的很多指示字是编译器特有的(每种编译可能都不一样)*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h1><p>在java中使用final定义常量 在java中将数组作为参数传递给函数的时候需要将[]放在类型后面 <code>void test(int []t)</code></p>`,14),d=e(`<p>问？static fianl 分别作用于类和分别作用于函数有什么区别</p><ul><li>final 作用与类函数:防止继承</li></ul><h1 id="mfc" tabindex="-1"><a class="header-anchor" href="#mfc" aria-hidden="true">#</a> MFC</h1><p><a href="https://docs.microsoft.com/en-us/cpp/text/how-to-convert-between-various-string-types?view=vs-2019" target="_blank" rel="noopener noreferrer">How to convert between various string types</a></p><h2 id="cstring-char-and-cstring-std-string" tabindex="-1"><a class="header-anchor" href="#cstring-char-and-cstring-std-string" aria-hidden="true">#</a> CString &lt;-&gt; char * and CString &lt;-&gt; std::string</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>CString cstring1 = _T(&quot;hello&quot;);
USES_CONVERSION;//don&#39;t forget this
char* p = T2A(cstring1);
CString cstring2 = A2T(p);

wchar_t *orig = cstring1.GetBuffer();
size_t origsize = wcslen(orig) + 1;
size_t newsize = 2 * origsize + 10;
char *nstring = new char[newsize];
size_t convertedChars = 0;
wcstombs_s(&amp;convertedChars, nstring, newsize, orig, _TRUNCATE);

std::string str = CT2A(cstring1.GetBuffer());

std::string str = LPCSTR(cstring1.GetBuffer());//not working
CString cstring2 = str.c_str();


//note:don&#39;t forget to call ReleaseBuffer()
cstring1.ReleaseBuffer();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function c(l,o){return n(),a("div",null,[t,r(" java 中bool的关键字为boolean "),d])}const u=i(s,[["render",c],["__file","Tips.html.vue"]]);export{u as default};
