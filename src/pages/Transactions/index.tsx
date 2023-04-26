import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchFomr } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  });

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchFomr />
        <TransactionsTable>
          <tbody>
            {transactions.map((transactions) => {
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
