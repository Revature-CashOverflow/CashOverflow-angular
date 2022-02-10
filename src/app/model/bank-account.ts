import { UserAccount } from '../model/user-account';
import { Transaction } from '../model/transaction';


export interface BankAccount{
    id: number;
    name: string;
    balance: number;
    description: string;
    creationDate: string;
    accountTypeId: number;
    user: null | UserAccount;
    transactionList: null | Transaction[];
}