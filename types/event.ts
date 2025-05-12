export type WalletEvent = {
  type: "wallet_activity";
  wallet: string;
  txCount: number;
  timestamp: string;
};
