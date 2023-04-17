import { SummaryContainer } from "./styles";
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyCircleDollar,
} from "phosphor-react";
export function Summary() {
  return (
    <SummaryContainer>
      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp />
        </header>
      </div>
      <div>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown />
        </header>
      </div>
      <div>
        <header>
          <span>Total</span>
          <CurrencyCircleDollar />
        </header>
      </div>
    </SummaryContainer>
  );
}
