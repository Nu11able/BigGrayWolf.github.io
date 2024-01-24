(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{486:function(t,v,_){"use strict";_.r(v);var a=_(2),r=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"linux命令使用记录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#linux命令使用记录"}},[t._v("#")]),t._v(" linux命令使用记录")]),t._v(" "),v("ul",[v("li",[t._v("统计目标文件夹下的代码文本行数")])]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" src/ "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.*"')]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("ctrl + alt + [f1 - f6 ] 切换终端")]),t._v(" "),v("p",[t._v("ctrl + alt + f7 图形界面桌面")]),t._v(" "),v("p",[t._v("ctrl + d 键盘输入结束")]),t._v(" "),v("p",[t._v("ctrl + z 停止运行")]),t._v(" "),v("p",[t._v("ctrl + c 终止运行")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("ls")]),t._v(" "),v("th",[t._v("date")]),t._v(" "),v("th",[t._v("cal")]),t._v(" "),v("th",[t._v("bc")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("作用")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("日期")]),t._v(" "),v("td",[t._v("日历")]),t._v(" "),v("td",[t._v("计算器")])])])]),t._v(" "),v("h2",{attrs:{id:"man-page-代号说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#man-page-代号说明"}},[t._v("#")]),t._v(" man page 代号说明")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("代号")]),t._v(" "),v("th",[t._v("内容")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("用户在shell中可以操作或可执行文件")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("系统内核与函数可调用的工具")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("一些常用的函数(function)与函数库(library),大部分为c的函数库(lib)")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("设备文件说明，通常在/dev下的文件")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("配置文件或某些文件的格式")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("游戏")])]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td",[t._v("惯例与协议等，linux文件系统、网络协议、ASCII code等说明")])]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td",[t._v("系统管理员可用的命令")])]),t._v(" "),v("tr",[v("td",[t._v("9")]),t._v(" "),v("td",[t._v("跟kernel有关的文件")])])])]),t._v(" "),v("p",[v("code",[t._v("/string 向下查询string字符串 ?string 向上查询string字符串")])]),t._v(" "),v("h2",{attrs:{id:"基本命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[t._v("#")]),t._v(" 基本命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("whatis")]),t._v(" "),v("td",[t._v("相当于man -f 需要创建whatis数据库")])]),t._v(" "),v("tr",[v("td",[t._v("apropos")]),t._v(" "),v("td",[t._v("相当于man -k 需要创建whatis数据库")])]),t._v(" "),v("tr",[v("td",[t._v("makewhatis")]),t._v(" "),v("td",[t._v("创建whatis数据库")])]),t._v(" "),v("tr",[v("td",[t._v("info")]),t._v(" "),v("td",[t._v("与man类似")])]),t._v(" "),v("tr",[v("td",[t._v("netstat")]),t._v(" "),v("td",[t._v("查看网络联机状态")])]),t._v(" "),v("tr",[v("td",[t._v("sync")]),t._v(" "),v("td",[t._v("同步写入磁盘(关机前将数据写入磁盘)")])]),t._v(" "),v("tr",[v("td",[t._v("reboot、halt、poweroff、shutdown")]),t._v(" "),v("td",[t._v("重启、关机")])]),t._v(" "),v("tr",[v("td",[t._v("cd")]),t._v(" "),v("td",[t._v("change directory(进入目录)")])]),t._v(" "),v("tr",[v("td",[t._v("cp")]),t._v(" "),v("td",[t._v("copy")])]),t._v(" "),v("tr",[v("td",[t._v("su")]),t._v(" "),v("td",[t._v("切换身份")])]),t._v(" "),v("tr",[v("td",[t._v("free")]),t._v(" "),v("td")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);