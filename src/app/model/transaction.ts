export interface Transaction {
  id: number;
  amount: number;
  name: string;
  description: string;
  creationDate: number;
  txType: number;
  accountId: number;
}
