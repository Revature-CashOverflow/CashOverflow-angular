export interface Transaction {
  id: number;
  amount: number;
  name: string;
  description: string;
  creationDate: number;
  txTypeId: number;
  accountId: number;
}
