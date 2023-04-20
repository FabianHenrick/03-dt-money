import { MagnifyingGlass, Placeholder } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchFomr() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações"></input>
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
