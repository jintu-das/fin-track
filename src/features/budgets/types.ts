export type Budget = {
  id: string;
  name: string;
  description: string;
  budgetedAmount: number;
  spentAmount: number;
  status: string;
};

export type Transaction = {
  id: string;
  merchant: string;
  description: string;
  category: string;
  type: TransactionType;
  amount: number;
  date: string;
};

export type TransactionType = "expense" | "income";
