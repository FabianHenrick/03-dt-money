import { useContext } from "react";
import { SummaryCard, SummaryContainer } from "./styles";
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyCircleDollar,
} from "phosphor-react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formater";
import { useSummary } from "../../hooks/UseSummary";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong> {priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant={"green"}>
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
