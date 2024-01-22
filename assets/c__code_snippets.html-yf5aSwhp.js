import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as l}from"./app-dYRofbQn.js";const t={},d=l(`<h1 id="c-一行代码系列" tabindex="-1"><a class="header-anchor" href="#c-一行代码系列" aria-hidden="true">#</a> c++一行代码系列</h1><p><code>用于记录学习c++过程中的一些骚操作(主要是stl的使用)，当然也不一定非得是一行代码</code></p><h2 id="一行代码实现不定量数据的输入输出" tabindex="-1"><a class="header-anchor" href="#一行代码实现不定量数据的输入输出" aria-hidden="true">#</a> 一行代码实现不定量数据的输入输出</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>#include&lt;algorithm&gt;
#include&lt;iterator&gt;
#include&lt;vector&gt;
#include&lt;iostream&gt;

int main() {
    vector&lt;int&gt; con;
    copy(istream_iterator&lt;int&gt;(cin), istream_iterator&lt;int&gt;(), back_inserter(con));
    copy(con.begin(), con.end(), ostream_iterator&lt;int&gt;(cout, &quot; &quot;));
    copy(con.begin(), con.end(), ostream_iterator&lt;int&gt;(cout, &quot;-&quot;));
    return 0;
}
/* 运行样例
输入：1 2 3 4 5 6^D
输出：1 2 3 4 5 6 1-2-3-4-5-6-
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一行代码实现特定数据的统计" tabindex="-1"><a class="header-anchor" href="#一行代码实现特定数据的统计" aria-hidden="true">#</a> 一行代码实现特定数据的统计</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>#include&lt;algorithm&gt;
#include&lt;iterator&gt;
#include&lt;vector&gt;
#include&lt;iostream&gt;
#include&lt;functional&gt;

using namespace std;

int main() {
    vector&lt;int&gt; con{12, 20, 40, 23, 28, 17, 65, 88, 25, 23};
    
    cout &lt;&lt; &quot;Count of 23: &quot; &lt;&lt; count(con.begin(), con.end(), 23) &lt;&lt; endl;
    cout &lt;&lt; &quot;Count if value &gt; 23: &quot; &lt;&lt; count_if(con.begin(), con.end(), bind(greater&lt;int&gt;(), placeholders::_1, 23)) &lt;&lt; endl; // c++11
    cout &lt;&lt; &quot;Count if value &gt; 23: &quot; &lt;&lt; count_if(con.begin(), con.end(), bind2nd(greater&lt;int&gt;(), 23)) &lt;&lt; endl; // c++99
    // 输出所有奇数
    cout &lt;&lt; &quot;All odd numbers: &quot;;
    copy_if(con.begin(), con.end(), ostream_iterator&lt;int&gt;(cout, &quot; &quot;), bind(modulus&lt;int&gt;(), placeholders::_1, 2));
    cout &lt;&lt; endl;

    // 输出所有偶数
    cout &lt;&lt; &quot;All even numbers: &quot;;
    copy_if(con.begin(), con.end(), ostream_iterator&lt;int&gt;(cout, &quot; &quot;), bind(logical_not&lt;int&gt;(), bind(modulus&lt;int&gt;(), placeholders::_1, 2)));
    cout &lt;&lt; endl;

    // 输出所有大于20小于50的数
    cout &lt;&lt; &quot;All numbers between 20 and 50: &quot;;
    copy_if(con.begin(), con.end(), ostream_iterator&lt;int&gt;(cout, &quot; &quot;), 
        bind(logical_and&lt;bool&gt;(), bind(greater&lt;int&gt;(), placeholders::_1, 20), bind(less&lt;int&gt;(), placeholders::_1, 50)));
    cout &lt;&lt; endl;

    // 输出所有大于23的奇数
    cout &lt;&lt; &quot;All odd numbers which is grater than 23: &quot;;
    copy_if(con.begin(), con.end(), ostream_iterator&lt;int&gt;(cout, &quot; &quot;), 
        bind(logical_and&lt;bool&gt;(), bind(modulus&lt;int&gt;(), placeholders::_1, 2), bind(greater&lt;int&gt;(), placeholders::_1, 23)));
    cout &lt;&lt; endl;

    // 输出所有大于23的偶数
    cout &lt;&lt; &quot;All even numbers which is grater than 23: &quot;;
    copy_if(con.begin(), con.end(), ostream_iterator&lt;int&gt;(cout, &quot; &quot;), 
        bind(logical_and&lt;bool&gt;(), bind(logical_not&lt;int&gt;(), bind(modulus&lt;int&gt;(), placeholders::_1, 2)), bind(greater&lt;int&gt;(), placeholders::_1, 23)));
    cout &lt;&lt; endl;
    return 0;
}
/* 运行样例
输出:
Count of 23: 2
Count if value &gt; 23: 5
Count if value &gt; 23: 5
All odd numbers: 23 17 65 25 23
All even numbers: 12 20 40 28 88
All numbers between 20 and 50: 40 23 28 25 23
All odd numbers which is grater than 23: 65 25
All even numbers which is grater than 23: 40 28 88
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一行代码遍历容器并做相应的修改" tabindex="-1"><a class="header-anchor" href="#一行代码遍历容器并做相应的修改" aria-hidden="true">#</a> 一行代码遍历容器并做相应的修改</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>#include&lt;algorithm&gt;
#include&lt;iterator&gt;
#include&lt;vector&gt;
#include&lt;iostream&gt;
#include&lt;functional&gt;
#include&lt;string&gt;

using namespace std;

template&lt;typename T = int, typename containerType = vector&lt;T&gt;&gt;
void PrintHelper(const char *str, containerType &amp;container) {
    cout &lt;&lt; str &lt;&lt; &quot;: &quot;;
    copy(container.begin(), container.end(), ostream_iterator&lt;T&gt;(cout, &quot; &quot;));
    cout &lt;&lt; endl;
}

template&lt;typename T = int&gt;
void PrintHelper(const char *str, const T &amp;value) {
    cout &lt;&lt; str &lt;&lt; &quot;: &quot; &lt;&lt; value &lt;&lt; endl;
}

int main() {
    vector&lt;int&gt; container1{12, 20, 40, 23, 28, 17, 65, 88, 25, 23};
    vector&lt;int&gt; container2{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    PrintHelper(&quot;Container1(x1)&quot;, container1);
    PrintHelper(&quot;Container2(x2)&quot;, container2);

    // 将container1中的每个数字翻倍
    transform(container1.begin(), container1.end(), container1.begin(), bind2nd(multiplies&lt;int&gt;(), 2));
    PrintHelper(&quot;After (x1*2)&quot;, container1);
    
    // 将container1和container2中相同下标的数字相除
    vector&lt;float&gt; temp(container1.size()); // 通过阅读transform源码保存结果的数组大小需要提前开辟好
    // transfrom中指定的计算长度中container1 &lt;= container2
    transform(container1.begin(), container1.end(), container2.begin(), temp.begin(), divides&lt;int&gt;());
    PrintHelper&lt;float&gt;(&quot;After (x1/x2)&quot;, temp);
    transform(container1.begin(), container1.end(), container2.begin(), temp.begin(), divides&lt;float&gt;());
    PrintHelper&lt;float&gt;(&quot;After (x1/x2)&quot;, temp);
    return 0;
}
/* 运行样例
Container1(x1): 12 20 40 23 28 17 65 88 25 23 
Container2(x2): 1 2 3 4 5 6 7 8 9 10 
After (x1*2): 24 40 80 46 56 34 130 176 50 46 
After (x1/x2): 24 20 26 11 11 5 18 22 5 4 
After (x1/x2): 24 20 26.6667 11.5 11.2 5.66667 18.5714 22 5.55556 4.6
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),s=[d];function r(a,c){return i(),e("div",null,s)}const o=n(t,[["render",r],["__file","c__code_snippets.html.vue"]]);export{o as default};
