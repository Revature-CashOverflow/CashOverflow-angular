export interface Transaction {
  id: number;
  amount: number;
  description: string;
  creationDate: number;
  txTypeId: number;
  accountId: number;
}
