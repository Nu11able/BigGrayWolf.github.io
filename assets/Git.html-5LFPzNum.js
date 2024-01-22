import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,a as d}from"./app-dYRofbQn.js";const n={},r=d(`<h1 id="git笔记" tabindex="-1"><a class="header-anchor" href="#git笔记" aria-hidden="true">#</a> Git笔记</h1><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p><code>1、以下举例所用的仓库地址均为：git@github.com:yourname/repo.git</code><code>2、以下举例所用的仓库地址均为：github_repo</code></p><h2 id="新建仓库" tabindex="-1"><a class="header-anchor" href="#新建仓库" aria-hidden="true">#</a> 新建仓库</h2><p>从github中新创建仓库后可以看到下图</p><ul><li>本地没有代码从0开始</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>echo &quot;# test&quot; &gt;&gt; README.md
git init
git add README.md
git commit -m &quot;first commit&quot;
git branch -M main # 修改master分支名字为main
git remote add origin git@github.com:yourname/repo.git
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>本地已有代码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git remote add origin git@github.com:yourname/repo.git
git branch -M main # 可以跳过

git push -u origin main
# or
git push -u origin master # 默认存在master分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote" aria-hidden="true">#</a> git remote</h2><h3 id="列出远程仓库" tabindex="-1"><a class="header-anchor" href="#列出远程仓库" aria-hidden="true">#</a> 列出远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git remote
git remote -v # 列出详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-删除远程仓库地址" tabindex="-1"><a class="header-anchor" href="#添加-删除远程仓库地址" aria-hidden="true">#</a> 添加/删除远程仓库地址</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git remote add name git@github.com:yourname/repo.git
git remote remove name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改仓库名字" tabindex="-1"><a class="header-anchor" href="#修改仓库名字" aria-hidden="true">#</a> 修改仓库名字</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git remote rename oldname newname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git-rm" tabindex="-1"><a class="header-anchor" href="#git-rm" aria-hidden="true">#</a> git rm</h2><h3 id="删除对某个文件的跟踪" tabindex="-1"><a class="header-anchor" href="#删除对某个文件的跟踪" aria-hidden="true">#</a> 删除对某个文件的跟踪</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git rm --cached somefile

# 如果是文件夹
git rm -r --cached somefile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h2><h3 id="撤销commit" tabindex="-1"><a class="header-anchor" href="#撤销commit" aria-hidden="true">#</a> 撤销commit</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git reset --soft HEAD^ # 撤销一次commit
git reset --soft HEAD~2 # 撤销两次commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>提交完了之后发现文件名不对，或者说对某个文件做了轻微的改动</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git add . # 添加所有新的修改到暂存区
git commit --amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><table><thead><tr><th>命令</th><th>功能</th></tr></thead></table><h3 id="修复github只有新建仓库时才有小绿点贡献而commit没有" tabindex="-1"><a class="header-anchor" href="#修复github只有新建仓库时才有小绿点贡献而commit没有" aria-hidden="true">#</a> 修复github只有新建仓库时才有小绿点贡献而commit没有</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git filter-branch --env-filter &#39;GIT_AUTHOR_EMAIL=&quot;your_email@email&quot;;GIT_AUTHOR_NAME=&quot;your_name&quot;;&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,28),s=[r];function t(l,c){return i(),a("div",null,s)}const u=e(n,[["render",t],["__file","Git.html.vue"]]);export{u as default};
