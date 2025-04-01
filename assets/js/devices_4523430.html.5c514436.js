"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42865],{41350:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>d,data:()=>c});var a=t(6254);const i={},d=(0,t(58079).A)(i,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"elko-4523430",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#elko-4523430"},[(0,a.Lk)("span",null,"ELKO 4523430")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"4523430")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=ELKO"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("ELKO")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"ESH Plus Super TR RF PH")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"climate (occupied_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state), display_text, load, regulator_mode, regulator_time, sensor, floor_temp, max_floor_temp, mean_power, child_lock, frost_guard, night_switching")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/4523430.png",alt:"ELKO 4523430"})])],-1))])]),o[9]||(o[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>This device does not seem to support Zigbee channels higher than channel 15. If your network uses a higher Zigbee channel, you might not be able to join this device to the network.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><ul><li>Press &quot;arrow up&quot; and &quot;M&quot; simultaneously until &quot;joining&quot; and &quot;pairing&quot; is shown on the ELKO Super TR RF display.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',5)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,a.Fv)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>local_temperature_based_on_sensor</code>: Base local temperature on sensor choice (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>50</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-12.8</code> and the maximum value is <code>12.7</code> with a step size of <code>0.1</code>.</li></ul><h3 id="display-text-text" tabindex="-1"><a class="header-anchor" href="#display-text-text"><span>Display text (text)</span></a></h3><p>Displayed text on thermostat display (zone). Max 14 characters. Value can be found in the published state on the <code>display_text</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_text&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_text&quot;: NEW_VALUE}</code>.</p><h3 id="load-numeric" tabindex="-1"><a class="header-anchor" href="#load-numeric"><span>Load (numeric)</span></a></h3><p>Load in W when heating is on (between 0-2300 W). The thermostat uses the value as input to the mean_power calculation.. Value can be found in the published state on the <code>load</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;load&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;load&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2300</code>. The unit of this value is <code>W</code>.</p><h3 id="regulator-mode-binary" tabindex="-1"><a class="header-anchor" href="#regulator-mode-binary"><span>Regulator mode (binary)</span></a></h3><p>Device in regulator or thermostat mode.. Value can be found in the published state on the <code>regulator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;regulator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;regulator_mode&quot;: NEW_VALUE}</code>. If value equals <code>regulator</code> regulator mode is ON, if <code>thermostat</code> OFF.</p><h3 id="regulator-time-numeric" tabindex="-1"><a class="header-anchor" href="#regulator-time-numeric"><span>Regulator time (numeric)</span></a></h3><p>When device is in regulator mode this controls the time between each in/out connection. When device is in thermostat mode this controls the time between each in/out switch when measured temperature is within +-0.5 °C set temperature. Choose a long time for (slow) concrete floors and a short time for (quick) wooden floors.. Value can be found in the published state on the <code>regulator_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;regulator_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;regulator_time&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>20</code>. The unit of this value is <code>min</code>.</p><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum"><span>Sensor (enum)</span></a></h3><p>Select temperature sensor to use. Value can be found in the published state on the <code>sensor</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensor&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>air</code>, <code>floor</code>, <code>supervisor_floor</code>.</p><h3 id="floor-temp-numeric" tabindex="-1"><a class="header-anchor" href="#floor-temp-numeric"><span>Floor temp (numeric)</span></a></h3><p>Current temperature measured on the external sensor (floor). Value can be found in the published state on the <code>floor_temp</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;floor_temp&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="max-floor-temp-numeric" tabindex="-1"><a class="header-anchor" href="#max-floor-temp-numeric"><span>Max floor temp (numeric)</span></a></h3><p>Set max floor temperature (between 20-35 °C) when &quot;supervisor_floor&quot; is set. Value can be found in the published state on the <code>max_floor_temp</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_floor_temp&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_floor_temp&quot;: NEW_VALUE}</code>. The minimal value is <code>20</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="mean-power-numeric" tabindex="-1"><a class="header-anchor" href="#mean-power-numeric"><span>Mean power (numeric)</span></a></h3><p>Reports average power usage last 10 minutes. Value can be found in the published state on the <code>mean_power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mean_power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>lock</code> child lock is ON, if <code>unlock</code> OFF.</p><h3 id="frost-guard-binary" tabindex="-1"><a class="header-anchor" href="#frost-guard-binary"><span>Frost guard (binary)</span></a></h3><p>When frost guard is ON, it is activated when the thermostat is switched OFF with the ON/OFF button.At the same time, the display will fade and the text &quot;Frostsikring x °C&quot; appears in the display and remains until the thermostat is switched on again.. Value can be found in the published state on the <code>frost_guard</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;frost_guard&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_guard&quot;: NEW_VALUE}</code>. If value equals <code>on</code> frost guard is ON, if <code>off</code> OFF.</p><h3 id="night-switching-binary" tabindex="-1"><a class="header-anchor" href="#night-switching-binary"><span>Night switching (binary)</span></a></h3><p>Turn on or off night setting.. Value can be found in the published state on the <code>night_switching</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;night_switching&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_switching&quot;: NEW_VALUE}</code>. If value equals <code>on</code> night switching is ON, if <code>off</code> OFF.</p>',27))])}]]),c=JSON.parse('{"path":"/devices/4523430.html","title":"ELKO 4523430 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ELKO 4523430 control via MQTT","description":"Integrate your ELKO 4523430 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-01T18:11:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Display text (text)","slug":"display-text-text","link":"#display-text-text","children":[]},{"level":3,"title":"Load (numeric)","slug":"load-numeric","link":"#load-numeric","children":[]},{"level":3,"title":"Regulator mode (binary)","slug":"regulator-mode-binary","link":"#regulator-mode-binary","children":[]},{"level":3,"title":"Regulator time (numeric)","slug":"regulator-time-numeric","link":"#regulator-time-numeric","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Floor temp (numeric)","slug":"floor-temp-numeric","link":"#floor-temp-numeric","children":[]},{"level":3,"title":"Max floor temp (numeric)","slug":"max-floor-temp-numeric","link":"#max-floor-temp-numeric","children":[]},{"level":3,"title":"Mean power (numeric)","slug":"mean-power-numeric","link":"#mean-power-numeric","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Frost guard (binary)","slug":"frost-guard-binary","link":"#frost-guard-binary","children":[]},{"level":3,"title":"Night switching (binary)","slug":"night-switching-binary","link":"#night-switching-binary","children":[]}]}],"git":{"updatedTime":1743532928000},"filePathRelative":"devices/4523430.md"}')}}]);