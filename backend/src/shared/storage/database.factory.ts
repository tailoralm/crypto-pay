import ConfigStorage from "./tables/config.storage";
import PaymentIntentnionStorage from "./tables/payment-intention.storage";
import LogStorage from "./tables/log.storage";
import UserStorage from "./tables/user.storage";
import WalletStorage from "./tables/wallet.storage";
import ProductStorage from "./tables/product.storage";
import PaymentOnChainStorage from "./tables/payment-on-chain.storage";

export enum EDatabases {
  Config = 'config',
  Log = 'log',
  User = 'user',
  Wallet = 'wallet',
  PaymentIntention = 'payment_intention',
  PaymentOnChain = 'payment_on_chain',
  Product = 'product',
}

export default class DatabaseFactory {

  static getDatabase(database: EDatabases) {
    switch (database) {
      case EDatabases.Config:
        return new ConfigStorage();
      case EDatabases.User:
        return new UserStorage();
      case EDatabases.Log:
        return new LogStorage();
      case EDatabases.Wallet:
        return new WalletStorage();
      case EDatabases.Product:
        return new ProductStorage();
      case EDatabases.PaymentIntention:
        return new PaymentIntentnionStorage();
      case EDatabases.PaymentOnChain:
        return new PaymentOnChainStorage();

      // case EDatabases.PaymentIntention:
      //   return new WalletStorage();
      //
      // case EDatabases.Wallet:
      //   return new WalletStorage();

    }
  }

  static async buildAllDatabases() {
    Object.values(EDatabases).forEach((table: EDatabases) => {
      try {
        const database = this.getDatabase(table);
        database.createOrUpdateThisDatabaseSchema();
      } catch {
        console.error(`Error on creating table: ${table}`)
      }
    })
  }

}
