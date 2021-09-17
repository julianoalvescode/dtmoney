import * as S from "./styles";

import incomeImg from "./../../assets/entradas.svg";
import outcomeImg from "./../../assets/saidas.svg";
import totalImg from "./../../assets/total.svg";

import { currencyFormat } from "./../../utils/currencyFormat";

import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { data } = useTransactions();

  const summary = data?.reduce(
    (acc, item) => {
      if (item.type === "deposit") {
        acc.deposits += item.amount;
        acc.total += item.amount;
      } else {
        acc.withdraws += item.amount;
        acc.total -= item.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <>
      <S.Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>{currencyFormat(summary?.deposits as number)}</strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={outcomeImg} alt="Saídas" />
          </header>
          <strong>- {currencyFormat(summary?.withdraws as number)}</strong>
        </div>
        <div className="hightlight-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>{currencyFormat(summary?.total as number)}</strong>
        </div>
      </S.Container>
    </>
  );
}
