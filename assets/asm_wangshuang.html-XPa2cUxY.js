import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as e,a as r}from"./app-dYRofbQn.js";const i={},a=r(`<h1 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h1><ul><li><p>cpu对各个部件的控制其实就是对各部件的内存地址空间进行数据的读写</p></li><li><p>8086CPU有14个寄存器AX,BX,CX,DX,SI,DI,SP,BP,IP,CS,SS,DS,ES,PSW(flag寄存器)</p></li><li><p>8086CPU有20位地址总线，但其又是16位结构，所以地址加法器采用<strong>物理地址=段地址*16+偏移地址</strong>(我们所看到的数据中以16进制来表示，20根地址线达到1M寻址能力需要使用5位十六进制数表示，而8086CPU每次最多只能传递4位十六进制数，所以其在内部使用两个十六位的地址来合成二十位地址)</p></li><li><p>所谓的段地址中的“段”并不意味着内存被划分为了一个个的段<strong>内存并没有分段</strong>，只是因为CPU的寻址方式才有了段地址这个概念，仔细想一想偏移地址最大为FFFFH，这意味着一个段可能最大也就64kb，那我想要访问其他地址怎么办？这个时候就只能改动段地址(想象一根线，你可以在其上选两个点，除了最后一小段第一个点随便选，第二个点只能在第一个点的某一范围内选)</p></li><li><p>任意时刻CS,IP指向的内容都当做指令执行，既CP:IP总是指向即将被CPU执行的指令，执行之后IP会自动增加(当然也可以改动CS:IP的指向，想想函数之间的跳转)<code>mov 指令不能够设置CS:IP的值，jmp可以</code></p></li><li><p>8086CPU不支持将数据直接送入段寄存器的操作，例如<code>mov ds,1000H mov cs,00FFH是非法的</code></p></li><li><p>8086CPU的入栈和出栈都是以字为单位进行的(既2byte 16位二进制 因为它是16位CPU？32位的CPU就是以4byte位单位，既4byte位一个字？)</p></li><li><p>POP和PUSH指令用于出栈和入栈,涉及寄存器SS:SP，<strong>任意时刻SS:SP 始终指向栈顶元素</strong>执行PUSH或POP和SP会自动增减<strong>入栈时，栈顶从高地址向低地址方向增长</strong>,8086CPU不会检查栈顶是否超界，需要我们自己控制</p></li><li><p>在8086CPU中只有bx,si,di和bp可以用在&quot;[]&quot;中用来进行内存单元的寻址</p></li><li><p>在没有寄存器名存在的情况下，用操作符 X ptr指明内存单元的长度(X可以为byte或word) <code>mov word ptr [bx],2 或inc byte ptr [bx]</code></p></li><li><blockquote><p>一般来说，我们可以用[bx + idata + si]的方式来访问结构体中的数据。用bx定位整个结构体，用idata定位结构体中的某一个数据项，用si定位数组项中的每个元素。为此，汇编语言提供了更为贴切的书写方式，如<code>[bx].idata [bx].idata[si]</code></p></blockquote></li></ul><blockquote><p>在“[]”中bx,si,di和bp可以单独出现，或只能以4种组合出现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mov ax,[bx]
mox ax,[si]
mox ax,[di]
mox ax,[bp]
mov ax,[bx + si]
mox ax,[bx + di]
mox ax,[bp + si]
mox ax,[bp + di]
mov ax,[bx + si + idata]
mox ax,[bx + di + idata]
mox ax,[bp + si + idata]
mox ax,[bp + di + idata]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的指令是错误的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mov ax,[bx+bp]
mov ax,[si+di]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>只要在[...]中使用寄存器bp，而指令中没有显性的给出段地址，段地址就默认在ss中</strong></p></blockquote><table><thead><tr><th>寄存器</th><th>作用</th><th>是否可分为两个八位</th></tr></thead><tbody><tr><td>AX</td><td>通用寄存器</td><td>是 AH AL</td></tr><tr><td>BX</td><td>通用寄存器</td><td>是 BH BL</td></tr><tr><td>CX</td><td>通用寄存器</td><td>是 CH CL</td></tr><tr><td>DX</td><td>通用寄存器</td><td>是 DH DL</td></tr><tr><td>CS</td><td>代码段寄存器</td><td></td></tr><tr><td>IP</td><td>指令指针寄存器</td><td></td></tr><tr><td>DS</td><td>数据段寄存器</td><td></td></tr><tr><td>SS</td><td>栈段寄存器</td><td></td></tr><tr><td>SP</td><td>栈顶指针</td><td>任意时刻SS:SP始终指向栈顶</td></tr><tr><td>SI</td><td>与BX功能相近</td><td>不能分为两个八位寄存器</td></tr><tr><td>DI</td><td>与BX功能相近</td><td>不能分为两个八位寄存器</td></tr><tr><td>BP</td><td>用在[...]寻址中?</td><td><strong>只要在[...]中使用寄存器bp，而指令中没有显性的给出段地址，段地址就默认在ss中</strong></td></tr><tr><td>PSW</td><td>(flag寄存器)</td><td></td></tr></tbody></table><h1 id="汇编指令汇总" tabindex="-1"><a class="header-anchor" href="#汇编指令汇总" aria-hidden="true">#</a> 汇编指令汇总</h1><table><thead><tr><th>汇编指令</th><th>控制CPU完成的操作</th><th>描述</th></tr></thead><tbody><tr><td>mov ax,18</td><td>将18送入寄存器AX</td><td>AX=18</td></tr><tr><td>add ax,[0]</td><td>将AX中的数值加DS:0地址处的值结果存入AX</td><td>AX=AX+[ds*16+0]</td></tr><tr><td>sub ax,bx</td><td>将AX中的数据减去BX中的数据后结果存入AX</td><td></td></tr><tr><td>mul reg/内存单元</td><td></td><td>乘法指令</td></tr><tr><td>div reg/内存单元</td><td></td><td>除法指令</td></tr><tr><td>push ax</td><td>将AX的值入栈</td><td>(1)SP=SP-2 (2)[SS*16+SP]=AX</td></tr><tr><td>pop ax</td><td>将栈顶数据送入AX</td><td>(1)AX=[SS*16+SP] (2)SP=SP+2</td></tr><tr><td>inc bx</td><td>BX中的内容加1</td><td></td></tr><tr><td>dec bx</td><td>BX中的内容减1</td><td></td></tr><tr><td>shl 操作数,移动位数</td><td>逻辑左移指令</td><td>将移出的一位写入cf低位补0,如果移动位数大于1则必须将移动位数放入al</td></tr><tr><td>shr 操作数,移动位数</td><td>逻辑右移指令</td><td>将移出的一位写入cf低位补0,如果移动位数大于1则必须将移动位数放入al</td></tr><tr><td>and ax,bx</td><td>按位与运算，将结果存入ax</td><td></td></tr><tr><td>or ax,bx</td><td>按位或运算，将结果存入ax</td><td></td></tr><tr><td>offset 标号</td><td>由编译器处理功能是取得标号的偏移地址</td><td></td></tr><tr><td>seg 标号</td><td>由编译器处理功能是取得标号的段地址</td><td></td></tr><tr><td>adc 操作对象1,操作对象2</td><td></td><td>操作对象1=操作对象1+操作对象2+CF</td></tr><tr><td>sbb 操作对象1,操作对象2</td><td></td><td>操作对象1=操作对象1-操作对象2-CF</td></tr><tr><td>cmp 操作对象1,操作对象2</td><td>相当于减法指令但不保存结果但会对标志寄存器产生影响</td><td></td></tr><tr><td>cld</td><td>将标志寄存器df位置0</td><td></td></tr><tr><td>std</td><td>将标志寄存器df位置1</td><td></td></tr><tr><td>cli</td><td>将标志寄存器if位置0</td><td></td></tr><tr><td>sti</td><td>将标志寄存器if位置1</td><td></td></tr><tr><td>pushf</td><td>将标志寄存器压栈</td><td></td></tr><tr><td>popf</td><td>将栈中数据送入标志寄存器</td><td></td></tr><tr><td>loop 标号</td><td>循环</td><td>(1)CX=CX-1 (2)若CX不为零则转至标号处，否则向下执行</td></tr><tr><td>jmp 段地址:偏移地</td><td>同时修改CS:IP</td><td>无条件转移指令(<strong>只能在debug中使用,不能在源程序中使用</strong>)</td></tr><tr><td>jmp 某一合法寄存器</td><td>仅修改IP</td><td>无条件转移指令,转移目的地址在寄存器中</td></tr><tr><td>jmp short 标号</td><td></td><td>段内短转移8位位移，仅修改IP，依据位移进行转移</td></tr><tr><td>jmp near ptr 标号</td><td></td><td>段内近转移16位位移，仅修改IP，依据位移进行转移</td></tr><tr><td>jmp far ptr 标号</td><td></td><td>段间转移，同时修改CS和IP,转移目的地址在指令中</td></tr><tr><td>jmp word ptr 内存单元地址</td><td></td><td>段内转移，仅修改IP,转移目的地址在内存中</td></tr><tr><td>jmp dword ptr 内存单元地址</td><td>CS=(内存单元地址+2) IP=内存单元地址</td><td>段间转移，同时修改CS和IP,转移目的地址在内存中</td></tr><tr><td>jcxz 标号</td><td>用法:IP=IP+8位位移</td><td>有条件转移指令,所有的有条件转移指令都是短转移,如果CX=0,转移到标号处执行</td></tr><tr><td>ret</td><td>修改IP内容,实现近转移</td><td>(1)IP=SS*16+SP (2)SP=SP+2</td></tr><tr><td>retf</td><td>修改CS和IP内容,实现远转移</td><td>(1)IP=SS*16+SP (2)SP=SP+2 (3)CS=SS*16+SP (4)SP=SP+2</td></tr><tr><td>iret</td><td>通常和硬件自动完成的中断过程配合使用</td><td>(1)pop IP (2)pop CS (3)popf</td></tr><tr><td>call 标号/16位reg</td><td>将当前IP或CS和IP压入栈并转移(call不能实现短转移)</td><td>(1)SP=SP-2 SS*16+SP=IP (2)IP=IP+16位位移/reg</td></tr><tr><td>call far ptr 标号</td><td>实现段间转移</td><td>(2)SP=SP-2 SS<em>16+SP=CS SP=SP-2 SS</em>16+SP=IP (2)设置CS 设置IP</td></tr><tr><td>call word ptr 内存单元地址</td><td></td><td>push IP jmp word ptr 内存单元地址</td></tr><tr><td>call dword ptr 内存单元地址</td><td></td><td>push CS push IP jmp dword ptr 内存单元地址</td></tr></tbody></table><p>(loop以及loop之后的的指令都是转移指令)</p><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2><h3 id="div" tabindex="-1"><a class="header-anchor" href="#div" aria-hidden="true">#</a> div：</h3><p>(1)除数有8位或16位，在一个寄存器或内存单元中 (2)被除数:默认放在ax中(除数位8位，被除数为16位)或放在AX和DX中(除数位16位，被除数为32位，DX存高16位AX存低16位) (3)如果除数为8位，AL存商AH存余数；如果除数为16位，AX存商DX存余数。</p><h3 id="mul" tabindex="-1"><a class="header-anchor" href="#mul" aria-hidden="true">#</a> mul：</h3><p>(1)两个数要么都是8位要么都是16位 (2)如果是8/16位，一个默认放在AL/AX中，另一个默认放在8位/16位reg或内存单元字节中 (3)如果为8位，结果默认放在AX,如果是16位DX默认放高位AX默认放低位。</p><h3 id="flag寄存器" tabindex="-1"><a class="header-anchor" href="#flag寄存器" aria-hidden="true">#</a> flag寄存器</h3><table><thead><tr><th>15</th><th>14</th><th>13</th><th>12</th><th>11</th><th>10</th><th>9</th><th>8</th><th>7</th><th>6</th><th>5</th><th>4</th><th>3</th><th>2</th><th>1</th><th>0</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td>OF</td><td>DF</td><td>IF</td><td>TF</td><td>SF</td><td>ZF</td><td></td><td>AF</td><td></td><td>PF</td><td></td><td>CF</td></tr><tr><td></td><td></td><td></td><td></td><td>溢出标志位</td><td>方向标志位</td><td>可屏蔽中断标志</td><td>TF</td><td>符号标志位</td><td>0标志位</td><td></td><td>AF</td><td></td><td>奇偶标志位PF</td><td></td><td>进位标志位</td></tr><tr><td></td><td></td><td></td><td></td><td>记录相关命令执行后结果是否溢出,如果溢出OF=1否则为0</td><td>控制每次操作后si,di的增减，如果df=0每次操作后si、di递增否则递减</td><td>IF</td><td>TF</td><td>记录相关命令执行后结果是否为负,如果为负SF=1否则为0</td><td>记录相关命令执行后结果是否为0,如结果为0，那么ZF=1否则ZF=0</td><td></td><td>AF</td><td></td><td>记录相关命令执行后结果所有bit为中1的个数是否为偶数,如果为偶数PF=1否则为0</td><td></td><td>记录运算结果向更高位的进位值或向更高位的借位值</td></tr></tbody></table><h3 id="检测比较结果的条件转移指令" tabindex="-1"><a class="header-anchor" href="#检测比较结果的条件转移指令" aria-hidden="true">#</a> 检测比较结果的条件转移指令</h3><table><thead><tr><th>指令</th><th>含义</th><th>检测的相关标志位</th></tr></thead><tbody><tr><td>je</td><td>等于则转移</td><td>zf=1</td></tr><tr><td>jne</td><td>不等于则 转移</td><td>zf=0</td></tr><tr><td>jb</td><td>低于则转移</td><td>cf=1</td></tr><tr><td>jnb</td><td>不低于则转移</td><td>cf=0</td></tr><tr><td>ja</td><td>高于则转移</td><td>cf=0且zf=0</td></tr><tr><td>jna</td><td>不高于则转移</td><td>cf=1或zf=1</td></tr><tr><td><em>助记:j-&gt;jump,e-&gt;equal,n-&gt;not,b-&gt;below,a-&gt;above</em></td><td></td><td></td></tr></tbody></table><h1 id="汇编程序的编写" tabindex="-1"><a class="header-anchor" href="#汇编程序的编写" aria-hidden="true">#</a> 汇编程序的编写</h1><p>源程序-&gt;编译-&gt;连接-&gt;执行</p><ul><li><p>汇编语言中包含两种指令，一种是汇编指令，一种是伪指令，汇编指令最终是要被CPU执行的，为伪指令由编译器来执行</p></li><li><p><strong>汇编源程序中，数据不能以字母开头</strong>，所以要在前面加0。如A000h应该写为0A000h。</p></li><li><p>在汇编源程序中，如果希望在&quot;[]&quot;中直接给出内存单元的偏移地址，则需要在&quot;[]&quot;前面显式的给出段地址所在的段寄存器。如 mov ax,ds:[0] (在汇编语言中称之为段前缀)</p></li><li><p>db:定义一个字节 dw:定义一个字 dd:定义两个字 dup:用来进行数据重复<code>db 3 dup(0)</code>定义了3个字节，他们的值都是0，相当于<code>db 0,0,0</code></p></li><li><p><code>S:nop</code> 中nop代表no operation,空操作占用一个机器周期</p></li></ul><div class="language-asm line-numbers-mode" data-ext="asm"><pre class="language-asm"><code>assume cs:codeseg

codeseg segment
	# 2*(123+456)
	mov ax,0123H
	mov bx,0456H
	add ax,bx
	add ax,ax

    mov ax,4c00H
    int 21H
codeseg ends

end

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>;假设b是一个标号
b: db 10 dup(0)
mov ax,b
mov b:[2],ax
;在指令中使用标号,它相当于一个地址同时还指定了长度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##伪指令</p><p>(1) XXX segment : : XXX ends</p><blockquote><p>segment和ends是成对使用的伪指令，这是在写可被编译器编译的汇编程序时必须用到的一对伪指令。segment和ends的功能是定义一个段，segment说明一个段的开始，ends说明一个段的结束。一个段必须有名称标记，使用格式为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>段名 segment
      :
段名 ends
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>利用此方法将代码段、数据段、栈段分隔开 (2) end</p><blockquote><p>end是一个汇编程序结束的标记，编译器在编译汇编程序的过程中，如果碰到了伪指令end，就结束对源程序的编译。(如果源程序有多个代码段，在end后面加上标号，以指定程序入口)</p></blockquote><p>(3) assume</p><blockquote><p>这条伪指令的含义为“假设”。它假设某一段寄存器和程序中的某一个用segment...ends 定义的段相关联</p></blockquote><p>(4) 标号</p><blockquote><p>汇编源程序中，除了汇编指令和伪指令外，还有一些标号，比如“codeseg”。一个标号指代了一个地址。比如codeseg在segment前面，作为一个段的名称，这个段的名称最终将被编译、连接程序处理为一个段的段地址</p></blockquote><p>(5) 程序返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mov ax,4c00H
int 21H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="端口" tabindex="-1"><a class="header-anchor" href="#端口" aria-hidden="true">#</a> 端口</h1><ul><li>端口地址范围0~65535(oxffff)</li><li>端口只能用in和out来从端口读取数据和往端口写入数据</li><li>在in和out指令中，只能用ax或al来存放从端口中读入的数据或要发送到端口的数据</li></ul><blockquote><p>对0~255以内的端口进行读写时:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>in al,20h ;从20h端口读一个字节
out 20h,al ;往20端口写入一个字节
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对256~65535的端口进行读写时,端口号放在dx中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mov dx,3f8h
in al,dx   ;从3f8h端口读一个字节
out dx,al  ;向3f8h端口写一个字节
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,35),n=[a];function s(l,o){return d(),e("div",null,n)}const p=t(i,[["render",s],["__file","asm_wangshuang.html.vue"]]);export{p as default};