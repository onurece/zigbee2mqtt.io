"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[28604],{4854:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>o});var r=a(6254);const i={},n=(0,a(58079).A)(i,[["render",function(e,t){const a=(0,r.g2)("RouteLink");return(0,r.uX)(),(0,r.CE)("div",null,[t[8]||(t[8]=(0,r.Lk)("h1",{id:"smartthings-3315-s",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#smartthings-3315-s"},[(0,r.Lk)("span",null,"SmartThings 3315-S")])],-1)),(0,r.Lk)("table",null,[t[6]||(t[6]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th"),(0,r.Lk)("th")])],-1)),(0,r.Lk)("tbody",null,[t[2]||(t[2]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Model"),(0,r.Lk)("td",null,"3315-S")],-1)),(0,r.Lk)("tr",null,[t[1]||(t[1]=(0,r.Lk)("td",null,"Vendor",-1)),(0,r.Lk)("td",null,[(0,r.bF)(a,{to:"/supported-devices/#v=SmartThings"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("SmartThings")]))),_:1})])]),t[3]||(t[3]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Description"),(0,r.Lk)("td",null,"Water sensor")],-1)),t[4]||(t[4]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Exposes"),(0,r.Lk)("td",null,"temperature, water_leak, battery_low, tamper, battery")],-1)),t[5]||(t[5]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Picture"),(0,r.Lk)("td",null,[(0,r.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/3315-S.png",alt:"SmartThings 3315-S"})])],-1))])]),t[9]||(t[9]=(0,r.Lk)("h2",{id:"options",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#options"},[(0,r.Lk)("span",null,"Options")])],-1)),(0,r.Lk)("p",null,[(0,r.Lk)("em",null,[(0,r.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.k6)((()=>t[7]||(t[7]=[(0,r.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,r.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="water-leak-binary" tabindex="-1"><a class="header-anchor" href="#water-leak-binary"><span>Water leak (binary)</span></a></h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water leak is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>',12))])}]]),o=JSON.parse('{"path":"/devices/3315-S.html","title":"SmartThings 3315-S control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SmartThings 3315-S control via MQTT","description":"Integrate your SmartThings 3315-S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Water leak (binary)","slug":"water-leak-binary","link":"#water-leak-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]}]}],"git":{"updatedTime":1743532928000},"filePathRelative":"devices/3315-S.md"}')}}]);