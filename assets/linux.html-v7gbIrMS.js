import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as r,a}from"./app-dYRofbQn.js";const e={},h=a(`<h1 id="linux命令使用记录" tabindex="-1"><a class="header-anchor" href="#linux命令使用记录" aria-hidden="true">#</a> linux命令使用记录</h1><ul><li>统计目标文件夹下的代码文本行数</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>find src/ -name &quot;*.*&quot; | xargs cat | wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ctrl + alt + [f1 - f6 ] 切换终端</p><p>ctrl + alt + f7 图形界面桌面</p><p>ctrl + d 键盘输入结束</p><p>ctrl + z 停止运行</p><p>ctrl + c 终止运行</p><table><thead><tr><th>命令</th><th>ls</th><th>date</th><th>cal</th><th>bc</th></tr></thead><tbody><tr><td>作用</td><td></td><td>日期</td><td>日历</td><td>计算器</td></tr></tbody></table><h2 id="man-page-代号说明" tabindex="-1"><a class="header-anchor" href="#man-page-代号说明" aria-hidden="true">#</a> man page 代号说明</h2><table><thead><tr><th>代号</th><th>内容</th></tr></thead><tbody><tr><td>1</td><td>用户在shell中可以操作或可执行文件</td></tr><tr><td>2</td><td>系统内核与函数可调用的工具</td></tr><tr><td>3</td><td>一些常用的函数(function)与函数库(library),大部分为c的函数库(lib)</td></tr><tr><td>4</td><td>设备文件说明，通常在/dev下的文件</td></tr><tr><td>5</td><td>配置文件或某些文件的格式</td></tr><tr><td>6</td><td>游戏</td></tr><tr><td>7</td><td>惯例与协议等，linux文件系统、网络协议、ASCII code等说明</td></tr><tr><td>8</td><td>系统管理员可用的命令</td></tr><tr><td>9</td><td>跟kernel有关的文件</td></tr></tbody></table><p><code>/string 向下查询string字符串 ?string 向上查询string字符串</code></p><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td>whatis</td><td>相当于man -f 需要创建whatis数据库</td></tr><tr><td>apropos</td><td>相当于man -k 需要创建whatis数据库</td></tr><tr><td>makewhatis</td><td>创建whatis数据库</td></tr><tr><td>info</td><td>与man类似</td></tr><tr><td>netstat</td><td>查看网络联机状态</td></tr><tr><td>sync</td><td>同步写入磁盘(关机前将数据写入磁盘)</td></tr><tr><td>reboot、halt、poweroff、shutdown</td><td>重启、关机</td></tr><tr><td>cd</td><td>change directory(进入目录)</td></tr><tr><td>cp</td><td>copy</td></tr><tr><td>su</td><td>切换身份</td></tr><tr><td>free</td><td></td></tr></tbody></table>`,14),n=[h];function i(l,c){return d(),r("div",null,n)}const p=t(e,[["render",i],["__file","linux.html.vue"]]);export{p as default};