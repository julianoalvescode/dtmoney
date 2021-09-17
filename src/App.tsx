import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";
import { ModalCustom } from "./components/NewTransactionModal";
import { useState } from "react";

import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  return (
    <>
      <TransactionsProvider>
        <Header NewTransactionModalOpen={setIsNewTransactionModalOpen} />
        <Dashboard />
        <ModalCustom
          onClose={setIsNewTransactionModalOpen}
          onRequestClose={() => setIsNewTransactionModalOpen(false)}
          isOpen={isNewTransactionModalOpen}
        />
        <GlobalStyle />
      </TransactionsProvider>
    </>
  );
}
