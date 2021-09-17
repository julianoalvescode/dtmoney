export interface TransactionsContextData {
  data: TransactionItem[] | undefined;
  createTransaction: (
    transaction: Omit<TransactionItem, "id">
  ) => Promise<void>;
}

export type TransactionItem = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date | string;
};
