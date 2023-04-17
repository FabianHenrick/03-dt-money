import { SummaryContainer } from "./styles";
import { ArrowCircleUp } from "phosphor-react";
export function Summary() {
  return (
    <SummaryContainer>
      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp />
        </header>
      </div>
    </SummaryContainer>
  );
}
