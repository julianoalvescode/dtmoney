import logo from "./../../assets/logo.svg";

import * as S from "./styles";

import * as I from "./types";

export function Header({ NewTransactionModalOpen }: I.Props) {
  return (
    <>
      <S.Container>
        <S.Content>
          <img src={logo} alt="dt money" />
          <button type="button" onClick={() => NewTransactionModalOpen(true)}>
            Nova transação
          </button>
        </S.Content>
      </S.Container>
    </>
  );
}
