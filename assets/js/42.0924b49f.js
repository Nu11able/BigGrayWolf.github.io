(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{451:function(e,n,s){"use strict";s.r(n);var a=s(2),t=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"chapter-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chapter-1"}},[e._v("#")]),e._v(" Chapter 1")]),e._v(" "),n("p",[e._v("gdb "),n("code",[e._v("startfile")])]),e._v(" "),n("p",[e._v("set width w(a number)")]),e._v(" "),n("p",[e._v("break breakpoint "),n("code",[e._v("it could be line number|function name|address")])]),e._v(" "),n("p",[e._v("run")]),e._v(" "),n("p",[e._v("n "),n("code",[e._v("next. line")])]),e._v(" "),n("p",[e._v("s "),n("code",[e._v("step. into the function")])]),e._v(" "),n("p",[e._v("bt "),n("code",[e._v("backtrace.")])]),e._v(" "),n("p",[e._v("p lquote "),n("code",[e._v("print. the value of lquote")])]),e._v(" "),n("ul",[n("li",[e._v("you can also use "),n("code",[e._v("p")]),e._v(" to assign a specific value to an element,such as "),n("code",[e._v("p len_lquote=strlen(lquote)")])])]),e._v(" "),n("blockquote",[n("p",[e._v("We can set them to better values using the p command, since it can print the value of any expression—and that expression can include subroutine calls and assignments.")])]),e._v(" "),n("p",[e._v("l "),n("code",[e._v("list. the source surrounding the current line(10 lines by default)")])]),e._v(" "),n("ul",[n("li",[e._v('you can use "l 50" to display the source surrounding the 50th line')])]),e._v(" "),n("p",[e._v("c "),n("code",[e._v("continue.")])]),e._v(" "),n("h1",{attrs:{id:"chapter-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chapter-2"}},[e._v("#")]),e._v(" Chapter 2")]),e._v(" "),n("p",[e._v("Ctrl-d "),n("code",[e._v("Program exited normally")])]),e._v(" "),n("p",[e._v("q "),n("code",[e._v("quit. the gdb")])]),e._v(" "),n("blockquote",[n("p",[e._v("The most usual way to start gdb is with one argument, specifying an executable program:"),n("code",[e._v("gdb program")]),e._v("\nYou can also start with both an executable program and a core file specified:"),n("code",[e._v("gdb program core")]),e._v("\nYou can, instead, specify a process ID as a second argument or use option -p, if youwant to debug a running process:"),n("code",[e._v("gdb program 1234|gdb -p 1234")])])]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("gdb --args gcc -O2 -c foo.c")]),e._v("This will cause gdb to debug gcc, and to set gcc’s command-line arguments (see\nSection 4.3 [Arguments], page 34) to ‘-O2 -c foo.c.")])]),e._v(" "),n("p",[e._v("gdb --silent|-quiet|-q "),n("code",[e._v("Do not print the introductory and copyright message")])]),e._v(" "),n("p",[e._v("gdb --help | gdb -h")]),e._v(" "),n("p",[e._v("gdb --cd directory "),n("code",[e._v("Run gdb using directory as its working directory, instead of the current directory")])]),e._v(" "),n("blockquote",[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("!command-string\nInvoke a standard shell to execute command-string. Note that no space is\nneeded between ! and command-string. If it exists, the environment variable\nSHELL determines which shell to run. Otherwise gdb uses the default shell\n(‘/bin/sh’ on Unix systems, ‘COMMAND.COM’ on MS-DOS, etc.).\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])]),e._v(" "),n("blockquote",[n("p",[e._v("pipe [command] | shell_command\n| [command] | shell_command\npipe -d delim command delim shell_command\n| -d delim command delim shell_command\nExecutes command and sends its output to shell command. Note that no space\nis needed around |. If no command is provided, the last command executed is\nrepeated.\nIn case the command contains a |, the option -d delim can be used to specify an alternate delimiter string delim that separates the command from the\nshell command.\nExample:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("(gdb) p var\n$1 = {\n    black = 144,\n    red = 233,\n    green = 377,\n    blue = 610,\n    white = 987\n}\n(gdb) pipe p var|wc\n7 19 80\n(gdb) |p var|wc -l\n7\n(gdb) p /x var\n$4 = {\n    black = 0x90,\n    red = 0xe9,\n    green = 0x179,\n    blue = 0x262,\n    white = 0x3db\n}\n(gdb) ||grep red\nred => 0xe9,\n(gdb) | -d ! echo this contains a | char\\n ! sed -e ’s/|/PIPE/’\nthis contains a PIPE char\n(gdb) | -d xxx echo this contains a | char!\\n xxx sed -e ’s/|/PIPE/’\nthis contains a PIPE char!\n(gdb)\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br")])]),n("p",[e._v("The convenience variables $_shell_exitcode and $_shell_exitsignal can be used to\nexamine the exit status of the last shell command launched by shell, make, pipe and |.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code")]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"})])]),e._v(" "),n("h1",{attrs:{id:"gdb-commands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gdb-commands"}},[e._v("#")]),e._v(" GDB commands")]),e._v(" "),n("blockquote",[n("p",[e._v("set print elements NUMBER-OF-ELEMENTS\nset print array-indexes\nset print elements 10 # to change the limit of array elements to print")])])])}),[],!1,null,null,null);n.default=t.exports}}]);