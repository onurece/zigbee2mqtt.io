"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3418],{67882:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>n,data:()=>l});var o=i(6254);const a={},n=(0,i(58079).A)(a,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[7]||(t[7]=(0,o.Lk)("h1",{id:"schneider-electric-eer51000",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#schneider-electric-eer51000"},[(0,o.Lk)("span",null,"Schneider Electric EER51000")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"EER51000")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Schneider Electric")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Wiser thermostat (RTS)")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, climate (occupied_heating_setpoint, local_temperature), zone_mode")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EER51000.png",alt:"Schneider Electric EER51000"})])],-1))])]),t[8]||(t[8]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>This device by default only pairs to Wiser Gateways when the set button is pressed, to let it join normal HA gateways (like what Zigbee2MQTT uses) hold the set button down for 5 seconds, and release.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="zone-mode-enum" tabindex="-1"><a class="header-anchor" href="#zone-mode-enum"><span>Zone mode (enum)</span></a></h3><p>Icon shown on device displays. Value can be found in the published state on the <code>zone_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;zone_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>manual</code>, <code>schedule</code>, <code>energy_saver</code>, <code>holiday</code>.</p>',11))])}]]),l=JSON.parse('{"path":"/devices/EER51000.html","title":"Schneider Electric EER51000 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric EER51000 control via MQTT","description":"Integrate your Schneider Electric EER51000 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-30T19:17:03.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Zone mode (enum)","slug":"zone-mode-enum","link":"#zone-mode-enum","children":[]}]}],"git":{"updatedTime":1743532928000},"filePathRelative":"devices/EER51000.md"}')}}]);