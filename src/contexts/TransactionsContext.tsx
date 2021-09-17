import { createContext, ReactNode } from "react";
import { useQuery } from "react-query";
import { api } from "../services/api";

import * as I from "./types";

export const TransactionsContext = createContext<I.TransactionsContextData>(
  {} as I.TransactionsContextData
);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const { data } = useQuery<I.TransactionItem[]>(
    "TransactionsTable",
    async (url) => {
      const response = await fetch(
        "http://localhost:3000/api/transactions"
      ).then((res) =>
        res.json().then((data) => {
          var response = data.transactions;

          return response;
        })
      );

      return response;
    }
  );

  async function createTransaction(data: Omit<I.TransactionItem, "id">) {
    api.post("/transactions", {
      ...data,
      id: (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1),
    });
  }

  return (
    <>
      <TransactionsContext.Provider value={{ data: data, createTransaction }}>
        {children}
      </TransactionsContext.Provider>
    </>
  );
}
