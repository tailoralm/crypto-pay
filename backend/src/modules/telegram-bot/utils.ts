import TempHumSensorModel from "../../shared/io-connectors/tuya/models/temp-hum-sensor.model";

export function mainValuesToText(sensor: TempHumSensorModel){
  return `Status Report:\n
    Temperature: ${sensor.va_temperature/10} ${sensor.temp_unit_convert.toUpperCase()}º
    Humidity: ${sensor.va_humidity}%
    Battery: ${sensor.battery_percentage}%
    `;
}
