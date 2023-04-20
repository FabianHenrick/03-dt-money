import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchFomr } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchFomr />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <PriceHighLight variant="income">R$ 12.000,00 </PriceHighLight>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Hamburguer</td>
              <PriceHighLight variant="outcome">- R$ - 59,00 </PriceHighLight>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
