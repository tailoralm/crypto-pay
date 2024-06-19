import * as schedule from "node-schedule";
import SensorMeasureStorage from "../../shared/storage/tables/sensor-measure.storage";
// import SaveMqttCacheService from "./services/save-mqtt-cache.service";
import SensorStorage from "../../shared/storage/tables/sensor.storage";

export default class RoutinesController {
  private jobs: schedule.Job[] = [];
  private statusRoomStorage: SensorMeasureStorage;
  private sensorStorage: SensorStorage;


  constructor() {
    this.statusRoomStorage = new SensorMeasureStorage();
    this.sensorStorage = new SensorStorage();
  }

    async createRoutines() {
      // const saveMqttCacheService = new SaveMqttCacheService(this.sensorStorage, this.statusRoomStorage);
      // this.jobs.push(...await saveMqttCacheService.run());
    }



  cancelAllJobs() {
    for (const job of this.jobs) {
      job.cancel();
    }
  }
}
