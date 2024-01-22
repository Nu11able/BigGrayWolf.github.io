import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as d,a as i}from"./app-dYRofbQn.js";const a={},s=i(`<h1 id="chapter-1" tabindex="-1"><a class="header-anchor" href="#chapter-1" aria-hidden="true">#</a> Chapter 1</h1><p>gdb <code>startfile</code></p><p>set width w(a number)</p><p>break breakpoint <code>it could be line number|function name|address</code></p><p>run</p><p>n <code>next. line</code></p><p>s <code>step. into the function</code></p><p>bt <code>backtrace.</code></p><p>p lquote <code>print. the value of lquote</code></p><ul><li>you can also use <code>p</code> to assign a specific value to an element,such as <code>p len_lquote=strlen(lquote)</code></li></ul><blockquote><p>We can set them to better values using the p command, since it can print the value of any expression—and that expression can include subroutine calls and assignments.</p></blockquote><p>l <code>list. the source surrounding the current line(10 lines by default) </code></p><ul><li>you can use &quot;l 50&quot; to display the source surrounding the 50th line</li></ul><p>c <code>continue.</code></p><h1 id="chapter-2" tabindex="-1"><a class="header-anchor" href="#chapter-2" aria-hidden="true">#</a> Chapter 2</h1><p>Ctrl-d <code>Program exited normally</code></p><p>q <code>quit. the gdb</code></p><blockquote><p>The most usual way to start gdb is with one argument, specifying an executable program:<code>gdb program</code> You can also start with both an executable program and a core file specified:<code>gdb program core</code> You can, instead, specify a process ID as a second argument or use option -p, if youwant to debug a running process:<code>gdb program 1234|gdb -p 1234</code></p></blockquote><blockquote><p><code>gdb --args gcc -O2 -c foo.c </code>This will cause gdb to debug gcc, and to set gcc’s command-line arguments (see Section 4.3 [Arguments], page 34) to ‘-O2 -c foo.c.</p></blockquote><p>gdb --silent|-quiet|-q <code>Do not print the introductory and copyright message</code></p><p>gdb --help | gdb -h</p><p>gdb --cd directory <code>Run gdb using directory as its working directory, instead of the current directory</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!command-string
Invoke a standard shell to execute command-string. Note that no space is
needed between ! and command-string. If it exists, the environment variable
SHELL determines which shell to run. Otherwise gdb uses the default shell
(‘/bin/sh’ on Unix systems, ‘COMMAND.COM’ on MS-DOS, etc.).

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p>pipe [command] | shell_command | [command] | shell_command pipe -d delim command delim shell_command | -d delim command delim shell_command Executes command and sends its output to shell command. Note that no space is needed around |. If no command is provided, the last command executed is repeated. In case the command contains a |, the option -d delim can be used to specify an alternate delimiter string delim that separates the command from the shell command. Example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(gdb) p var
$1 = {
    black = 144,
    red = 233,
    green = 377,
    blue = 610,
    white = 987
}
(gdb) pipe p var|wc
7 19 80
(gdb) |p var|wc -l
7
(gdb) p /x var
$4 = {
    black = 0x90,
    red = 0xe9,
    green = 0x179,
    blue = 0x262,
    white = 0x3db
}
(gdb) ||grep red
red =&gt; 0xe9,
(gdb) | -d ! echo this contains a | char\\n ! sed -e ’s/|/PIPE/’
this contains a PIPE char
(gdb) | -d xxx echo this contains a | char!\\n xxx sed -e ’s/|/PIPE/’
this contains a PIPE char!
(gdb)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The convenience variables $_shell_exitcode and $_shell_exitsignal can be used to examine the exit status of the last shell command launched by shell, make, pipe and |.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></blockquote><h1 id="gdb-commands" tabindex="-1"><a class="header-anchor" href="#gdb-commands" aria-hidden="true">#</a> GDB commands</h1><blockquote><p>set print elements NUMBER-OF-ELEMENTS set print array-indexes set print elements 10 # to change the limit of array elements to print</p></blockquote>`,26),t=[s];function c(o,l){return n(),d("div",null,t)}const m=e(a,[["render",c],["__file","GDB.html.vue"]]);export{m as default};
