import ConfigStorage from "./tables/config.storage";
import FarmStorage from "./tables/payment-intention.storage";
import GrowStorage from "./tables/grow.storage";
import SensorStorage from "./tables/sensor.storage";
import SensorMeasureStorage from "./tables/sensor-measure.storage";
import LogStorage from "./tables/log.storage";
import UserStorage from "./tables/user.storage";

export enum EDatabases {
  Config = 'config',
  Log = 'log',
  User = 'user',
  PaymentIntention = 'payment_intention',
}

export default class DatabaseFactory {

  static getDatabase(database: EDatabases) {
    switch (database) {
      case EDatabases.Config:
        return new ConfigStorage();
      case EDatabases.Log:
        return new LogStorage();
      case EDatabases.User:
      return new UserStorage();


    }
  }

  static async buildAllDatabases() {
    Object.values(EDatabases).forEach((table: EDatabases) => {
      try {
        this.getDatabase(table).createOrUpdateThisDatabaseSchema()
      } catch {
        console.error(`Error on creating table: ${table}`)
      }
    })
  }

}
