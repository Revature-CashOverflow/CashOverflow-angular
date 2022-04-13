export interface UserTransfer {
    id: number,
    sendOrReceive: number,
    originUser: string,
    user: string,
    transferAccount: number,
    transferAmount: number,
}
