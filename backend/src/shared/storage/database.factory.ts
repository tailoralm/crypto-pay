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

export async function buildAllDatabases() {
  try {
    await new ConfigStorage().createOrUpdateThisDatabaseSchema();
    await new UserStorage().createOrUpdateThisDatabaseSchema();
    await new LogStorage().createOrUpdateThisDatabaseSchema();
    await new WalletStorage().createOrUpdateThisDatabaseSchema();
    await new ProductStorage().createOrUpdateThisDatabaseSchema();
    await new PaymentIntentnionStorage().createOrUpdateThisDatabaseSchema();
    await new PaymentOnChainStorage().createOrUpdateThisDatabaseSchema();
  } catch (error) {
    console.error(error);
  }
}
