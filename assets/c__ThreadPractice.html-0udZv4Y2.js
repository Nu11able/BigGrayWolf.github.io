import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as l}from"./app-dYRofbQn.js";const s="/assets/linuxThreadModel-JUDDZy85.png",d={},t=l('<h2 id="linux线程内存模型" tabindex="-1"><a class="header-anchor" href="#linux线程内存模型" aria-hidden="true">#</a> linux线程内存模型</h2><p><img src="'+s+`" alt=""></p><h2 id="practice" tabindex="-1"><a class="header-anchor" href="#practice" aria-hidden="true">#</a> practice</h2><h3 id="辅助类" tabindex="-1"><a class="header-anchor" href="#辅助类" aria-hidden="true">#</a> 辅助类</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>class Timer {
private:
    clock_t start_;
    string msg_;
public:
    Timer(const char *msg) : msg_(msg) {
        start_ = clock();
    }

    Timer() : msg_() {
        start_ = clock();
    }

    ~Timer() {
        float t = ((float)(clock() - start_)) / CLOCKS_PER_SEC;
        if(msg_ != &quot;&quot;)
            cout &lt;&lt; msg_ &lt;&lt; &quot; time used: &quot; &lt;&lt; t &lt;&lt; &quot; seconds&quot; &lt;&lt; endl;
        else 
            cout &lt;&lt; &quot;time used: &quot; &lt;&lt; t &lt;&lt; &quot; seconds&quot; &lt;&lt; endl;
    }
};

class Seperator{
private:
    string str;
public:
    Seperator(const char *msg) : str(msg) {
        cout &lt;&lt; &quot;==========&quot; &lt;&lt; str &lt;&lt; &quot;==========&quot; &lt;&lt; endl;
    }
    
    ~Seperator() {
        cout &lt;&lt; string(str.length() + 20, &#39;=&#39;) &lt;&lt; endl;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_0、打印你的计算机std-hardware-concurrency" tabindex="-1"><a class="header-anchor" href="#_0、打印你的计算机std-hardware-concurrency" aria-hidden="true">#</a> 0、打印你的计算机std:🧵:hardware_concurrency</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>void practice0() {
    Seperator seperator(string(&quot;practice0&quot;));
    cout &lt;&lt; &quot;hardware_concurrency: &quot; &lt;&lt; thread::hardware_concurrency &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1、创建一个线程-并传递给它一个单词列表-每秒打印一个单词。" tabindex="-1"><a class="header-anchor" href="#_1、创建一个线程-并传递给它一个单词列表-每秒打印一个单词。" aria-hidden="true">#</a> 1、创建一个线程，并传递给它一个单词列表，每秒打印一个单词。</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>void practice1() {
    Seperator seperator(&quot;practice1&quot;);
    vector&lt;string&gt;words({&quot;hello&quot;, &quot;this&quot;, &quot;is&quot;, &quot;kevin&quot;});
    thread t([](vector&lt;string&gt; words){
        for(auto &amp; str : words) {
            this_thread::sleep_for(chrono::seconds(1));
            cout &lt;&lt; str &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;
    }, words);
    t.join();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、创建一个线程-将传递进来的单词列表的单词首字母改为大写。" tabindex="-1"><a class="header-anchor" href="#_2、创建一个线程-将传递进来的单词列表的单词首字母改为大写。" aria-hidden="true">#</a> 2、创建一个线程，将传递进来的单词列表的单词首字母改为大写。</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>void practice2() {
    Seperator seperator(&quot;practice2&quot;);
    vector&lt;string&gt;words({&quot;hello&quot;, &quot;this&quot;, &quot;is&quot;, &quot;kevin&quot;});
    thread t([](vector&lt;string&gt; &amp;words){
        for(auto &amp;str : words) {
            str[0] &amp;= 0x5f;
        }
    }, ref(words)); // 使用ref传递words引用
    t.join();
    //cout &lt;&lt; partial_sum(words.begin(), words.end(), &quot;&quot;) &lt;&lt; endl;
    for(auto &amp;str : words) {
        cout &lt;&lt; str &lt;&lt; &quot; &quot;;
    }
    cout &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、创建3-5个线程-每个线程循环5-10次-每次循环输出一个随机数-每次间隔0-1s" tabindex="-1"><a class="header-anchor" href="#_3、创建3-5个线程-每个线程循环5-10次-每次循环输出一个随机数-每次间隔0-1s" aria-hidden="true">#</a> 3、创建3-5个线程，每个线程循环5-10次，每次循环输出一个随机数，每次间隔0-1s</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>void practice3() {
    Seperator seperator(&quot;practice3&quot;);
    default_random_engine generator(chrono::system_clock::now().time_since_epoch().count());
    uniform_int_distribution&lt;int&gt; distribution(0, 100);

    int threadNum = distribution(generator) % 3 + 3;
    cout &lt;&lt; &quot;Thread nums: &quot; &lt;&lt; threadNum &lt;&lt; endl;
    vector&lt;thread&gt; threads;
    // 存在问题
    // fill_n(back_inserter(threads), threadNum, thread([&amp;](){
    //     int loopNum = distribution(generator) % 5 + 6;
    //     cout &lt;&lt; &quot;Thread &quot; &lt;&lt; this_thread::get_id() &lt;&lt; &quot;#: loopNums-&gt;&quot; &lt;&lt; loopNum &lt;&lt; endl;
    //     while(loopNum--) {
    //         this_thread::sleep_for(chrono::milliseconds(distribution(generator) * 10));
    //         cout &lt;&lt; &quot;Thread &quot; &lt;&lt; this_thread::get_id() &lt;&lt; &quot;#:&quot; &lt;&lt; distribution(generator) &lt;&lt; endl;
    //     }
    // }));

    for(int i = 0; i &lt; threadNum; i++) {
        threads.push_back(thread([&amp;](){
            int loopNum = distribution(generator) % 5 + 6;
            cout &lt;&lt; &quot;Thread &quot; &lt;&lt; this_thread::get_id() &lt;&lt; &quot;#: loopNums-&gt;&quot; &lt;&lt; loopNum &lt;&lt; endl;
            while(loopNum--) {
                this_thread::sleep_for(chrono::milliseconds(distribution(generator) * 10));
                cout &lt;&lt; &quot;Thread &quot; &lt;&lt; this_thread::get_id() &lt;&lt; &quot;#:&quot; &lt;&lt; distribution(generator) &lt;&lt; endl;
            }
        }));
    }
    for_each(threads.begin(), threads.end(), mem_fn(&amp;thread::join));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、生成十万个随机数-使用5个线程计算和-每个线程计算两万个数据的和-多线程共享变量要加锁" tabindex="-1"><a class="header-anchor" href="#_4、生成十万个随机数-使用5个线程计算和-每个线程计算两万个数据的和-多线程共享变量要加锁" aria-hidden="true">#</a> 4、生成十万个随机数，使用5个线程计算和，每个线程计算两万个数据的和(多线程共享变量要加锁)</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>void practice4() {
    Seperator seperator(&quot;practice4&quot;);
    Timer timer(&quot;practice4&quot;);
    default_random_engine generator(chrono::system_clock::now().time_since_epoch().count());
    uniform_int_distribution&lt;int&gt; distribution(0, 1e2);

    const unsigned int randomNum = 1e5;
    const unsigned int threadNum = 5;
    const unsigned int blockSize = randomNum / threadNum;

    { // solution1
        Timer sln1_timer(&quot;solution1&quot;);
        vector&lt;long long&gt; nums;
        vector&lt;long long&gt; result(threadNum);
        vector&lt;thread&gt; threads(threadNum);
        //生成十万个0-100的随机数
        generate_n(back_inserter(nums), randomNum, [&amp;](){return distribution(generator);});
        //生成五个线程计算和
        vector&lt;long long&gt;::iterator block_start = nums.begin();
        for(int i = 0; i &lt; threadNum; i++) {
            vector&lt;long long&gt;::iterator block_end = block_start;
            advance(block_end, blockSize);
            threads[i] = thread([](vector&lt;long long&gt;::iterator start, vector&lt;long long&gt;::iterator last, long long &amp;res){
                res = accumulate(start, last, res);
            }, block_start, block_end, ref(result[i])); 
            block_start = block_end;
        }
        for_each(threads.begin(), threads.end(), mem_fn(&amp;thread::join));   
        cout &lt;&lt; &quot;Size of nums: &quot; &lt;&lt; nums.size() &lt;&lt; endl;
        cout &lt;&lt; &quot;Sum of 1e5 numbers is(thread): &quot; &lt;&lt; accumulate(result.begin(), result.end(), 0) &lt;&lt; endl;
        cout &lt;&lt; &quot;Sum of 1e5 numbers is(accumulate): &quot; &lt;&lt; accumulate(nums.begin(), nums.end(), 0) &lt;&lt; endl;
    }

    cout &lt;&lt; endl;

    { // solution2
        Timer sln1_timer(&quot;solution2&quot;);
        vector&lt;long long&gt; nums;
        long long result;
        vector&lt;thread&gt; threads(threadNum);
        //生成十万个0-100的随机数
        generate_n(back_inserter(nums), randomNum, [&amp;](){return distribution(generator);});
        //生成五个线程计算和
        for(int i = 0; i &lt; threadNum; i++) {
            threads[i] = thread([&amp;nums, i](long long &amp;res){
                vector&lt;long long&gt;::iterator block_start = nums.begin() + 2e4 * i;
                vector&lt;long long&gt;::iterator block_last = nums.begin() + 2e4 * (i + 1);
                res += accumulate(block_start, block_last, res);
            }, ref(result));
        }
        for_each(threads.begin(), threads.end(), mem_fn(&amp;thread::join));   
        cout &lt;&lt; &quot;Size of nums: &quot; &lt;&lt; nums.size() &lt;&lt; endl;
        cout &lt;&lt; &quot;Sum of 1e5 numbers is(thread): &quot; &lt;&lt; result &lt;&lt; endl;
        cout &lt;&lt; &quot;Sum of 1e5 numbers is(accumulate): &quot; &lt;&lt; accumulate(nums.begin(), nums.end(), 0) &lt;&lt; endl;
    }

    cout &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、初始value-0-生成十个线程-五个线程执行value-1-五个线程执行value-1-每个线程执行一百万次-如何保证value得到正确的结果" tabindex="-1"><a class="header-anchor" href="#_5、初始value-0-生成十个线程-五个线程执行value-1-五个线程执行value-1-每个线程执行一百万次-如何保证value得到正确的结果" aria-hidden="true">#</a> 5、初始value = 0, 生成十个线程，五个线程执行value += 1，五个线程执行value -= 1, 每个线程执行一百万次，如何保证value得到正确的结果</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>void practice5() {
    Seperator sep(&quot;practice5&quot;);

    { // error
        int value = 0;
        vector&lt;thread&gt; threads;
        for (int i = 0; i &lt; 10; ++i) {
            if (i &lt; 5) {
                threads.emplace_back([&amp;value] { 
                    for (int i = 0; i &lt; 1e6; ++i)
                        value += 1; 
                });
            } else {
                threads.emplace_back([&amp;value] {
                    for (int i = 0; i &lt; 1e6; ++i)
                        value -= 1;
                });
            }
        }
        for_each(threads.begin(), threads.end(), mem_fn(&amp;thread::join));
        cout &lt;&lt; &quot;value = &quot; &lt;&lt; value &lt;&lt; endl;
    }

    { // correct
        int value = 0;
        vector&lt;thread&gt; threads;
        mutex m;
        for (int i = 0; i &lt; 10; ++i) {
            if (i &lt; 5) {
                threads.emplace_back([&amp;value, &amp;m] { 
                    for (int i = 0; i &lt; 1e6; ++i) {
                        lock_guard&lt;mutex&gt; guard(m);
                        value += 1;
                    }
                });
            } else {
                threads.emplace_back([&amp;value, &amp;m] {
                    for (int i = 0; i &lt; 1e6; ++i) {
                        lock_guard&lt;mutex&gt; guard(m);
                        value -= 1;
                    }
                });
            }
        }
        for_each(threads.begin(), threads.end(), mem_fn(&amp;thread::join));
        cout &lt;&lt; &quot;value = &quot; &lt;&lt; value &lt;&lt; endl;
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),r=[t];function a(u,v){return i(),n("div",null,r)}const m=e(d,[["render",a],["__file","c__ThreadPractice.html.vue"]]);export{m as default};
