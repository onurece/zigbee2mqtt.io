"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20498],{43990:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>s,data:()=>a});var n=i(6254);const l={},s=(0,i(58079).A)(l,[["render",function(e,t){const i=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"tuya-zy-m100-s-3",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#tuya-zy-m100-s-3"},[(0,n.Lk)("span",null,"Tuya ZY-M100-S_3")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ZY-M100-S_3")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Human presence detector")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"presence, illuminance, sensitivity, keep_time")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZY-M100-S_3.png",alt:"Tuya ZY-M100-S_3"})])],-1))])]),t[9]||(t[9]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum"><span>Sensitivity (enum)</span></a></h3><p>PIR sensor sensitivity (refresh and update only while active). Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="keep-time-enum" tabindex="-1"><a class="header-anchor" href="#keep-time-enum"><span>Keep time (enum)</span></a></h3><p>PIR keep time in seconds (refresh and update only while active). Value can be found in the published state on the <code>keep_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keep_time&quot;: NEW_VALUE}</code>. The possible values are: <code>30</code>, <code>60</code>, <code>120</code>.</p>',10))])}]]),a=JSON.parse('{"path":"/devices/ZY-M100-S_3.html","title":"Tuya ZY-M100-S_3 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZY-M100-S_3 control via MQTT","description":"Integrate your Tuya ZY-M100-S_3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-08-01T18:23:40.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Keep time (enum)","slug":"keep-time-enum","link":"#keep-time-enum","children":[]}]}],"git":{"updatedTime":1743532928000},"filePathRelative":"devices/ZY-M100-S_3.md"}')}}]);