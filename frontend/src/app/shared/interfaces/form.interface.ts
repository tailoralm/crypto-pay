export interface ISelect {
  name: string;
  value: string;
}

export interface IWallet extends ISelect{
  blockchain: string;
}
