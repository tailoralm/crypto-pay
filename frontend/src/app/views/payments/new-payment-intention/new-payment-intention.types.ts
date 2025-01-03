import { ISelect } from "../../../shared/interfaces/form.interface";
import {IWalletSettings} from "../../../shared/interfaces/wallet.interface";

export interface IFormData {
  blockchains: ISelect[];
  wallets: IWalletSettings[];
}
