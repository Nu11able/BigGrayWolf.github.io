import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as l}from"./app-dYRofbQn.js";const d={},s=l(`<h1 id="unix网络编程基础篇-例子" tabindex="-1"><a class="header-anchor" href="#unix网络编程基础篇-例子" aria-hidden="true">#</a> Unix网络编程基础篇(例子)</h1><h2 id="一个简单的echo-client-server" tabindex="-1"><a class="header-anchor" href="#一个简单的echo-client-server" aria-hidden="true">#</a> 一个简单的echo client/server</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>// server.cpp

// 单进程
#include&lt;iostream&gt;
#include&lt;unistd.h&gt;
#include&lt;sys/socket.h&gt;
#include&lt;arpa/inet.h&gt;
#include&lt;strings.h&gt;
#include&lt;string&gt;
using namespace std;

void output(const string &amp;str, int size) {
    for (int i = 0; i &lt; size; ++i)
        cout &lt;&lt; str[i];
}

int main() {
    int sock_fd = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in ser_addr, clnt_addr;
    unsigned addr_len = sizeof(struct sockaddr_in), clnt_addr_len;

    bzero(&amp;ser_addr, sizeof(ser_addr));
    ser_addr.sin_family = AF_INET;
    ser_addr.sin_port = htons(65535);
    ser_addr.sin_addr.s_addr = htonl(INADDR_ANY);
    
    bind(sock_fd, (struct sockaddr*)&amp;ser_addr, sizeof(ser_addr));

    listen(sock_fd, 10);

    for (;;) {
        int client_fd = accept(sock_fd, (struct sockaddr*)&amp;clnt_addr, &amp;addr_len);
        string client_tag(100, 0);
        inet_ntop(AF_INET, &amp;clnt_addr.sin_addr.s_addr, &amp;client_tag[0], client_tag.capacity());
        client_tag += to_string(ntohs(clnt_addr.sin_port));
        cout &lt;&lt; &quot;connected from &quot; &lt;&lt; client_tag &lt;&lt; endl;

        client_tag.push_back(&#39;&gt;&#39;);
        int n;
        string recv_buf(1024, 0);
        while ((n = read(client_fd, &amp;recv_buf[0], recv_buf.capacity()))) {
            cout &lt;&lt; client_tag;
            output(recv_buf, n);
            cout &lt;&lt; endl;

            n = write(client_fd, &amp;recv_buf[0], n);
        }
        close(client_fd);
    }

    close(sock_fd);
    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>若没有特殊说明后续实现的server均可用此SimpleClient作为客户端连接</code></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>// SimpleClient.cpp
#include&lt;iostream&gt;
#include&lt;unistd.h&gt;
#include&lt;arpa/inet.h&gt;
#include&lt;sys/socket.h&gt;
#include&lt;string&gt;
#include&lt;strings.h&gt;

using namespace std;

void output(const string &amp;str, int size) {
    for (int i = 0; i &lt; size; ++i)
        cout &lt;&lt; str[i];
}

int main() {
    int sock_fd = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in serv, clnt;
    bzero(&amp;serv, sizeof(serv));
    serv.sin_family = AF_INET,
    serv.sin_port = htons(65535);
    inet_pton(AF_INET, &quot;127.0.0.1&quot;, &amp;serv.sin_addr);

    connect(sock_fd, (struct sockaddr*)&amp;serv, sizeof(serv));

    string buffer(1024, 0);
    cin &gt;&gt; buffer;
    int n;
    while (buffer != &quot;exit&quot;) {
        write(sock_fd, &amp;buffer[0], buffer.length());
        n = read(sock_fd, &amp;buffer[0], buffer.capacity());
        cout &lt;&lt; &quot;server&gt;&quot;;
        output(buffer, n);
        cout &lt;&lt; endl;
        cin &gt;&gt; buffer;
    }
    close(sock_fd);

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一个简单的多进程echo服务器" tabindex="-1"><a class="header-anchor" href="#一个简单的多进程echo服务器" aria-hidden="true">#</a> 一个简单的多进程echo服务器</h2><p><code>注意点：使用fork创建子进程后要在主进程中要记得调用wait等函来等待子进程</code></p><blockquote><p>当子进程走完了自己的生命周期后,它会执行exit()系统调用,内核释放该进程所有的资源,包括打开的文件, 占用的内存等。但是仍然为其保留一定的信息(包括进程号the process ID,退出码exit code,退出状态the terminationstatus of the process, 运行时间the amount of CPU time taken by the process等),这些数据会一直保留到系统将它传递给它的父进程为止, 直到父进程通过wait / waitpid来取时才释放。</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>#include&lt;iostream&gt;
#include&lt;unistd.h&gt; 
#include&lt;sys/socket.h&gt;
#include&lt;arpa/inet.h&gt;
#include&lt;strings.h&gt;
#include&lt;sys/wait.h&gt;
#include&lt;string&gt;
#include&lt;algorithm&gt;
#include&lt;vector&gt;
using namespace std;

void output(const string &amp;str, int size) {
    for (int i = 0; i &lt; size; ++i)
        cout &lt;&lt; str[i];
}

int main() {
    int sock_fd = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in ser_addr, clnt_addr;
    unsigned addr_len = sizeof(struct sockaddr_in), clnt_addr_len;

    bzero(&amp;ser_addr, sizeof(ser_addr));
    ser_addr.sin_family = AF_INET;
    ser_addr.sin_port = htons(65535);
    ser_addr.sin_addr.s_addr = htonl(INADDR_ANY);
    
    bind(sock_fd, (struct sockaddr*)&amp;ser_addr, sizeof(ser_addr));

    listen(sock_fd, 10);

    vector&lt;int&gt; children;
    for (;;) {
        int client_fd = accept(sock_fd, (struct sockaddr*)&amp;clnt_addr, &amp;addr_len);
        string client_tag(100, 0);
        inet_ntop(AF_INET, &amp;clnt_addr.sin_addr.s_addr, &amp;client_tag[0], client_tag.capacity());
        client_tag += to_string(ntohs(clnt_addr.sin_port));
        cout &lt;&lt; &quot;connected from &quot; &lt;&lt; client_tag &lt;&lt; endl;

        int pid = fork();
        if (pid == 0) {
            client_tag.push_back(&#39;&gt;&#39;);
            int n;
            string recv_buf(1024, 0);
            while ((n = read(client_fd, &amp;recv_buf[0], recv_buf.capacity()))) {
                cout &lt;&lt; client_tag;
                output(recv_buf, n);
                cout &lt;&lt; endl;

                n = write(client_fd, &amp;recv_buf[0], n);
            }
            close(client_fd);
            exit(0);
        }
        children.push_back(pid);

        cout &lt;&lt; client_tag &lt;&lt; &quot; is working on child process &quot; &lt;&lt; pid &lt;&lt; endl;
        close(client_fd);
    }
    close(sock_fd);

    while (!children.empty()) {
        int status;
        int pid = wait(&amp;status);
        
        children.erase(find(children.begin(), children.end(), pid));
        if (WIFEXITED(status)) {
            cout &lt;&lt; &quot;child &quot; &lt;&lt; pid &lt;&lt; &quot; terminated normally&quot; &lt;&lt; endl;
        } else {
            cout &lt;&lt; &quot;child &quot; &lt;&lt; pid &lt;&lt; &quot; terminated with &quot; &lt;&lt; WEXITSTATUS(status) &lt;&lt; endl;
        }
    }

    cout &lt;&lt; &quot;server exit&quot; &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于select的非阻塞echo服务器" tabindex="-1"><a class="header-anchor" href="#基于select的非阻塞echo服务器" aria-hidden="true">#</a> 基于select的非阻塞echo服务器</h2><p>上述的accept函数以及read函数都将阻塞我们的进程，为了同时处理多个请求我们不得不创建多个进程。我们无法知道套接字上的读写事件何时发生，而<strong>select</strong>可以像一个像一个闹钟一样通知我们有我们关注的事件发生</p><p><strong>int select(int nfds, fd_set *readfds, fd_set *writefds,fd_set *exceptfds, struct timeval *timeout);</strong></p><ul><li><p>void FD_CLR(int fd, fd_set *set);</p></li><li><p>int FD_ISSET(int fd, fd_set *set);</p></li><li><p>void FD_SET(int fd, fd_set *set);</p></li><li><p>void FD_ZERO(fd_set *set);</p><p><code>select限制：</code>select使用fd_set数据类型作为描述符集，通常是一个数组，它的大小由FD_SETSIZE常值定义，通常为1024(即select最多能够同时监听的同一类型的最大数量为FD_SETSIZE)</p></li></ul><p><strong>ssize_t recv(int sockfd, void *buf, size_t len, int flags);</strong></p><ul><li>flags取值为MSG_DONTWAIT时可以实现非阻塞通信</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>#include&lt;iostream&gt;
#include&lt;unistd.h&gt;
#include&lt;sys/socket.h&gt;
#include&lt;sys/wait.h&gt;
#include&lt;sys/select.h&gt;
#include&lt;strings.h&gt;
#include&lt;string.h&gt;
#include&lt;arpa/inet.h&gt;
#include&lt;string&gt;
#include&lt;algorithm&gt;
#include&lt;map&gt;
#include&lt;vector&gt;
using namespace std;

void output(const string &amp;str, int size) {
    for (int i = 0; i &lt; size; ++i)
        cout &lt;&lt; str[i];
}

int main() {
    int sock_fd = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in ser_addr, clnt_addr;
    unsigned addr_len = sizeof(struct sockaddr_in), clnt_addr_len;

    bzero(&amp;ser_addr, sizeof(ser_addr));
    ser_addr.sin_family = AF_INET;
    ser_addr.sin_port = htons(65535);
    ser_addr.sin_addr.s_addr = htonl(INADDR_ANY);
    
    bind(sock_fd, (struct sockaddr*)&amp;ser_addr, sizeof(ser_addr));

    listen(sock_fd, 10);

    fd_set allset, rset;
    map&lt;int, string&gt; client_names;
    int allfd[FD_SETSIZE];
    for (int i = 0; i &lt; FD_SETSIZE; i++) 
        allfd[i] = -1;
    FD_ZERO(&amp;allset);
    FD_SET(sock_fd, &amp;allset);
    int maxfd = sock_fd;

    for (;;) {
        rset = allset;
        int ready = select(maxfd + 1, &amp;rset, NULL, NULL, NULL);

        if (FD_ISSET(sock_fd, &amp;rset)) {
            int client_fd = accept(sock_fd, (struct sockaddr*)&amp;clnt_addr, &amp;addr_len);
            string client_tag(100, 0);
            inet_ntop(AF_INET, &amp;clnt_addr.sin_addr.s_addr, &amp;client_tag[0], client_tag.capacity());
            client_tag.push_back(&#39;:&#39;);
            client_tag += to_string(ntohs(clnt_addr.sin_port));
            cout &lt;&lt; &quot;connected from &quot; &lt;&lt; client_tag &lt;&lt; endl;

            bool unset = true;
            for (int i = 0; i &lt; FD_SETSIZE; ++i) {
                if (allfd[i] &gt; 0) {
                    cout &lt;&lt; allfd[i] &lt;&lt; &quot; &quot;;
                    continue;
                };
                allfd[i] = client_fd;
                maxfd = max(maxfd, client_fd);
                unset = false;
                client_names[client_fd] = client_tag;
                FD_SET(client_fd, &amp;allset);
                break;
            }
            if (unset) {
                cout &lt;&lt; &quot;too many clients&quot; &lt;&lt; endl;
                close(client_fd);
            }
            ready--;
        }

        int n;
        string recv_buf(1024, 0);
        for (int i = 0; i &lt; FD_SETSIZE &amp;&amp; ready; ++i) {
            if (allfd[i] &lt; 0 || !FD_ISSET(allfd[i], &amp;rset)) continue;

            while ((n = recv(allfd[i], &amp;recv_buf[0], recv_buf.capacity(), MSG_DONTWAIT)) &gt; 0) {
                cout &lt;&lt; client_names[allfd[i]] &lt;&lt; &quot;&gt;&quot;;
                output(recv_buf, n);
                cout &lt;&lt; endl;
                n = write(allfd[i], &amp;recv_buf[0], n);  
            }
            if (n == 0 || errno != EAGAIN) {
                if (n == 0) 
                    cout &lt;&lt; client_names[allfd[i]] &lt;&lt; &quot; closed&quot; &lt;&lt; endl;
                else
                    cout &lt;&lt; &quot;error: &quot; &lt;&lt; strerror(errno) &lt;&lt; endl;
                FD_CLR(allfd[i], &amp;allset);
                close(allfd[i]);
                allfd[i] = -1;
            }
            ready--;
        }
    }
    close(sock_fd);

    cout &lt;&lt; &quot;server exit&quot; &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于poll的非阻塞echo服务器" tabindex="-1"><a class="header-anchor" href="#基于poll的非阻塞echo服务器" aria-hidden="true">#</a> 基于poll的非阻塞echo服务器</h2><blockquote><p>回顾6.3结尾处我们就FD_SETSIZE以及就每个描述符集中最大描述符数目相比每个进 程中最大描述符数目展开了讨论。有了poll就不再由那样的问题了，因为分配一个 pollfd结构的数组并把数组中元素的数目通知内核成了调用者的责任。内核不再需要 知道类似fd_set的固定大小的数据类型。</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>#include&lt;sys/socket.h&gt;
#include&lt;arpa/inet.h&gt;
#include&lt;poll.h&gt;
#include&lt;signal.h&gt;
#include&lt;unistd.h&gt;
#include&lt;strings.h&gt;
#include&lt;string.h&gt;
#include&lt;iostream&gt;
#include&lt;string&gt;
#include&lt;vector&gt;
#include&lt;algorithm&gt;


const short PORT = 65535;
const int LISTENQ = 10;
const int BUFFER_SIZE = 1024;
bool exiting = false;

using namespace std;

void output(const string &amp;str, int size) {
    for (int i = 0; i &lt; size; ++i)
        cout &lt;&lt; str[i];
}

void exit_handler(int signum) {
    exiting = true;
}

int main() {
    signal(SIGINT, exit_handler);

    int serv_fd = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in serv_addr, clnt_addr;
    int clnt_fd;
    unsigned addr_len = sizeof(struct sockaddr_in);

    bzero(&amp;serv_addr, addr_len);
    serv_addr.sin_port = htons(PORT);
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);

    if (bind(serv_fd, (struct sockaddr*)&amp;serv_addr, addr_len) &lt; 0) {
        perror(&quot;bind&quot;);
        exit(0);
    }
    listen(serv_fd, LISTENQ);

    vector&lt;struct pollfd&gt; events;
    vector&lt;string&gt; names;
    struct pollfd poll_temp;
    poll_temp.fd = serv_fd;
    poll_temp.events = POLLRDNORM;
    events.push_back(poll_temp);
    names.push_back(&quot;server&quot;);

    for (;;) {
        // Specifying a negative value in timeout  means  an  infinite timeout.  Specifying a timeout of zero causes poll() to return 
        // immediately, even if no file descriptors are ready.
        int nready = poll(&amp;events[0], events.size(), -1); 

        if (events[0].revents &amp; POLLRDNORM) { // new client connection
            clnt_fd = accept(serv_fd, (struct sockaddr*)&amp;clnt_addr, &amp;addr_len);
            auto iter = find_if(events.begin(), events.end(), [](auto &amp;iter){ return iter.fd == -1; });
            if (iter != events.end()) {
                iter-&gt;fd = clnt_fd;
                iter-&gt;events = POLLRDNORM;
            } else {
               events.push_back(poll_temp);
               iter = events.end() - 1;
               names.push_back(string(&quot;&quot;));
            }
            iter-&gt;fd = clnt_fd;
            iter-&gt;events = POLLRDNORM;
            string name(30, 0);
            inet_ntop(AF_INET, &amp;clnt_addr.sin_addr, &amp;name[0], name.capacity());
            name = string(name.c_str());
            name.push_back(&#39;:&#39;);
            name.append(to_string(ntohs(clnt_addr.sin_port)));
            names[distance(events.begin(), iter)] = name;

            cout &lt;&lt; &quot;client &quot; &lt;&lt; name &lt;&lt; &quot; connect&quot; &lt;&lt; endl;
            nready--;
        }

        for (int i = 1; i &lt; events.size() &amp; nready; ++i) {
            if (events[i].fd &lt; 0) continue;

            if (events[i].revents &amp; (POLLRDNORM | POLLERR)) {
                string buffer(BUFFER_SIZE, 0);
                int n;
                while ((n = recv(events[i].fd, &amp;buffer[0], buffer.capacity(), MSG_DONTWAIT)) &gt; 0) {
                    cout &lt;&lt; names[i] &lt;&lt; &quot;&gt;&quot;;
                    output(buffer, n);
                    cout &lt;&lt; endl;
                    write(events[i].fd, &amp;buffer[0], n);
                }
                if (n == 0 || errno != EAGAIN) {
                    cout &lt;&lt; &quot;connection of &quot; &lt;&lt; names[i]; 
                    if (n == 0) 
                        cout &lt;&lt; &quot; was closed&quot; &lt;&lt; endl;
                    else 
                        cout &lt;&lt; &quot; something error: &quot; &lt;&lt; strerror(errno) &lt;&lt; endl;
                    close(events[i].fd);
                    events[i].fd = -1;
                }
            }
        }

        if(exiting) break;

    }

    cout &lt;&lt; &quot;\\nserver exiting&quot; &lt;&lt; endl;
    for_each(events.begin(), events.end(), [](auto &amp;mem) { if (mem.fd != -1) close(mem.fd); });

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于epoll的非阻塞echo服务器" tabindex="-1"><a class="header-anchor" href="#基于epoll的非阻塞echo服务器" aria-hidden="true">#</a> 基于epoll的非阻塞echo服务器</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>#include&lt;sys/socket.h&gt;
#include&lt;sys/epoll.h&gt;
#include&lt;arpa/inet.h&gt;
#include&lt;signal.h&gt;
#include&lt;unistd.h&gt;
#include&lt;strings.h&gt;
#include&lt;string.h&gt;
#include&lt;iostream&gt;
#include&lt;string&gt;
#include&lt;vector&gt;
#include&lt;map&gt;
#include&lt;algorithm&gt;


const short PORT = 65535;
const int LISTENQ = 10;
const int BUFFER_SIZE = 1024;
bool exiting = false;

using namespace std;

void output(const string &amp;str, int size) {
    for (int i = 0; i &lt; size; ++i)
        cout &lt;&lt; str[i];
}

void exit_handler(int signum) {
    exiting = true;
}

int main() {
    signal(SIGINT, exit_handler);

    int serv_fd = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in serv_addr, clnt_addr;
    int clnt_fd;
    unsigned addr_len = sizeof(struct sockaddr_in);

    bzero(&amp;serv_addr, addr_len);
    serv_addr.sin_port = htons(PORT);
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);

    if (bind(serv_fd, (struct sockaddr*)&amp;serv_addr, addr_len) &lt; 0) {
        perror(&quot;bind&quot;);
        exit(0);
    }
    listen(serv_fd, LISTENQ);
    cout &lt;&lt; &quot;server running...&quot; &lt;&lt; endl;

    int epoll_fd = epoll_create(LISTENQ);
    struct epoll_event ev;
    vector&lt;struct epoll_event&gt; events(LISTENQ);
    vector&lt;int&gt; opened_sockets;
    map&lt;int, string&gt; names;
    ev.data.fd = serv_fd;
    ev.events = EPOLLIN;
    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, serv_fd, &amp;ev);
    names[serv_fd] = string(&quot;server&quot;);
    opened_sockets.push_back(serv_fd);


    string buffer(BUFFER_SIZE, 0);
    for (;;) {
        // Specifying a timeout of -1 causes epoll_wait() to block indefinitely, while specifying a timeout equal to zero cause epoll_wait() to return  imme‐     │kevin@kevin-virtual-machine:~/MINE/tingx/build$ ./client 
        // diately, even if no events are available.
        int nready = epoll_wait(epoll_fd, &amp;events[0], LISTENQ, 100); // timeout = 100ms 

        for (int i = 0; i &lt; nready; ++i) {
            // new client connection
            if (events[i].data.fd == serv_fd) {
                clnt_fd = accept(serv_fd, (struct sockaddr*)&amp;clnt_addr, &amp;addr_len);
                ev.data.fd = clnt_fd;
                ev.events = EPOLLIN;
                epoll_ctl(epoll_fd, EPOLL_CTL_ADD, clnt_fd, &amp;ev);
                string name(30, 0);
                inet_ntop(AF_INET, &amp;clnt_addr.sin_addr, &amp;name[0], name.capacity());
                name = string(name.c_str());
                name.push_back(&#39;:&#39;);
                name.append(to_string(ntohs(clnt_addr.sin_port)));
                names[clnt_fd] = name;
                opened_sockets.push_back(clnt_fd);
                cout &lt;&lt; &quot;client &quot; &lt;&lt; name &lt;&lt; &quot; connected&quot; &lt;&lt; endl;
            }
            else {
                int n;
                while ((n = recv(events[i].data.fd, &amp;buffer[0], buffer.capacity(), MSG_DONTWAIT)) &gt; 0) {
                    cout &lt;&lt; names[events[i].data.fd] &lt;&lt; &quot;&gt;&quot;;
                    output(buffer, n);
                    cout &lt;&lt; endl;
                    write(events[i].data.fd, &amp;buffer[0], n);
                }
                if (n == 0 || errno != EAGAIN) {
                    cout &lt;&lt; &quot;connection of &quot; &lt;&lt; names[events[i].data.fd]; 
                    if (n == 0) 
                        cout &lt;&lt; &quot; was closed&quot; &lt;&lt; endl;
                    else 
                        cout &lt;&lt; &quot; something error: &quot; &lt;&lt; strerror(errno) &lt;&lt; endl;
                    close(events[i].data.fd);
                    opened_sockets.erase(find(opened_sockets.begin(), opened_sockets.end(), events[i].data.fd));
                    epoll_ctl(epoll_fd, EPOLL_CTL_DEL, events[i].data.fd, NULL);
                }
            }
        }

        if(exiting) break;

    }

    cout &lt;&lt; &quot;\\nserver exiting&quot; &lt;&lt; endl;
    for_each(opened_sockets.begin(), opened_sockets.end(), [](auto &amp;mem) { close(mem); });

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2><p><a href="https://blog.csdn.net/weixin_30919571/article/details/95053976" target="_blank" rel="noopener noreferrer">Linux中的defunct进程(僵尸进程)</a></p><p><a href="https://blog.csdn.net/armlinuxww/article/details/92803381" target="_blank" rel="noopener noreferrer">Epoll原理解析</a></p><p>《UNIX网络编程 卷1：套接字联网API》</p>`,25),t=[s];function v(r,a){return i(),e("div",null,t)}const m=n(d,[["render",v],["__file","UnixSocket.html.vue"]]);export{m as default};
