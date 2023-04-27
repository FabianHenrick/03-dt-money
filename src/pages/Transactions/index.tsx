import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchFomr } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { useContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchFomr />
        <TransactionsTable>
          <tbody>
            {transactions.map((transactions: any) => {
              return (
                <tr key={transactions.id}>
                  <td>{transactions.description}</td>
                  <PriceHighLight variant={transactions.type}>
                    R$ {transactions.price}
                  </PriceHighLight>
                  <td>{transactions.category}</td>
                  <td>{transactions.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
