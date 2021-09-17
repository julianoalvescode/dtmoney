import * as S from "./styles";

import { currencyFormat, dateFormat } from "./../../utils";

import { useTransactions } from "../../hooks/useTransactions";

export function TransactionTable() {
  const { data } = useTransactions();

  return (
    <>
      <S.Container>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i) => (
              <tr key={i.id}>
                <td>{i.title}</td>
                <td className={i.type}>
                  {i.type === "withdraw" && "- "}
                  {currencyFormat(i.amount)}
                </td>
                <td>{i.category}</td>
                <td>{dateFormat(new Date(i.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.Container>
    </>
  );
}
