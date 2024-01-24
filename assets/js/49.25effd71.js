(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{488:function(v,_,t){"use strict";t.r(_);var s=t(2),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"tips"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[v._v("#")]),v._v(" Tips")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("cpu对各个部件的控制其实就是对各部件的内存地址空间进行数据的读写")])]),v._v(" "),_("li",[_("p",[v._v("8086CPU有14个寄存器AX,BX,CX,DX,SI,DI,SP,BP,IP,CS,SS,DS,ES,PSW(flag寄存器)")])]),v._v(" "),_("li",[_("p",[v._v("8086CPU有20位地址总线，但其又是16位结构，所以地址加法器采用"),_("strong",[v._v("物理地址=段地址*16+偏移地址")]),v._v("(我们所看到的数据中以16进制来表示，20根地址线达到1M寻址能力需要使用5位十六进制数表示，而8086CPU每次最多只能传递4位十六进制数，所以其在内部使用两个十六位的地址来合成二十位地址)")])]),v._v(" "),_("li",[_("p",[v._v("所谓的段地址中的“段”并不意味着内存被划分为了一个个的段"),_("strong",[v._v("内存并没有分段")]),v._v("，只是因为CPU的寻址方式才有了段地址这个概念，仔细想一想偏移地址最大为FFFFH，这意味着一个段可能最大也就64kb，那我想要访问其他地址怎么办？这个时候就只能改动段地址(想象一根线，你可以在其上选两个点，除了最后一小段第一个点随便选，第二个点只能在第一个点的某一范围内选)")])]),v._v(" "),_("li",[_("p",[v._v("任意时刻CS,IP指向的内容都当做指令执行，既CP:IP总是指向即将被CPU执行的指令，执行之后IP会自动增加(当然也可以改动CS:IP的指向，想想函数之间的跳转)"),_("code",[v._v("mov 指令不能够设置CS:IP的值，jmp可以")])])]),v._v(" "),_("li",[_("p",[v._v("8086CPU不支持将数据直接送入段寄存器的操作，例如"),_("code",[v._v("mov ds,1000H mov cs,00FFH是非法的")])])]),v._v(" "),_("li",[_("p",[v._v("8086CPU的入栈和出栈都是以字为单位进行的(既2byte 16位二进制 因为它是16位CPU？32位的CPU就是以4byte位单位，既4byte位一个字？)")])]),v._v(" "),_("li",[_("p",[v._v("POP和PUSH指令用于出栈和入栈,涉及寄存器SS:SP，"),_("strong",[v._v("任意时刻SS:SP 始终指向栈顶元素")]),v._v("执行PUSH或POP和SP会自动增减"),_("strong",[v._v("入栈时，栈顶从高地址向低地址方向增长")]),v._v(",8086CPU不会检查栈顶是否超界，需要我们自己控制")])]),v._v(" "),_("li",[_("p",[v._v('在8086CPU中只有bx,si,di和bp可以用在"[]"中用来进行内存单元的寻址')])]),v._v(" "),_("li",[_("p",[v._v("在没有寄存器名存在的情况下，用操作符 X ptr指明内存单元的长度(X可以为byte或word) "),_("code",[v._v("mov word ptr [bx],2 或inc byte ptr [bx]")])])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("一般来说，我们可以用[bx + idata + si]的方式来访问结构体中的数据。用bx定位整个结构体，用idata定位结构体中的某一个数据项，用si定位数组项中的每个元素。为此，汇编语言提供了更为贴切的书写方式，如"),_("code",[v._v("[bx].idata [bx].idata[si]")])])])])]),v._v(" "),_("blockquote",[_("p",[v._v("在“[]”中bx,si,di和bp可以单独出现，或只能以4种组合出现")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mov ax,[bx]\nmox ax,[si]\nmox ax,[di]\nmox ax,[bp]\nmov ax,[bx + si]\nmox ax,[bx + di]\nmox ax,[bp + si]\nmox ax,[bp + di]\nmov ax,[bx + si + idata]\nmox ax,[bx + di + idata]\nmox ax,[bp + si + idata]\nmox ax,[bp + di + idata]\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br"),_("span",{staticClass:"line-number"},[v._v("10")]),_("br"),_("span",{staticClass:"line-number"},[v._v("11")]),_("br"),_("span",{staticClass:"line-number"},[v._v("12")]),_("br")])]),_("p",[v._v("下面的指令是错误的")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mov ax,[bx+bp]\nmov ax,[si+di]\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("p",[_("strong",[v._v("只要在[...]中使用寄存器bp，而指令中没有显性的给出段地址，段地址就默认在ss中")])])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("寄存器")]),v._v(" "),_("th",[v._v("作用")]),v._v(" "),_("th",[v._v("是否可分为两个八位")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("AX")]),v._v(" "),_("td",[v._v("通用寄存器")]),v._v(" "),_("td",[v._v("是 AH AL")])]),v._v(" "),_("tr",[_("td",[v._v("BX")]),v._v(" "),_("td",[v._v("通用寄存器")]),v._v(" "),_("td",[v._v("是 BH BL")])]),v._v(" "),_("tr",[_("td",[v._v("CX")]),v._v(" "),_("td",[v._v("通用寄存器")]),v._v(" "),_("td",[v._v("是 CH CL")])]),v._v(" "),_("tr",[_("td",[v._v("DX")]),v._v(" "),_("td",[v._v("通用寄存器")]),v._v(" "),_("td",[v._v("是 DH DL")])]),v._v(" "),_("tr",[_("td",[v._v("CS")]),v._v(" "),_("td",[v._v("代码段寄存器")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("IP")]),v._v(" "),_("td",[v._v("指令指针寄存器")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("DS")]),v._v(" "),_("td",[v._v("数据段寄存器")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("SS")]),v._v(" "),_("td",[v._v("栈段寄存器")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("SP")]),v._v(" "),_("td",[v._v("栈顶指针")]),v._v(" "),_("td",[v._v("任意时刻SS:SP始终指向栈顶")])]),v._v(" "),_("tr",[_("td",[v._v("SI")]),v._v(" "),_("td",[v._v("与BX功能相近")]),v._v(" "),_("td",[v._v("不能分为两个八位寄存器")])]),v._v(" "),_("tr",[_("td",[v._v("DI")]),v._v(" "),_("td",[v._v("与BX功能相近")]),v._v(" "),_("td",[v._v("不能分为两个八位寄存器")])]),v._v(" "),_("tr",[_("td",[v._v("BP")]),v._v(" "),_("td",[v._v("用在[...]寻址中?")]),v._v(" "),_("td",[_("strong",[v._v("只要在[...]中使用寄存器bp，而指令中没有显性的给出段地址，段地址就默认在ss中")])])]),v._v(" "),_("tr",[_("td",[v._v("PSW")]),v._v(" "),_("td",[v._v("(flag寄存器)")]),v._v(" "),_("td")])])]),v._v(" "),_("h1",{attrs:{id:"汇编指令汇总"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#汇编指令汇总"}},[v._v("#")]),v._v(" 汇编指令汇总")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("汇编指令")]),v._v(" "),_("th",[v._v("控制CPU完成的操作")]),v._v(" "),_("th",[v._v("描述")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("mov ax,18")]),v._v(" "),_("td",[v._v("将18送入寄存器AX")]),v._v(" "),_("td",[v._v("AX=18")])]),v._v(" "),_("tr",[_("td",[v._v("add ax,[0]")]),v._v(" "),_("td",[v._v("将AX中的数值加DS:0地址处的值结果存入AX")]),v._v(" "),_("td",[v._v("AX=AX+[ds*16+0]")])]),v._v(" "),_("tr",[_("td",[v._v("sub ax,bx")]),v._v(" "),_("td",[v._v("将AX中的数据减去BX中的数据后结果存入AX")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("mul reg/内存单元")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("乘法指令")])]),v._v(" "),_("tr",[_("td",[v._v("div reg/内存单元")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("除法指令")])]),v._v(" "),_("tr",[_("td",[v._v("push ax")]),v._v(" "),_("td",[v._v("将AX的值入栈")]),v._v(" "),_("td",[v._v("(1)SP=SP-2 (2)[SS*16+SP]=AX")])]),v._v(" "),_("tr",[_("td",[v._v("pop ax")]),v._v(" "),_("td",[v._v("将栈顶数据送入AX")]),v._v(" "),_("td",[v._v("(1)AX=[SS*16+SP] (2)SP=SP+2")])]),v._v(" "),_("tr",[_("td",[v._v("inc bx")]),v._v(" "),_("td",[v._v("BX中的内容加1")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("dec bx")]),v._v(" "),_("td",[v._v("BX中的内容减1")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("shl 操作数,移动位数")]),v._v(" "),_("td",[v._v("逻辑左移指令")]),v._v(" "),_("td",[v._v("将移出的一位写入cf低位补0,如果移动位数大于1则必须将移动位数放入al")])]),v._v(" "),_("tr",[_("td",[v._v("shr 操作数,移动位数")]),v._v(" "),_("td",[v._v("逻辑右移指令")]),v._v(" "),_("td",[v._v("将移出的一位写入cf低位补0,如果移动位数大于1则必须将移动位数放入al")])]),v._v(" "),_("tr",[_("td",[v._v("and ax,bx")]),v._v(" "),_("td",[v._v("按位与运算，将结果存入ax")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("or ax,bx")]),v._v(" "),_("td",[v._v("按位或运算，将结果存入ax")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("offset 标号")]),v._v(" "),_("td",[v._v("由编译器处理功能是取得标号的偏移地址")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("seg 标号")]),v._v(" "),_("td",[v._v("由编译器处理功能是取得标号的段地址")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("adc 操作对象1,操作对象2")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("操作对象1=操作对象1+操作对象2+CF")])]),v._v(" "),_("tr",[_("td",[v._v("sbb 操作对象1,操作对象2")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("操作对象1=操作对象1-操作对象2-CF")])]),v._v(" "),_("tr",[_("td",[v._v("cmp 操作对象1,操作对象2")]),v._v(" "),_("td",[v._v("相当于减法指令但不保存结果但会对标志寄存器产生影响")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("cld")]),v._v(" "),_("td",[v._v("将标志寄存器df位置0")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("std")]),v._v(" "),_("td",[v._v("将标志寄存器df位置1")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("cli")]),v._v(" "),_("td",[v._v("将标志寄存器if位置0")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("sti")]),v._v(" "),_("td",[v._v("将标志寄存器if位置1")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("pushf")]),v._v(" "),_("td",[v._v("将标志寄存器压栈")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("popf")]),v._v(" "),_("td",[v._v("将栈中数据送入标志寄存器")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("loop 标号")]),v._v(" "),_("td",[v._v("循环")]),v._v(" "),_("td",[v._v("(1)CX=CX-1 (2)若CX不为零则转至标号处，否则向下执行")])]),v._v(" "),_("tr",[_("td",[v._v("jmp 段地址:偏移地")]),v._v(" "),_("td",[v._v("同时修改CS:IP")]),v._v(" "),_("td",[v._v("无条件转移指令("),_("strong",[v._v("只能在debug中使用,不能在源程序中使用")]),v._v(")")])]),v._v(" "),_("tr",[_("td",[v._v("jmp 某一合法寄存器")]),v._v(" "),_("td",[v._v("仅修改IP")]),v._v(" "),_("td",[v._v("无条件转移指令,转移目的地址在寄存器中")])]),v._v(" "),_("tr",[_("td",[v._v("jmp short 标号")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("段内短转移8位位移，仅修改IP，依据位移进行转移")])]),v._v(" "),_("tr",[_("td",[v._v("jmp near ptr 标号")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("段内近转移16位位移，仅修改IP，依据位移进行转移")])]),v._v(" "),_("tr",[_("td",[v._v("jmp far ptr 标号")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("段间转移，同时修改CS和IP,转移目的地址在指令中")])]),v._v(" "),_("tr",[_("td",[v._v("jmp word ptr 内存单元地址")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("段内转移，仅修改IP,转移目的地址在内存中")])]),v._v(" "),_("tr",[_("td",[v._v("jmp dword ptr 内存单元地址")]),v._v(" "),_("td",[v._v("CS=(内存单元地址+2) IP=内存单元地址")]),v._v(" "),_("td",[v._v("段间转移，同时修改CS和IP,转移目的地址在内存中")])]),v._v(" "),_("tr",[_("td",[v._v("jcxz 标号")]),v._v(" "),_("td",[v._v("用法:IP=IP+8位位移")]),v._v(" "),_("td",[v._v("有条件转移指令,所有的有条件转移指令都是短转移,如果CX=0,转移到标号处执行")])]),v._v(" "),_("tr",[_("td",[v._v("ret")]),v._v(" "),_("td",[v._v("修改IP内容,实现近转移")]),v._v(" "),_("td",[v._v("(1)IP=SS*16+SP (2)SP=SP+2")])]),v._v(" "),_("tr",[_("td",[v._v("retf")]),v._v(" "),_("td",[v._v("修改CS和IP内容,实现远转移")]),v._v(" "),_("td",[v._v("(1)IP=SS*16+SP (2)SP=SP+2 (3)CS=SS*16+SP (4)SP=SP+2")])]),v._v(" "),_("tr",[_("td",[v._v("iret")]),v._v(" "),_("td",[v._v("通常和硬件自动完成的中断过程配合使用")]),v._v(" "),_("td",[v._v("(1)pop IP  (2)pop CS  (3)popf")])]),v._v(" "),_("tr",[_("td",[v._v("call 标号/16位reg")]),v._v(" "),_("td",[v._v("将当前IP或CS和IP压入栈并转移(call不能实现短转移)")]),v._v(" "),_("td",[v._v("(1)SP=SP-2 SS*16+SP=IP (2)IP=IP+16位位移/reg")])]),v._v(" "),_("tr",[_("td",[v._v("call far ptr 标号")]),v._v(" "),_("td",[v._v("实现段间转移")]),v._v(" "),_("td",[v._v("(2)SP=SP-2 SS"),_("em",[v._v("16+SP=CS SP=SP-2 SS")]),v._v("16+SP=IP (2)设置CS 设置IP")])]),v._v(" "),_("tr",[_("td",[v._v("call word ptr 内存单元地址")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("push IP   jmp word ptr 内存单元地址")])]),v._v(" "),_("tr",[_("td",[v._v("call dword ptr 内存单元地址")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("push CS  push IP  jmp dword ptr 内存单元地址")])])])]),v._v(" "),_("p",[v._v("(loop以及loop之后的的指令都是转移指令)")]),v._v(" "),_("h2",{attrs:{id:"补充"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[v._v("#")]),v._v(" 补充")]),v._v(" "),_("h3",{attrs:{id:"div"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#div"}},[v._v("#")]),v._v(" div：")]),v._v(" "),_("p",[v._v("(1)除数有8位或16位，在一个寄存器或内存单元中\n(2)被除数:默认放在ax中(除数位8位，被除数为16位)或放在AX和DX中(除数位16位，被除数为32位，DX存高16位AX存低16位)\n(3)如果除数为8位，AL存商AH存余数；如果除数为16位，AX存商DX存余数。")]),v._v(" "),_("h3",{attrs:{id:"mul"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mul"}},[v._v("#")]),v._v(" mul：")]),v._v(" "),_("p",[v._v("(1)两个数要么都是8位要么都是16位\n(2)如果是8/16位，一个默认放在AL/AX中，另一个默认放在8位/16位reg或内存单元字节中\n(3)如果为8位，结果默认放在AX,如果是16位DX默认放高位AX默认放低位。")]),v._v(" "),_("h3",{attrs:{id:"flag寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flag寄存器"}},[v._v("#")]),v._v(" flag寄存器")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("15")]),v._v(" "),_("th",[v._v("14")]),v._v(" "),_("th",[v._v("13")]),v._v(" "),_("th",[v._v("12")]),v._v(" "),_("th",[v._v("11")]),v._v(" "),_("th",[v._v("10")]),v._v(" "),_("th",[v._v("9")]),v._v(" "),_("th",[v._v("8")]),v._v(" "),_("th",[v._v("7")]),v._v(" "),_("th",[v._v("6")]),v._v(" "),_("th",[v._v("5")]),v._v(" "),_("th",[v._v("4")]),v._v(" "),_("th",[v._v("3")]),v._v(" "),_("th",[v._v("2")]),v._v(" "),_("th",[v._v("1")]),v._v(" "),_("th",[v._v("0")])])]),v._v(" "),_("tbody",[_("tr",[_("td"),v._v(" "),_("td"),v._v(" "),_("td"),v._v(" "),_("td"),v._v(" "),_("td",[v._v("OF")]),v._v(" "),_("td",[v._v("DF")]),v._v(" "),_("td",[v._v("IF")]),v._v(" "),_("td",[v._v("TF")]),v._v(" "),_("td",[v._v("SF")]),v._v(" "),_("td",[v._v("ZF")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("AF")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("PF")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("CF")])]),v._v(" "),_("tr",[_("td"),v._v(" "),_("td"),v._v(" "),_("td"),v._v(" "),_("td"),v._v(" "),_("td",[v._v("溢出标志位")]),v._v(" "),_("td",[v._v("方向标志位")]),v._v(" "),_("td",[v._v("可屏蔽中断标志")]),v._v(" "),_("td",[v._v("TF")]),v._v(" "),_("td",[v._v("符号标志位")]),v._v(" "),_("td",[v._v("0标志位")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("AF")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("奇偶标志位PF")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("进位标志位")])]),v._v(" "),_("tr",[_("td"),v._v(" "),_("td"),v._v(" "),_("td"),v._v(" "),_("td"),v._v(" "),_("td",[v._v("记录相关命令执行后结果是否溢出,如果溢出OF=1否则为0")]),v._v(" "),_("td",[v._v("控制每次操作后si,di的增减，如果df=0每次操作后si、di递增否则递减")]),v._v(" "),_("td",[v._v("IF")]),v._v(" "),_("td",[v._v("TF")]),v._v(" "),_("td",[v._v("记录相关命令执行后结果是否为负,如果为负SF=1否则为0")]),v._v(" "),_("td",[v._v("记录相关命令执行后结果是否为0,如结果为0，那么ZF=1否则ZF=0")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("AF")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("记录相关命令执行后结果所有bit为中1的个数是否为偶数,如果为偶数PF=1否则为0")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("记录运算结果向更高位的进位值或向更高位的借位值")])])])]),v._v(" "),_("h3",{attrs:{id:"检测比较结果的条件转移指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#检测比较结果的条件转移指令"}},[v._v("#")]),v._v(" 检测比较结果的条件转移指令")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("指令")]),v._v(" "),_("th",[v._v("含义")]),v._v(" "),_("th",[v._v("检测的相关标志位")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("je")]),v._v(" "),_("td",[v._v("等于则转移")]),v._v(" "),_("td",[v._v("zf=1")])]),v._v(" "),_("tr",[_("td",[v._v("jne")]),v._v(" "),_("td",[v._v("不等于则 转移")]),v._v(" "),_("td",[v._v("zf=0")])]),v._v(" "),_("tr",[_("td",[v._v("jb")]),v._v(" "),_("td",[v._v("低于则转移")]),v._v(" "),_("td",[v._v("cf=1")])]),v._v(" "),_("tr",[_("td",[v._v("jnb")]),v._v(" "),_("td",[v._v("不低于则转移")]),v._v(" "),_("td",[v._v("cf=0")])]),v._v(" "),_("tr",[_("td",[v._v("ja")]),v._v(" "),_("td",[v._v("高于则转移")]),v._v(" "),_("td",[v._v("cf=0且zf=0")])]),v._v(" "),_("tr",[_("td",[v._v("jna")]),v._v(" "),_("td",[v._v("不高于则转移")]),v._v(" "),_("td",[v._v("cf=1或zf=1")])])])]),v._v(" "),_("p",[_("em",[v._v("助记:j->jump,e->equal,n->not,b->below,a->above")])]),v._v(" "),_("h1",{attrs:{id:"汇编程序的编写"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#汇编程序的编写"}},[v._v("#")]),v._v(" 汇编程序的编写")]),v._v(" "),_("p",[v._v("源程序->编译->连接->执行")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("汇编语言中包含两种指令，一种是汇编指令，一种是伪指令，汇编指令最终是要被CPU执行的，为伪指令由编译器来执行")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("汇编源程序中，数据不能以字母开头")]),v._v("，所以要在前面加0。如A000h应该写为0A000h。")])]),v._v(" "),_("li",[_("p",[v._v('在汇编源程序中，如果希望在"[]"中直接给出内存单元的偏移地址，则需要在"[]"前面显式的给出段地址所在的段寄存器。如 mov ax,ds:[0] (在汇编语言中称之为段前缀)')])]),v._v(" "),_("li",[_("p",[v._v("db:定义一个字节   dw:定义一个字   dd:定义两个字   dup:用来进行数据重复"),_("code",[v._v("db 3 dup(0)")]),v._v("定义了3个字节，他们的值都是0，相当于"),_("code",[v._v("db 0,0,0")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("S:nop")]),v._v(" 中nop代表no operation,空操作占用一个机器周期")])])]),v._v(" "),_("div",{staticClass:"language-asm line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("assume cs:codeseg\n\ncodeseg segment\n\t# 2*(123+456)\n\tmov ax,0123H\n\tmov bx,0456H\n\tadd ax,bx\n\tadd ax,ax\n\n    mov ax,4c00H\n    int 21H\ncodeseg ends\n\nend\n\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br"),_("span",{staticClass:"line-number"},[v._v("10")]),_("br"),_("span",{staticClass:"line-number"},[v._v("11")]),_("br"),_("span",{staticClass:"line-number"},[v._v("12")]),_("br"),_("span",{staticClass:"line-number"},[v._v("13")]),_("br"),_("span",{staticClass:"line-number"},[v._v("14")]),_("br"),_("span",{staticClass:"line-number"},[v._v("15")]),_("br")])]),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v(";假设b是一个标号\nb: db 10 dup(0)\nmov ax,b\nmov b:[2],ax\n;在指令中使用标号,它相当于一个地址同时还指定了长度\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])]),_("p",[v._v("##伪指令")]),v._v(" "),_("p",[v._v("(1) XXX segment\n:\n:\nXXX ends")]),v._v(" "),_("blockquote",[_("p",[v._v("segment和ends是成对使用的伪指令，这是在写可被编译器编译的汇编程序时必须用到的一对伪指令。segment和ends的功能是定义一个段，segment说明一个段的开始，ends说明一个段的结束。一个段必须有名称标记，使用格式为：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("段名 segment\n      :\n段名 ends\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])])]),v._v(" "),_("p",[v._v("利用此方法将代码段、数据段、栈段分隔开\n(2) end")]),v._v(" "),_("blockquote",[_("p",[v._v("end是一个汇编程序结束的标记，编译器在编译汇编程序的过程中，如果碰到了伪指令end，就结束对源程序的编译。(如果源程序有多个代码段，在end后面加上标号，以指定程序入口)")])]),v._v(" "),_("p",[v._v("(3) assume")]),v._v(" "),_("blockquote",[_("p",[v._v("这条伪指令的含义为“假设”。它假设某一段寄存器和程序中的某一个用segment...ends 定义的段相关联")])]),v._v(" "),_("p",[v._v("(4) 标号")]),v._v(" "),_("blockquote",[_("p",[v._v("汇编源程序中，除了汇编指令和伪指令外，还有一些标号，比如“codeseg”。一个标号指代了一个地址。比如codeseg在segment前面，作为一个段的名称，这个段的名称最终将被编译、连接程序处理为一个段的段地址")])]),v._v(" "),_("p",[v._v("(5) 程序返回")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mov ax,4c00H\nint 21H\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("h1",{attrs:{id:"端口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#端口"}},[v._v("#")]),v._v(" 端口")]),v._v(" "),_("ul",[_("li",[v._v("端口地址范围0~65535(oxffff)")]),v._v(" "),_("li",[v._v("端口只能用in和out来从端口读取数据和往端口写入数据")]),v._v(" "),_("li",[v._v("在in和out指令中，只能用ax或al来存放从端口中读入的数据或要发送到端口的数据")])]),v._v(" "),_("blockquote",[_("p",[v._v("对0~255以内的端口进行读写时:")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("in al,20h ;从20h端口读一个字节\nout 20h,al ;往20端口写入一个字节\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("p",[v._v("对256~65535的端口进行读写时,端口号放在dx中")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mov dx,3f8h\nin al,dx   ;从3f8h端口读一个字节\nout dx,al  ;向3f8h端口写一个字节\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);