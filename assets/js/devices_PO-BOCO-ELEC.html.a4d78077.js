"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[5573],{28953:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>a,data:()=>c});var d=t(6254);const i={},a=(0,t(58079).A)(i,[["render",function(e,o){const t=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[o[8]||(o[8]=(0,d.Lk)("h1",{id:"powernity-po-boco-elec",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#powernity-po-boco-elec"},[(0,d.Lk)("span",null,"Powernity PO-BOCO-ELEC")])],-1)),(0,d.Lk)("table",null,[o[6]||(o[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[o[2]||(o[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"PO-BOCO-ELEC")],-1)),(0,d.Lk)("tr",null,[o[1]||(o[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(t,{to:"/supported-devices/#v=Powernity"},{default:(0,d.k6)((()=>o[0]||(o[0]=[(0,d.eW)("Powernity")]))),_:1})])]),o[3]||(o[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Pilot wire heating module")],-1)),o[4]||(o[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"climate (preset, local_temperature, occupied_heating_setpoint, local_temperature_calibration, system_mode), auto_mode, manual_mode, frost_protection, humidity, child_lock, switch (state), window_opening_mode, window_opening_mode_duration, temperature_unit, boost_heating, boost_timeset_countdown, power_rating, energy_consumed, mode_switching, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, holiday_start_stop, reset_consumption")],-1)),o[5]||(o[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PO-BOCO-ELEC.png",alt:"Powernity PO-BOCO-ELEC"})])],-1))])]),o[9]||(o[9]=(0,d.Lk)("h2",{id:"options",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#options"},[(0,d.Lk)("span",null,"Options")])],-1)),(0,d.Lk)("p",null,[(0,d.Lk)("em",null,[(0,d.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.k6)((()=>o[7]||(o[7]=[(0,d.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,d.Fv)('<ul><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>preset</code>, <code>local_temperature</code>, <code>occupied_heating_setpoint</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>0</code> and <code>20</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>auto</code>, <code>holiday</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Only for Homeassistant. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>auto</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-5.5</code> and the maximum value is <code>5.5</code> with a step size of <code>0.5</code>.</li></ul><h3 id="auto-mode-enum" tabindex="-1"><a class="header-anchor" href="#auto-mode-enum"><span>Auto mode (enum)</span></a></h3><p>Auto Mode. Value can be found in the published state on the <code>auto_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>antifrost</code>, <code>eco</code>, <code>comfort_-2</code>, <code>comfort_-1</code>, <code>comfort</code>.</p><h3 id="manual-mode-enum" tabindex="-1"><a class="header-anchor" href="#manual-mode-enum"><span>Manual mode (enum)</span></a></h3><p>Manual Mode. Value can be found in the published state on the <code>manual_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>antifrost</code>, <code>eco</code>, <code>comfort_-2</code>, <code>comfort_-1</code>, <code>comfort</code>.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary"><span>Frost protection (binary)</span></a></h3><p>When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C.. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="window-detection-switch" tabindex="-1"><a class="header-anchor" href="#window-detection-switch"><span>Window detection (switch)</span></a></h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="window-opening-mode-enum" tabindex="-1"><a class="header-anchor" href="#window-opening-mode-enum"><span>Window opening mode (enum)</span></a></h3><p>Window Opening Mode. Value can be found in the published state on the <code>window_opening_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_opening_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>antifrost</code>, <code>eco</code>, <code>comfort_-2</code>, <code>comfort_-1</code>, <code>comfort</code>.</p><h3 id="window-opening-mode-duration-numeric" tabindex="-1"><a class="header-anchor" href="#window-opening-mode-duration-numeric"><span>Window opening mode duration (numeric)</span></a></h3><p>Duration of the window opening mode. Value can be found in the published state on the <code>window_opening_mode_duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_opening_mode_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>90</code>. The unit of this value is <code>min</code>.</p><h3 id="temperature-unit-enum" tabindex="-1"><a class="header-anchor" href="#temperature-unit-enum"><span>Temperature unit (enum)</span></a></h3><p>Temperature unit. Value can be found in the published state on the <code>temperature_unit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_unit&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="boost-heating-binary" tabindex="-1"><a class="header-anchor" href="#boost-heating-binary"><span>Boost heating (binary)</span></a></h3><p>Boost Heating: the device will enter the boost heating mode.. Value can be found in the published state on the <code>boost_heating</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_heating&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> boost heating is ON, if <code>OFF</code> OFF.</p><h3 id="boost-timeset-countdown-numeric" tabindex="-1"><a class="header-anchor" href="#boost-timeset-countdown-numeric"><span>Boost timeset countdown (numeric)</span></a></h3><p>The remaining time for the function will be counted down in seconds ( 900 to 0 ) when the boost heating is activated.. Value can be found in the published state on the <code>boost_timeset_countdown</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>900</code>. The unit of this value is <code>s</code>.</p><h3 id="power-rating-numeric" tabindex="-1"><a class="header-anchor" href="#power-rating-numeric"><span>Power rating (numeric)</span></a></h3><p>How much power is the heater rated to. Entering a value will allow the Thermostat to record a value of power usage that can be checked under settings on the physical Thermostat. Value can be found in the published state on the <code>power_rating</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_rating&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>10000</code>. The unit of this value is <code>kWh</code>.</p><h3 id="energy-consumed-numeric" tabindex="-1"><a class="header-anchor" href="#energy-consumed-numeric"><span>Energy consumed (numeric)</span></a></h3><p>Consumed energy. Value can be found in the published state on the <code>energy_consumed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="mode-switching-enum" tabindex="-1"><a class="header-anchor" href="#mode-switching-enum"><span>Mode switching (enum)</span></a></h3><p>Choose the number of mode your heater supports.. Value can be found in the published state on the <code>mode_switching</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode_switching&quot;: NEW_VALUE}</code>. The possible values are: <code>four_modes</code>, <code>six_modes</code>.</p><h3 id="schedule-monday-text" tabindex="-1"><a class="header-anchor" href="#schedule-monday-text"><span>Schedule monday (text)</span></a></h3><p>Schedule for the auto mode. Can be defined in the following format: <code>mode / hours:minutes / mode</code>. For example: <code>comfort / 06:00 / eco / 12:00 / off</code>. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max.. Value can be found in the published state on the <code>schedule_monday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_monday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-tuesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-tuesday-text"><span>Schedule tuesday (text)</span></a></h3><p>Schedule for the auto mode. Can be defined in the following format: <code>mode / hours:minutes / mode</code>. For example: <code>comfort / 06:00 / eco / 12:00 / off</code>. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max.. Value can be found in the published state on the <code>schedule_tuesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_tuesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-wednesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-wednesday-text"><span>Schedule wednesday (text)</span></a></h3><p>Schedule for the auto mode. Can be defined in the following format: <code>mode / hours:minutes / mode</code>. For example: <code>comfort / 06:00 / eco / 12:00 / off</code>. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max.. Value can be found in the published state on the <code>schedule_wednesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_wednesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-thursday-text" tabindex="-1"><a class="header-anchor" href="#schedule-thursday-text"><span>Schedule thursday (text)</span></a></h3><p>Schedule for the auto mode. Can be defined in the following format: <code>mode / hours:minutes / mode</code>. For example: <code>comfort / 06:00 / eco / 12:00 / off</code>. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max.. Value can be found in the published state on the <code>schedule_thursday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_thursday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-friday-text" tabindex="-1"><a class="header-anchor" href="#schedule-friday-text"><span>Schedule friday (text)</span></a></h3><p>Schedule for the auto mode. Can be defined in the following format: <code>mode / hours:minutes / mode</code>. For example: <code>comfort / 06:00 / eco / 12:00 / off</code>. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max.. Value can be found in the published state on the <code>schedule_friday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_friday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-saturday-text" tabindex="-1"><a class="header-anchor" href="#schedule-saturday-text"><span>Schedule saturday (text)</span></a></h3><p>Schedule for the auto mode. Can be defined in the following format: <code>mode / hours:minutes / mode</code>. For example: <code>comfort / 06:00 / eco / 12:00 / off</code>. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max.. Value can be found in the published state on the <code>schedule_saturday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_saturday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-sunday-text" tabindex="-1"><a class="header-anchor" href="#schedule-sunday-text"><span>Schedule sunday (text)</span></a></h3><p>Schedule for the auto mode. Can be defined in the following format: <code>mode / hours:minutes / mode</code>. For example: <code>comfort / 06:00 / eco / 12:00 / off</code>. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max.. Value can be found in the published state on the <code>schedule_sunday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_sunday&quot;: NEW_VALUE}</code>.</p><h3 id="holiday-start-stop-text" tabindex="-1"><a class="header-anchor" href="#holiday-start-stop-text"><span>Holiday start stop (text)</span></a></h3><p>The holiday mode will automatically start at the set time starting point and run the holiday mode. Can be defined in the following format: <code>startYear/startMonth/startDay startHours:startMinutes | endYear/endMonth/endDay endHours:endMinutes | mode</code>. For example: <code>2024/12/12 09:00 | 2024/12/14 10:00 | comfort</code>Note: You cannot set an interval superior at 255 hours. The end date minutes will be ignore.. Value can be found in the published state on the <code>holiday_start_stop</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_start_stop&quot;: NEW_VALUE}</code>.</p><h3 id="reset-consumption-binary" tabindex="-1"><a class="header-anchor" href="#reset-consumption-binary"><span>Reset consumption (binary)</span></a></h3><p>Reset energy consumption to zero. Value can be found in the published state on the <code>reset_consumption</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reset_consumption&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> reset consumption is ON, if <code>OFF</code> OFF.</p>',51))])}]]),c=JSON.parse('{"path":"/devices/PO-BOCO-ELEC.html","title":"Powernity PO-BOCO-ELEC control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Powernity PO-BOCO-ELEC control via MQTT","description":"Integrate your Powernity PO-BOCO-ELEC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-03T20:11:47.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Auto mode (enum)","slug":"auto-mode-enum","link":"#auto-mode-enum","children":[]},{"level":3,"title":"Manual mode (enum)","slug":"manual-mode-enum","link":"#manual-mode-enum","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Window detection (switch)","slug":"window-detection-switch","link":"#window-detection-switch","children":[]},{"level":3,"title":"Window opening mode (enum)","slug":"window-opening-mode-enum","link":"#window-opening-mode-enum","children":[]},{"level":3,"title":"Window opening mode duration (numeric)","slug":"window-opening-mode-duration-numeric","link":"#window-opening-mode-duration-numeric","children":[]},{"level":3,"title":"Temperature unit (enum)","slug":"temperature-unit-enum","link":"#temperature-unit-enum","children":[]},{"level":3,"title":"Boost heating (binary)","slug":"boost-heating-binary","link":"#boost-heating-binary","children":[]},{"level":3,"title":"Boost timeset countdown (numeric)","slug":"boost-timeset-countdown-numeric","link":"#boost-timeset-countdown-numeric","children":[]},{"level":3,"title":"Power rating (numeric)","slug":"power-rating-numeric","link":"#power-rating-numeric","children":[]},{"level":3,"title":"Energy consumed (numeric)","slug":"energy-consumed-numeric","link":"#energy-consumed-numeric","children":[]},{"level":3,"title":"Mode switching (enum)","slug":"mode-switching-enum","link":"#mode-switching-enum","children":[]},{"level":3,"title":"Schedule monday (text)","slug":"schedule-monday-text","link":"#schedule-monday-text","children":[]},{"level":3,"title":"Schedule tuesday (text)","slug":"schedule-tuesday-text","link":"#schedule-tuesday-text","children":[]},{"level":3,"title":"Schedule wednesday (text)","slug":"schedule-wednesday-text","link":"#schedule-wednesday-text","children":[]},{"level":3,"title":"Schedule thursday (text)","slug":"schedule-thursday-text","link":"#schedule-thursday-text","children":[]},{"level":3,"title":"Schedule friday (text)","slug":"schedule-friday-text","link":"#schedule-friday-text","children":[]},{"level":3,"title":"Schedule saturday (text)","slug":"schedule-saturday-text","link":"#schedule-saturday-text","children":[]},{"level":3,"title":"Schedule sunday (text)","slug":"schedule-sunday-text","link":"#schedule-sunday-text","children":[]},{"level":3,"title":"Holiday start stop (text)","slug":"holiday-start-stop-text","link":"#holiday-start-stop-text","children":[]},{"level":3,"title":"Reset consumption (binary)","slug":"reset-consumption-binary","link":"#reset-consumption-binary","children":[]}]}],"git":{"updatedTime":1743532928000},"filePathRelative":"devices/PO-BOCO-ELEC.md"}')}}]);