import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-dYRofbQn.js";const a={},c=d(`<h1 id="cmake使用记录" tabindex="-1"><a class="header-anchor" href="#cmake使用记录" aria-hidden="true">#</a> cmake使用记录</h1><h2 id="cmake使用模板" tabindex="-1"><a class="header-anchor" href="#cmake使用模板" aria-hidden="true">#</a> cmake使用模板</h2><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code>#CMake的最低版本要求
cmake_minimum_required(VERSION 3.0)
 
#项目名称
project(tingx)
 
#设置版本是 Debug 还是 Release
set(CMAKE_BUILD_TYPE &quot;Debug&quot;)
 
file(GLOB_RECURSE SRC_FILES \${PROJECT_SOURCE_DIR}/src/**.cc \${PROJECT_SOURCE_DIR}/src/**.hpp \${PROJECT_SOURCE_DIR}/src/**.h) 

# 移除某些文件
file(GLOB_RECURSE MAINS src/*main.cc)
list(REMOVE_ITEM LIBRARY \${MAINS})


#设置包含目录
include_directories(\${PROJECT_SOURCE_DIR}/src)

#设置输出目录
set(EXECUTABLE_OUTPUT_PATH \${PROJECT_SOURCE_DIR}/build)
 
#添加编译参数,比如add_definitions(-DDEBUG)将在gcc命令行添加DEBUG宏定义
add_definitions(-g)
 
#添加可执行文件
add_executable(tingx \${SRC_FILES})
add_executable(client \${PROJECT_SOURCE_DIR}/test/client.cc)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cmake预定义变量" tabindex="-1"><a class="header-anchor" href="#cmake预定义变量" aria-hidden="true">#</a> cmake预定义变量</h2><p><code>以下假设项目文件夹路径为/home/name/project</code></p><table><thead><tr><th>变量</th><th>值</th></tr></thead><tbody><tr><td>PROJECT_SOURCE_DIR</td><td>/home/name/project</td></tr></tbody></table><h2 id="问题汇总" tabindex="-1"><a class="header-anchor" href="#问题汇总" aria-hidden="true">#</a> 问题汇总</h2><h3 id="cmake-vscode配置后源代码中显示头文件找不到" tabindex="-1"><a class="header-anchor" href="#cmake-vscode配置后源代码中显示头文件找不到" aria-hidden="true">#</a> cmake+vscode配置后源代码中显示头文件找不到</h3><p>在项目文件夹下.vscode中settings.json中添加行&quot;C_Cpp.default.configurationProvider&quot;: &quot;vector-of-bool.cmake-tools&quot;</p>`,9),s=[c];function r(l,t){return i(),n("div",null,s)}const u=e(a,[["render",r],["__file","cmake.html.vue"]]);export{u as default};
