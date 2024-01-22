import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,a as s}from"./app-dYRofbQn.js";const t={},d=s(`<h1 id="力扣刷题记录" tabindex="-1"><a class="header-anchor" href="#力扣刷题记录" aria-hidden="true">#</a> 力扣刷题记录</h1><h2 id="题目描述-2016-增量元素之间的最大差值" tabindex="-1"><a class="header-anchor" href="#题目描述-2016-增量元素之间的最大差值" aria-hidden="true">#</a> 题目描述：<a href="https://leetcode-cn.com/problems/maximum-difference-between-increasing-elements/" target="_blank" rel="noopener noreferrer">2016.增量元素之间的最大差值</a></h2><p><strong>思路：</strong> 首先0&lt;=i&lt;j&lt;n且nums[i]&lt;nums[j]，在(i,j)这样一个范围中找一对满足条件的数据，对于这样的问题啥也别说了，无脑dp</p><p><strong>公式：</strong></p><p>$dp[i][j] = nums[i] &gt;= nums[j] ? -1 : nums[j] - nums[i]$</p><p>$dp[i][j] = max(dp[i][j], dp[i + 1][j], dp[i][j - 1])$</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>class Solution {
public:
	int maximumDifference(vector&lt;int&gt;&amp; nums) {
		int n = nums.size();
		vector&lt;vector&lt;int&gt;&gt; dp(n, vector&lt;int&gt;(n, -1));
		for (int k = 1; k &lt; n; k++) {
			for (int i = 0; i + k &lt; n; i++) {
				dp[i][i + k] = nums[i] &gt;= nums[i + k] ? -1 : nums[i + k] - nums[i];
				dp[i][i + k] = max(dp[i][i + k], max(dp[i + 1][i + k], dp[i][i + k - 1]));
			}
		}
		return dp[0][n - 1];
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交了代码后看了官方题解顿时感慨官方题解就是官方题解，够精辟。<a href="https://leetcode-cn.com/problems/maximum-difference-between-increasing-elements/solution/zeng-liang-yuan-su-zhi-jian-de-zui-da-ch-i0wk/" target="_blank" rel="noopener noreferrer">官方题解</a></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Solution {
public:
    int maximumDifference(vector&lt;int&gt;&amp; nums) {
        int n = nums.size();
        int ans = -1, premin = nums[0];
        for (int i = 1; i &lt; n; ++i) {
            if (nums[i] &gt; premin) {
                ans = max(ans, nums[i] - premin);
            } else {
                premin = nums[i];
            }
        }
        return ans;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>记录日期：2022/02/26</code></p>`,10),l=[d];function a(r,c){return e(),i("div",null,l)}const v=n(t,[["render",a],["__file","LeetCode.html.vue"]]);export{v as default};
