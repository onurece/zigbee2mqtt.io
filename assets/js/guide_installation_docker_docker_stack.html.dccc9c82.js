"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[89364],{13775:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>l,data:()=>t});var e=a(6254);const i={},l=(0,a(58079).A)(i,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,n[0]||(n[0]=[(0,e.Fv)('<h1 id="docker-stack-device-mapping" tabindex="-1"><a class="header-anchor" href="#docker-stack-device-mapping"><span>Docker Stack device mapping</span></a></h1><p><em>This is only relevant when using Docker Stack</em></p><p>Docker stack doesn&#39;t support device mappings with option <code>--devices</code> when deploying a stack in swarm mode. There are two solutions to this. Both of these solutions start with binding the devices as volumes.</p><h2 id="automatic-device-mapping-for-cgroup-v1-and-v2" tabindex="-1"><a class="header-anchor" href="#automatic-device-mapping-for-cgroup-v1-and-v2"><span>Automatic device mapping for cgroup v1 and v2</span></a></h2><p>The easiest solution for enabling devices on Docker Stacks is the <a href="https://github.com/allfro/device-mapping-manager" target="_blank" rel="noopener noreferrer">allfro device-mapping-manager docker image</a>. This container has a tiny program that reads all of the volume mounts on its own host, identifies devices, and then modifies the permissions on the host to allow the container to use them. Unlike other solutions, this works for both versions of cgroups.</p><p>This container has to be deployed directly to docker, not through a stack. It&#39;s possible to work around this by creating a stack with a privileged service that acts as a proxy to launch the actual device mapper container.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">dmm</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">image</span><span class="token punctuation">:</span> docker</span>\n<span class="line">        <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> docker</span>\n<span class="line">        <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>\n<span class="line">        <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>\n<span class="line">            run</span>\n<span class="line">            -i</span>\n<span class="line">            --rm</span>\n<span class="line">            --privileged</span>\n<span class="line">            --cgroupns=host</span>\n<span class="line">            --pid=host</span>\n<span class="line">            --userns=host</span>\n<span class="line">            -v /sys:/host/sys</span>\n<span class="line">            -v /var/run/docker.sock:/var/run/docker.sock</span>\n<span class="line">            -v /dev:/dev</span>\n<span class="line">            ghcr.io/allfro/allfro/device-mapping-manager:latest</span></span>\n<span class="line">        <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>\n<span class="line">            <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock</span>\n<span class="line">        <span class="token key atrule">deploy</span><span class="token punctuation">:</span></span>\n<span class="line">            <span class="token key atrule">mode</span><span class="token punctuation">:</span> global</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="manual-cgroup-v1" tabindex="-1"><a class="header-anchor" href="#manual-cgroup-v1"><span>Manual cgroup v1</span></a></h2><p>A workaround is to manually set the right permissions. The workaround is based on the solution found at <a href="https://github.com/docker/swarmkit/issues/1244#issuecomment-285935430" target="_blank" rel="noopener noreferrer">Add support for devices with &quot;service create&quot;</a>, all credits goes this him.</p><p>This workaround only works with cgroup v1, which is not enabled on many newer distro releases.</p><ol><li><p>Identify serial adapter Identify the serial adapter using the following command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> lsusb <span class="token parameter variable">-v</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Bus 001 Device 005: ID 0451:16a8 Texas Instruments, Inc.</span>\n<span class="line">Device Descriptor:</span>\n<span class="line">  bLength                18</span>\n<span class="line">  bDescriptorType         1</span>\n<span class="line">  bcdUSB               2.00</span>\n<span class="line">  bDeviceClass            2 Communications</span>\n<span class="line">  bDeviceSubClass         0</span>\n<span class="line">  bDeviceProtocol         0</span>\n<span class="line">  bMaxPacketSize0        32</span>\n<span class="line">  idVendor           0x0451 Texas Instruments, Inc.</span>\n<span class="line">  idProduct          0x16a8</span>\n<span class="line">  bcdDevice            0.09</span>\n<span class="line">  iManufacturer           1 Texas Instruments</span>\n<span class="line">  iProduct                2 TI CC2531 USB CDC</span>\n<span class="line">  iSerial                 3 __0X00124B001936AC60</span>\n<span class="line">  bNumConfigurations      1</span>\n<span class="line">  Configuration Descriptor:</span>\n<span class="line">\tbLength                 9</span>\n<span class="line">\tbDescriptorType         2</span>\n<span class="line">\twTotalLength           67</span>\n<span class="line">\tbNumInterfaces          2</span>\n<span class="line">\tbConfigurationValue     1</span>\n<span class="line">\tiConfiguration          0</span>\n<span class="line">\tbmAttributes         0x80</span>\n<span class="line">\t  (Bus Powered)</span>\n<span class="line">\tMaxPower               50mA</span>\n<span class="line">\tInterface Descriptor:</span>\n<span class="line">\t  bLength                 9</span>\n<span class="line">\t  bDescriptorType         4</span>\n<span class="line">\t  bInterfaceNumber        0</span>\n<span class="line">\t  bAlternateSetting       0</span>\n<span class="line">\t  bNumEndpoints           1</span>\n<span class="line">\t  bInterfaceClass         2 Communications</span>\n<span class="line">\t  bInterfaceSubClass      2 Abstract (modem)</span>\n<span class="line">\t  bInterfaceProtocol      1 AT-commands (v.25ter)</span>\n<span class="line">\t  iInterface              0</span>\n<span class="line">\t  CDC Header:</span>\n<span class="line">\t\tbcdCDC               1.10</span>\n<span class="line">\t  CDC ACM:</span>\n<span class="line">\t\tbmCapabilities       0x02</span>\n<span class="line">\t\t  line coding and serial state</span>\n<span class="line">\t  CDC Union:</span>\n<span class="line">\t\tbMasterInterface        0</span>\n<span class="line">\t\tbSlaveInterface         1</span>\n<span class="line">\t  CDC Call Management:</span>\n<span class="line">\t\tbmCapabilities       0x00</span>\n<span class="line">\t\tbDataInterface          1</span>\n<span class="line">\t  Endpoint Descriptor:</span>\n<span class="line">\t\tbLength                 7</span>\n<span class="line">\t\tbDescriptorType         5</span>\n<span class="line">\t\tbEndpointAddress     0x82  EP 2 IN</span>\n<span class="line">\t\tbmAttributes            3</span>\n<span class="line">\t\t  Transfer Type            Interrupt</span>\n<span class="line">\t\t  Synch Type               None</span>\n<span class="line">\t\t  Usage Type               Data</span>\n<span class="line">\t\twMaxPacketSize     0x0040  1x 64 bytes</span>\n<span class="line">\t\tbInterval              64</span>\n<span class="line">\tInterface Descriptor:</span>\n<span class="line">\t  bLength                 9</span>\n<span class="line">\t  bDescriptorType         4</span>\n<span class="line">\t  bInterfaceNumber        1</span>\n<span class="line">\t  bAlternateSetting       0</span>\n<span class="line">\t  bNumEndpoints           2</span>\n<span class="line">\t  bInterfaceClass        10 CDC Data</span>\n<span class="line">\t  bInterfaceSubClass      0 Unused</span>\n<span class="line">\t  bInterfaceProtocol      0</span>\n<span class="line">\t  iInterface              0</span>\n<span class="line">\t  Endpoint Descriptor:</span>\n<span class="line">\t\tbLength                 7</span>\n<span class="line">\t\tbDescriptorType         5</span>\n<span class="line">\t\tbEndpointAddress     0x84  EP 4 IN</span>\n<span class="line">\t\tbmAttributes            2</span>\n<span class="line">\t\t  Transfer Type            Bulk</span>\n<span class="line">\t\t  Synch Type               None</span>\n<span class="line">\t\t  Usage Type               Data</span>\n<span class="line">\t\twMaxPacketSize     0x0040  1x 64 bytes</span>\n<span class="line">\t\tbInterval               0</span>\n<span class="line">\t  Endpoint Descriptor:</span>\n<span class="line">\t\tbLength                 7</span>\n<span class="line">\t\tbDescriptorType         5</span>\n<span class="line">\t\tbEndpointAddress     0x04  EP 4 OUT</span>\n<span class="line">\t\tbmAttributes            2</span>\n<span class="line">\t\t  Transfer Type            Bulk</span>\n<span class="line">\t\t  Synch Type               None</span>\n<span class="line">\t\t  Usage Type               Data</span>\n<span class="line">\t\twMaxPacketSize     0x0040  1x 64 bytes</span>\n<span class="line">\t\tbInterval               0</span>\n<span class="line">Device Status:     0x0000</span>\n<span class="line">  (Bus Powered)</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>UDEV Rules</p><p>Create a new udev rule for serial adapter, <code>idVendor</code> and <code>idProduct</code> must be equal to values from <code>lsusb</code> command. The rule below creates device <code>/dev/zigbee-serial</code>:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;SUBSYSTEM==<span class="token entity" title="\\&quot;">\\&quot;</span>tty<span class="token entity" title="\\&quot;">\\&quot;</span>, ATTRS{idVendor}==<span class="token entity" title="\\&quot;">\\&quot;</span>0451<span class="token entity" title="\\&quot;">\\&quot;</span>, ATTRS{idProduct}==<span class="token entity" title="\\&quot;">\\&quot;</span>16a8<span class="token entity" title="\\&quot;">\\&quot;</span>, SYMLINK+=<span class="token entity" title="\\&quot;">\\&quot;</span>zigbee-serial<span class="token entity" title="\\&quot;">\\&quot;</span>,  RUN+=<span class="token entity" title="\\&quot;">\\&quot;</span>/usr/local/bin/docker-setup-zigbee-serial.sh<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/udev/rules.d/99-zigbee-serial.rules</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Reload newly created rule using the following command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> udevadm control --reload-rules</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Create docker-setup-zigbee-serial.sh</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /usr/local/bin/docker-setup-zigbee-serial.sh</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Copy the following content:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>\n<span class="line"><span class="token assign-left variable">USBDEV</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>readlink <span class="token parameter variable">-f</span> /dev/zigbee-serial<span class="token variable">`</span></span></span>\n<span class="line"><span class="token builtin class-name">read</span> minor major <span class="token operator">&lt;</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">stat</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;%T %t&#39;</span> <span class="token variable">$USBDEV</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$minor</span> <span class="token operator">||</span> <span class="token parameter variable">-z</span> <span class="token variable">$major</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>\n<span class="line">\t<span class="token builtin class-name">echo</span> <span class="token string">&#39;Device not found&#39;</span></span>\n<span class="line">\t<span class="token builtin class-name">exit</span></span>\n<span class="line"><span class="token keyword">fi</span></span>\n<span class="line"><span class="token assign-left variable">dminor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">0</span>x${minor}<span class="token variable">))</span></span></span>\n<span class="line"><span class="token assign-left variable">dmajor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">0</span>x${major}<span class="token variable">))</span></span></span>\n<span class="line"><span class="token assign-left variable">CID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> --no-trunc <span class="token operator">|</span> <span class="token function">grep</span> koenkk/zigbee2mqtt <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span>  <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">`</span></span></span>\n<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$CID</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>\n<span class="line">\t<span class="token builtin class-name">echo</span> <span class="token string">&#39;CID not found&#39;</span></span>\n<span class="line">\t<span class="token builtin class-name">exit</span></span>\n<span class="line"><span class="token keyword">fi</span></span>\n<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;Setting permissions&#39;</span></span>\n<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;c <span class="token variable">$dmajor</span>:<span class="token variable">$dminor</span> rwm&quot;</span> <span class="token operator">&gt;</span> /sys/fs/cgroup/devices/docker/<span class="token variable">$CID</span>/devices.allow</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set permissions:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">744</span> /usr/local/bin/docker-setup-zigbee-serial.sh</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Create docker-event-listener.sh</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /usr/local/bin/docker-event-listener.sh</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Copy the following content:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>\n<span class="line"><span class="token function">docker</span> events <span class="token parameter variable">--filter</span> <span class="token string">&#39;event=start&#39;</span><span class="token operator">|</span> <span class="token punctuation">\\</span></span>\n<span class="line"><span class="token keyword">while</span> <span class="token builtin class-name">read</span> line<span class="token punctuation">;</span> <span class="token keyword">do</span></span>\n<span class="line">\t/usr/local/bin/docker-setup-zigbee-serial.sh</span>\n<span class="line"><span class="token keyword">done</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set permissions:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">744</span> /usr/local/bin/docker-event-listener.sh</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Create docker-event-listener.service</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/system/docker-event-listener.service</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Copy the following content:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>\n<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>Docker Event Listener <span class="token keyword">for</span> Zigbee serial adapter</span>\n<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>network.target</span>\n<span class="line"><span class="token assign-left variable">StartLimitIntervalSec</span><span class="token operator">=</span><span class="token number">0</span></span>\n<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>\n<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>simple</span>\n<span class="line"><span class="token assign-left variable">Restart</span><span class="token operator">=</span>always</span>\n<span class="line"><span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">1</span></span>\n<span class="line"><span class="token assign-left variable">User</span><span class="token operator">=</span>root</span>\n<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/bin/bash /usr/local/bin/docker-event-listener.sh</span>\n<span class="line"></span>\n<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>\n<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set permissions:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">744</span> /etc/systemd/system/docker-event-listener.service</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Reload daemon</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl daemon-reload</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Start Docker event listener</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl start docker-event-listener.service</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Status Docker event listener</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl status docker-event-listener.service</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Enable Docker event listener</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> docker-event-listener.service</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Verify and deploy Zigbee2MQTT stack</p><p>Now reconnect the serial adapter. Verify using the following command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ls</span> <span class="token parameter variable">-al</span> /dev/zigbee-serial</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">7</span> Sep <span class="token number">28</span> <span class="token number">21</span>:14 /dev/zigbee-serial -<span class="token operator">&gt;</span> ttyACM0</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Below an example of a <code>docker-stack-zigbee2mqtt.yml</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.7&quot;</span></span>\n<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">zigbee2mqtt</span><span class="token punctuation">:</span></span>\n<span class="line">\t<span class="token key atrule">image</span><span class="token punctuation">:</span> koenkk/zigbee2mqtt<span class="token punctuation">:</span>latest<span class="token punctuation">-</span>dev</span>\n<span class="line">\t<span class="token key atrule">environment</span><span class="token punctuation">:</span></span>\n<span class="line">\t  <span class="token punctuation">-</span> TZ=Europe/Amsterdam</span>\n<span class="line">\t<span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>\n<span class="line">\t  <span class="token punctuation">-</span> /mnt/docker<span class="token punctuation">-</span>cluster/zigbee2mqtt/data<span class="token punctuation">:</span>/app/data</span>\n<span class="line">\t  <span class="token punctuation">-</span> /dev/zigbee<span class="token punctuation">-</span>serial<span class="token punctuation">:</span>/dev/zigbee<span class="token punctuation">-</span>serial</span>\n<span class="line">\t<span class="token key atrule">networks</span><span class="token punctuation">:</span></span>\n<span class="line">\t  <span class="token punctuation">-</span> proxy_traefik<span class="token punctuation">-</span>net</span>\n<span class="line">\t<span class="token key atrule">deploy</span><span class="token punctuation">:</span></span>\n<span class="line">\t  <span class="token key atrule">placement</span><span class="token punctuation">:</span></span>\n<span class="line">\t\t<span class="token key atrule">constraints</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>node.hostname == rpi<span class="token punctuation">-</span><span class="token number">3</span><span class="token punctuation">]</span></span>\n<span class="line">\t  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span></span>\n<span class="line"></span>\n<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">proxy_traefik-net</span><span class="token punctuation">:</span></span>\n<span class="line">\t<span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example, <code>proxy_traefik-net</code> is the network to connect to the mqtt broker. The constraint makes sure Docker deploys only to this (<code>rpi-3</code>) node, where the serial adapter is connected to. The volume binding <code>/mnt/docker-cluster/zigbee2mqtt/data</code> is the zigbee2mqtt persistent directory, where <code>configuration.yaml</code> is saved.</p><p>The Zigbee2MQTT <code>configuration.yaml</code> should point to <code>/dev/zigbee-serial</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">[</span><span class="token punctuation">...</span><span class="token punctuation">]</span></span>\n<span class="line">  <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/zigbee<span class="token punctuation">-</span>serial</span>\n<span class="line"><span class="token punctuation">[</span><span class="token punctuation">...</span><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Deploy the stack:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> stack deploy zigbee2mqtt --compose-file docker-stack-zigbee2mqtt.yml</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h2><p>It could happen that even after the above the container is not starting correctly and bringing a &quot;Operation not permitted&quot; message in the log of the service for the device:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Error: Error while opening serialport &#39;Error: Error: Operation not permitted, cannot open /dev/zigbee-serial&#39;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This is due to the usage of cgroupv2 instead of cgroupv1 which is not fully supported by docker/containerd. To switch from cgroupv2 to cgroupv1 you have to add <code>systemd.unified_cgroup_hierarchy=false</code> to the grub cmdline. E.g. on an Raspberry Pi 4 with Raspian Bullseye you can add it to the end of the line in the /boot/cmdline.txt file:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[...] rootfstype=ext4 fsck.repair=yes rootwait cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1 systemd.unified_cgroup_hierarchy=false</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',16)]))}]]),t=JSON.parse('{"path":"/guide/installation/docker/docker_stack.html","title":"Docker Stack device mapping","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Automatic device mapping for cgroup v1 and v2","slug":"automatic-device-mapping-for-cgroup-v1-and-v2","link":"#automatic-device-mapping-for-cgroup-v1-and-v2","children":[]},{"level":2,"title":"Manual cgroup v1","slug":"manual-cgroup-v1","link":"#manual-cgroup-v1","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}],"git":{"updatedTime":1743532928000},"filePathRelative":"guide/installation/docker/docker_stack.md"}')}}]);