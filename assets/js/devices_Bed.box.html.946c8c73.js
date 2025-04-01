"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[68486],{98038:(t,e,o)=>{o.r(e),o.d(e,{comp:()=>d,data:()=>s});var i=o(6254);const a={},d=(0,o(58079).A)(a,[["render",function(t,e){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[e[8]||(e[8]=(0,i.Lk)("h1",{id:"sprut-device-bed-box",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#sprut-device-bed-box"},[(0,i.Lk)("span",null,"Sprut.device Bed.box")])],-1)),(0,i.Lk)("table",null,[e[6]||(e[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[e[2]||(e[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"Bed.box")],-1)),(0,i.Lk)("tr",null,[e[1]||(e[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Sprut.device"},{default:(0,i.k6)((()=>e[0]||(e[0]=[(0,i.eW)("Sprut.device")]))),_:1})])]),e[3]||(e[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Sprut bed.box ergomotion controller")],-1)),e[4]||(e[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"switch (state)")],-1)),e[5]||(e[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/Bed.box.png",alt:"Sprut.device Bed.box"})])],-1))])]),e[9]||(e[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>e[7]||(e[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),e[10]||(e[10]=(0,i.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-flat-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-flat-endpoint"><span>Switch (flat endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_flat</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_flat&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_flat&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_flat&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_flat&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-zero-gravity-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-zero-gravity-endpoint"><span>Switch (zero_gravity endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_zero_gravity</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_zero_gravity&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_zero_gravity&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_zero_gravity&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_zero_gravity&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-reading-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-reading-endpoint"><span>Switch (reading endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_reading</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_reading&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_reading&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_reading&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_reading&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-2" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-2"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-tv-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-tv-endpoint"><span>Switch (tv endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_tv</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_tv&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_tv&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_tv&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_tv&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-3" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-3"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-clear-angles-settings-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-clear-angles-settings-endpoint"><span>Switch (clear_angles_settings endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_clear_angles_settings</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_clear_angles_settings&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_clear_angles_settings&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_clear_angles_settings&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_clear_angles_settings&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-4" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-4"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-massage-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-massage-endpoint"><span>Switch (massage endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_massage</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_massage&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_massage&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_massage&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_massage&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-5" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-5"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-anti-snoring-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-anti-snoring-endpoint"><span>Switch (anti_snoring endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_anti_snoring</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_anti_snoring&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_anti_snoring&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_anti_snoring&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_anti_snoring&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-6" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-6"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-move-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-move-endpoint"><span>Switch (move endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_move</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_move&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_move&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_move&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_move&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-7" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-7"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-stop-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-stop-endpoint"><span>Switch (stop endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_stop</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_stop&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_stop&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_stop&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_stop&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-8" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-8"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p>',38))])}]]),s=JSON.parse('{"path":"/devices/Bed.box.html","title":"Sprut.device Bed.box control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sprut.device Bed.box control via MQTT","description":"Integrate your Sprut.device Bed.box via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-04-01T18:30:52.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (flat endpoint)","slug":"switch-flat-endpoint","link":"#switch-flat-endpoint","children":[]},{"level":3,"title":"Switch (zero_gravity endpoint)","slug":"switch-zero-gravity-endpoint","link":"#switch-zero-gravity-endpoint","children":[]},{"level":3,"title":"Switch (reading endpoint)","slug":"switch-reading-endpoint","link":"#switch-reading-endpoint","children":[]},{"level":3,"title":"Switch (tv endpoint)","slug":"switch-tv-endpoint","link":"#switch-tv-endpoint","children":[]},{"level":3,"title":"Switch (clear_angles_settings endpoint)","slug":"switch-clear-angles-settings-endpoint","link":"#switch-clear-angles-settings-endpoint","children":[]},{"level":3,"title":"Switch (massage endpoint)","slug":"switch-massage-endpoint","link":"#switch-massage-endpoint","children":[]},{"level":3,"title":"Switch (anti_snoring endpoint)","slug":"switch-anti-snoring-endpoint","link":"#switch-anti-snoring-endpoint","children":[]},{"level":3,"title":"Switch (move endpoint)","slug":"switch-move-endpoint","link":"#switch-move-endpoint","children":[]},{"level":3,"title":"Switch (stop endpoint)","slug":"switch-stop-endpoint","link":"#switch-stop-endpoint","children":[]}]}],"git":{"updatedTime":1743532928000},"filePathRelative":"devices/Bed.box.md"}')}}]);