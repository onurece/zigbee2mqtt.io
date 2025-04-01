"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2755],{84436:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>a,data:()=>d});var o=i(6254);const n={},a=(0,i(58079).A)(n,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"leapmmw-mtd085-zb",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#leapmmw-mtd085-zb"},[(0,o.Lk)("span",null,"LeapMMW MTD085-ZB")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"MTD085-ZB")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=LeapMMW"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("LeapMMW")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Human presence sensor")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"occupancy, illuminance, target_distance, radar_sensitivity, detection_range, shield_range, entry_sensitivity, entry_distance, entry_filter_time, departure_delay, block_time, status_indication, sensor, scene_preset, distance_report_mode, debug_mode, debug_distance, debug_countdown")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MTD085-ZB.png",alt:"LeapMMW MTD085-ZB"})])],-1))])]),t[9]||(t[9]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric"><span>Target distance (numeric)</span></a></h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric"><span>Radar sensitivity (numeric)</span></a></h3><p>Detection threshold for the strength of object energy. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="detection-range-numeric" tabindex="-1"><a class="header-anchor" href="#detection-range-numeric"><span>Detection range (numeric)</span></a></h3><p>Maximum distance detected by the sensor. Value can be found in the published state on the <code>detection_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>. The unit of this value is <code>m</code>.</p><h3 id="shield-range-numeric" tabindex="-1"><a class="header-anchor" href="#shield-range-numeric"><span>Shield range (numeric)</span></a></h3><p>Nearest distance detected by the sensor. Value can be found in the published state on the <code>shield_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;shield_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>. The unit of this value is <code>m</code>.</p><h3 id="entry-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#entry-sensitivity-numeric"><span>Entry sensitivity (numeric)</span></a></h3><p>Sensitivity threshold triggered for the first time when the target enters the detection range. Value can be found in the published state on the <code>entry_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;entry_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="entry-distance-numeric" tabindex="-1"><a class="header-anchor" href="#entry-distance-numeric"><span>Entry distance (numeric)</span></a></h3><p>Dectection distance when unoccupied. Value can be found in the published state on the <code>entry_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;entry_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>. The unit of this value is <code>m</code>.</p><h3 id="entry-filter-time-numeric" tabindex="-1"><a class="header-anchor" href="#entry-filter-time-numeric"><span>Entry filter time (numeric)</span></a></h3><p>Sensitivity threshold triggered for the first time when the target enters the detection range . Value can be found in the published state on the <code>entry_filter_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;entry_filter_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>0.5</code>. The unit of this value is <code>s</code>.</p><h3 id="departure-delay-numeric" tabindex="-1"><a class="header-anchor" href="#departure-delay-numeric"><span>Departure delay (numeric)</span></a></h3><p>Confirmation time after the target disappears. Value can be found in the published state on the <code>departure_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;departure_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>7200</code>. The unit of this value is <code>s</code>.</p><h3 id="block-time-numeric" tabindex="-1"><a class="header-anchor" href="#block-time-numeric"><span>Block time (numeric)</span></a></h3><p>Time for the target to be detected again after switching from manned(occupy) to unmanned(unoccupy) mode. Value can be found in the published state on the <code>block_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;block_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id="status-indication-enum" tabindex="-1"><a class="header-anchor" href="#status-indication-enum"><span>Status indication (enum)</span></a></h3><p>Indicator light will turn on when human presence is detected. Value can be found in the published state on the <code>status_indication</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_indication&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum"><span>Sensor (enum)</span></a></h3><p>The radar sensor can be set in three states: on, occupied and unoccupied. For example, if set to occupied, it will continue to maintain presence regardless of whether someone is present or not. If set to unoccupied, the unoccupied state will be maintained permanently.. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>occupied</code>, <code>unoccupied</code>.</p><h3 id="scene-preset-enum" tabindex="-1"><a class="header-anchor" href="#scene-preset-enum"><span>Scene preset (enum)</span></a></h3><p>Presets. Value can be found in the published state on the <code>scene_preset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;scene_preset&quot;: NEW_VALUE}</code>. The possible values are: <code>Custom</code>, <code>Toilet</code>, <code>Kitchen</code>, <code>Hallway</code>, <code>Bedroom</code>, <code>Livingroom</code>, <code>Meetingroom</code>, <code>Factory default</code>.</p><h3 id="distance-report-mode-enum" tabindex="-1"><a class="header-anchor" href="#distance-report-mode-enum"><span>Distance report mode (enum)</span></a></h3><p>Indicator light will turn on when human presence is detected. Value can be found in the published state on the <code>distance_report_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;distance_report_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>Normal</code>, <code>Occupancy detection</code>.</p><h3 id="debug-mode-enum" tabindex="-1"><a class="header-anchor" href="#debug-mode-enum"><span>Debug mode (enum)</span></a></h3><p>In debug mode, radar will report more information, can be used to identify interference. Value can be found in the published state on the <code>debug_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;debug_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="debug-distance-numeric" tabindex="-1"><a class="header-anchor" href="#debug-distance-numeric"><span>Debug distance (numeric)</span></a></h3><p>Real time distance to target. Value can be found in the published state on the <code>debug_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id="debug-countdown-numeric" tabindex="-1"><a class="header-anchor" href="#debug-countdown-numeric"><span>Debug countdown (numeric)</span></a></h3><p>Time before the target disappears. Value can be found in the published state on the <code>debug_countdown</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p>',38))])}]]),d=JSON.parse('{"path":"/devices/MTD085-ZB.html","title":"LeapMMW MTD085-ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"LeapMMW MTD085-ZB control via MQTT","description":"Integrate your LeapMMW MTD085-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-03T20:11:47.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Target distance (numeric)","slug":"target-distance-numeric","link":"#target-distance-numeric","children":[]},{"level":3,"title":"Radar sensitivity (numeric)","slug":"radar-sensitivity-numeric","link":"#radar-sensitivity-numeric","children":[]},{"level":3,"title":"Detection range (numeric)","slug":"detection-range-numeric","link":"#detection-range-numeric","children":[]},{"level":3,"title":"Shield range (numeric)","slug":"shield-range-numeric","link":"#shield-range-numeric","children":[]},{"level":3,"title":"Entry sensitivity (numeric)","slug":"entry-sensitivity-numeric","link":"#entry-sensitivity-numeric","children":[]},{"level":3,"title":"Entry distance (numeric)","slug":"entry-distance-numeric","link":"#entry-distance-numeric","children":[]},{"level":3,"title":"Entry filter time (numeric)","slug":"entry-filter-time-numeric","link":"#entry-filter-time-numeric","children":[]},{"level":3,"title":"Departure delay (numeric)","slug":"departure-delay-numeric","link":"#departure-delay-numeric","children":[]},{"level":3,"title":"Block time (numeric)","slug":"block-time-numeric","link":"#block-time-numeric","children":[]},{"level":3,"title":"Status indication (enum)","slug":"status-indication-enum","link":"#status-indication-enum","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Scene preset (enum)","slug":"scene-preset-enum","link":"#scene-preset-enum","children":[]},{"level":3,"title":"Distance report mode (enum)","slug":"distance-report-mode-enum","link":"#distance-report-mode-enum","children":[]},{"level":3,"title":"Debug mode (enum)","slug":"debug-mode-enum","link":"#debug-mode-enum","children":[]},{"level":3,"title":"Debug distance (numeric)","slug":"debug-distance-numeric","link":"#debug-distance-numeric","children":[]},{"level":3,"title":"Debug countdown (numeric)","slug":"debug-countdown-numeric","link":"#debug-countdown-numeric","children":[]}]}],"git":{"updatedTime":1743532928000},"filePathRelative":"devices/MTD085-ZB.md"}')}}]);