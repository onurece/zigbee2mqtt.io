"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[70982],{28919:(e,t,c)=>{c.r(t),c.d(t,{comp:()=>n,data:()=>i});var a=c(6254);const o={},n=(0,c(58079).A)(o,[["render",function(e,t){const c=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[11]||(t[11]=(0,a.Lk)("h1",{id:"shinasystem-dms-300zb",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#shinasystem-dms-300zb"},[(0,a.Lk)("span",null,"ShinaSystem DMS-300ZB")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"DMS-300ZB")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(c,{to:"/supported-devices/#v=ShinaSystem"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("ShinaSystem")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"SiHAS dual motion sensor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, voltage, occupancy_in, occupancy_out, occupancy_or, occupancy_and, occupancy_timeout")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DMS-300ZB.png",alt:"ShinaSystem DMS-300ZB"})])],-1))])]),t[12]||(t[12]=(0,a.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,a.Lk)("span",null,"OTA updates")])],-1)),(0,a.Lk)("p",null,[t[8]||(t[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(c,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,a.eW)("."))]),t[13]||(t[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(c,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,a.Fv)('<ul><li><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="occupancy-in-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-in-binary"><span>Occupancy in (binary)</span></a></h3><p>Indicates whether &quot;IN&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_in</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy in is ON, if <code>false</code> OFF.</p><h3 id="occupancy-out-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-out-binary"><span>Occupancy out (binary)</span></a></h3><p>Indicates whether &quot;OUT&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_out</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy out is ON, if <code>false</code> OFF.</p><h3 id="occupancy-or-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-or-binary"><span>Occupancy or (binary)</span></a></h3><p>Indicates whether &quot;IN or OUT&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_or</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy or is ON, if <code>false</code> OFF.</p><h3 id="occupancy-and-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-and-binary"><span>Occupancy and (binary)</span></a></h3><p>Indicates whether &quot;IN and OUT&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_and</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy and is ON, if <code>false</code> OFF.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric"><span>Occupancy timeout (numeric)</span></a></h3><p>Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p>',16))])}]]),i=JSON.parse('{"path":"/devices/DMS-300ZB.html","title":"ShinaSystem DMS-300ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ShinaSystem DMS-300ZB control via MQTT","description":"Integrate your ShinaSystem DMS-300ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Occupancy in (binary)","slug":"occupancy-in-binary","link":"#occupancy-in-binary","children":[]},{"level":3,"title":"Occupancy out (binary)","slug":"occupancy-out-binary","link":"#occupancy-out-binary","children":[]},{"level":3,"title":"Occupancy or (binary)","slug":"occupancy-or-binary","link":"#occupancy-or-binary","children":[]},{"level":3,"title":"Occupancy and (binary)","slug":"occupancy-and-binary","link":"#occupancy-and-binary","children":[]},{"level":3,"title":"Occupancy timeout (numeric)","slug":"occupancy-timeout-numeric","link":"#occupancy-timeout-numeric","children":[]}]}],"git":{"updatedTime":1743532928000},"filePathRelative":"devices/DMS-300ZB.md"}')}}]);