
export interface Transaction{
    id: number;
    amount: number;
    name: string;
    description: string;
    creationDate: number;
    transactionTypeId: number;
    accountId: number;
}