// import DataCollector from "../../../shared/data-collector/data-collector.controller";
// import SensorMeasureStorage, {ISensorMeasure} from "../../../shared/storage/tables/sensor-measure.storage";
// import * as schedule from "node-schedule";
// import {IMQTTGeneralData} from "../../../shared/data-collector/data-collector.interfaces";
// import SensorStorage, {ISensor} from "../../../shared/storage/tables/sensor.storage";
//
// export default class SaveMqttCacheService {
//     jobs: schedule.Job[] = [];
//     constructor(private sensorStorage: SensorStorage, private sensorMeasureStorage: SensorMeasureStorage) {}
//
//     async run() {
//         const allMqttSensors = await this.sensorStorage.getAllMqtt();
//         for (const sensor of allMqttSensors) {
//             // const job = saveMqttCacheService.run('mqtt://192.168.1.251', 'sensor/data', '*/1 * * * *');
//             this.jobs.push(this.createJob(sensor));
//         }
//         return this.jobs;
//     }
//
//     createJob(sensor: ISensor){
//         const dataCollector = new DataCollector(sensor.mqttUrl, sensor.mqttTopic);
//         return schedule.scheduleJob(sensor.cronRule, () => {
//             const response = <IMQTTGeneralData>dataCollector.getLastMQTTData();
//             if(response) {
//                 this.verifyAndSave(sensor.id, response);
//             }
//         });
//     }
//
//     async verifyAndSave(sensorId: number, response: IMQTTGeneralData) {
//         const value: ISensorMeasure = {
//             sensorId: sensorId,
//             humidity: response.humidity,
//             temperature: response.temperature,
//             soilHumidity: response.moistValue,
//         };
//         try {
//             await this.sensorMeasureStorage.insert(value);
//         } catch (e) {
//             console.error('Error saving data from sensor', sensorId);
//             console.error(e);
//         }
//     }
// }