(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{468:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"cmake使用记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmake使用记录"}},[s._v("#")]),s._v(" cmake使用记录")]),s._v(" "),t("h2",{attrs:{id:"cmake使用模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmake使用模板"}},[s._v("#")]),s._v(" cmake使用模板")]),s._v(" "),t("div",{staticClass:"language-cmake line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cmake"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#CMake的最低版本要求")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cmake_minimum_required")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("VERSION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#项目名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("project")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tingx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置版本是 Debug 还是 Release")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("CMAKE_BUILD_TYPE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Debug"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("file")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GLOB_RECURSE SRC_FILES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("PROJECT_SOURCE_DIR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/src/**.cc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("PROJECT_SOURCE_DIR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/src/**.hpp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("PROJECT_SOURCE_DIR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/src/**.h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除某些文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("file")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GLOB_RECURSE MAINS src/*main.cc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("list")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REMOVE_ITEM LIBRARY "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("MAINS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# msvc 按文件夹分组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("macro")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("source_group_by_dir source_files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("MSVC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sgbd_cur_dir "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("CMAKE_CURRENT_SOURCE_DIR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sgbd_file "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("source_files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REGEX REPLACE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("sgbd_cur_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/\\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*\\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \\\\"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" sgbd_fpath "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("sgbd_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REGEX REPLACE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\(.*\\)/.*"')]),s._v(" \\\\"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" sgbd_group_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("sgbd_fpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("COMPARE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("EQUAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("sgbd_fpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("sgbd_group_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" sgbd_nogroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REPLACE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\\"')]),s._v(" sgbd_group_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("sgbd_group_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sgbd_nogroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sgbd_group_name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\\"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("endif")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sgbd_nogroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("source_group")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("sgbd_group_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" FILES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("sgbd_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("endforeach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sgbd_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("endif")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("MSVC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("endmacro")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("source_group_by_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置包含目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include_directories")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("PROJECT_SOURCE_DIR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置输出目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("EXECUTABLE_OUTPUT_PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("PROJECT_SOURCE_DIR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/build"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加编译参数,比如add_definitions(-DDEBUG)将在gcc命令行添加DEBUG宏定义")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_definitions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加可执行文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_executable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tingx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),s._v("SRC_FILES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_executable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("PROJECT_SOURCE_DIR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/test/client.cc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br")])]),t("h2",{attrs:{id:"cmake预定义变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmake预定义变量"}},[s._v("#")]),s._v(" cmake预定义变量")]),s._v(" "),t("p",[t("code",[s._v("以下假设项目文件夹路径为/home/name/project")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("变量")]),s._v(" "),t("th",[s._v("值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("PROJECT_SOURCE_DIR")]),s._v(" "),t("td",[s._v("/home/name/project")])])])]),s._v(" "),t("h2",{attrs:{id:"问题汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题汇总"}},[s._v("#")]),s._v(" 问题汇总")]),s._v(" "),t("h3",{attrs:{id:"cmake-vscode配置后源代码中显示头文件找不到"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmake-vscode配置后源代码中显示头文件找不到"}},[s._v("#")]),s._v(" cmake+vscode配置后源代码中显示头文件找不到")]),s._v(" "),t("p",[s._v('在项目文件夹下.vscode中settings.json中添加行"C_Cpp.default.configurationProvider": "vector-of-bool.cmake-tools"')])])}),[],!1,null,null,null);t.default=e.exports}}]);