---
title: "Slacky-DIY THERM_SLACKY_DIY_R04 control via MQTT"
description: "Integrate your Slacky-DIY THERM_SLACKY_DIY_R04 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:29:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Slacky-DIY THERM_SLACKY_DIY_R04

|     |     |
|-----|-----|
| Model | THERM_SLACKY_DIY_R04  |
| Vendor  | [Slacky-DIY](/supported-devices/#v=Slacky-DIY)  |
| Description | Tuya Thermostat for Floor Heating with custom Firmware |
| Exposes | child_lock, programming_operation_mode, sensor, deadzone_temperature, min_heat_setpoint_limit, max_heat_setpoint_limit, frost_protect, heat_protect, brightness, eco_mode, eco_mode_heat_temperature, outdoor_temperature, climate (local_temperature, occupied_heating_setpoint, local_temperature_calibration, system_mode, running_state, schedule), schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday |
| Picture | ![Slacky-DIY THERM_SLACKY_DIY_R04](https://www.zigbee2mqtt.io/images/devices/THERM_SLACKY_DIY_R04.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/slacky1965/tuya_thermostat_zrd)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`


## Exposes

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Programming operation mode (enum)
Setpoint or Schedule mode.
Value can be found in the published state on the `programming_operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"programming_operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"programming_operation_mode": NEW_VALUE}`.
The possible values are: `setpoint`, `schedule`.

### Sensor (enum)
Select temperature sensor to use.
Value can be found in the published state on the `sensor` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `Inner (IN)`, `All (AL)`, `Outer (OU)`.

### Deadzone temperature (numeric)
The delta between local_temperature and current_heating_setpoint to trigger activity.
Value can be found in the published state on the `deadzone_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"deadzone_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `5`.
The unit of this value is `°C`.

### Min heat setpoint limit (numeric)
Minimum Heating set point limit.
Value can be found in the published state on the `min_heat_setpoint_limit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `15`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric)
Maximum Heating set point limit.
Value can be found in the published state on the `max_heat_setpoint_limit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `45`.
The unit of this value is `°C`.

### Frost protect (numeric)
Protection against minimum freezing temperature.
Value can be found in the published state on the `frost_protect` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"frost_protect": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protect": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `°C`.

### Heat protect (numeric)
Protection against maximum heating temperature.
Value can be found in the published state on the `heat_protect` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"heat_protect": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"heat_protect": NEW_VALUE}`.
The minimal value is `25` and the maximum value is `70`.
The unit of this value is `°C`.

### Brightness (numeric, day endpoint)
Screen brightness.
Value can be found in the published state on the `brightness_day` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness_day": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_day": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `9`.

### Eco mode (binary)
On/Off Eco Mode.
Value can be found in the published state on the `eco_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"eco_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_mode": NEW_VALUE}`.
If value equals `On` eco mode is ON, if `Off` OFF.

### Eco mode heat temperature (numeric)
Set heat temperature in eco mode.
Value can be found in the published state on the `eco_mode_heat_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"eco_mode_heat_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_mode_heat_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `45`.
The unit of this value is `°C`.

### Outdoor temperature (numeric)
Current temperature measured from the floor outer sensor.
Value can be found in the published state on the `outdoor_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"outdoor_temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Climate 
This climate device supports the following features: `local_temperature`, `occupied_heating_setpoint`, `local_temperature_calibration`, `system_mode`, `running_state`, `schedule`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `45`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-9` and the maximum value is `9` with a step size of `1`.

### Schedule monday (text)
Monday's schedule.
Value can be found in the published state on the `schedule_monday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule tuesday (text)
Tuesday's schedule.
Value can be found in the published state on the `schedule_tuesday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule wednesday (text)
Wednesday's schedule.
Value can be found in the published state on the `schedule_wednesday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule thursday (text)
Thursday's schedule.
Value can be found in the published state on the `schedule_thursday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule friday (text)
Friday's schedule.
Value can be found in the published state on the `schedule_friday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule saturday (text)
Saturday's schedule.
Value can be found in the published state on the `schedule_saturday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule sunday (text)
Sunday's schedule.
Value can be found in the published state on the `schedule_sunday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

