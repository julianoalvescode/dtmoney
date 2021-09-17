import { useState } from "react";

import { useForm } from "react-hook-form";

import * as I from "./types";
import * as S from "./styles";

import incomeImg from "./../../assets/entradas.svg";
import closeImg from "./../../assets/close.svg";
import outcomeImg from "./../../assets/saidas.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function ModalCustom({ children, onClose, ...rest }: I.PropsModal) {
  const { register, handleSubmit, reset } = useForm();
  const [type, setType] = useState("deposit");

  const { createTransaction } = useTransactions();

  const handleCreateNewTransaction = async (params: I.Data) => {
    const data = {
      amount: parseFloat(params.amount),
      title: params.title,
      type,
      category: params.category,
      createdAt: new Date(),
    };

    await createTransaction(data);
    reset();
    onClose(false);
  };

  return (
    <>
      <S.ModalCustom
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
        {...rest}
      >
        <S.Container onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <button
            className="react-modal-close"
            type="button"
            onClick={() => onClose(false)}
          >
            <img src={closeImg} alt="Fechar Modal" />
          </button>

          <h2>Cadastrar Transação</h2>
          <input
            {...register("title", { required: true })}
            placeholder="Titulo"
          />
          <input
            {...register("amount", { required: true })}
            type="number"
            placeholder="Valor"
          />
          <S.TransactionsTypeContainer>
            <S.RadioBox
              isActive={type === "deposit"}
              onClick={() => setType("deposit")}
              type="button"
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </S.RadioBox>
            <S.RadioBox
              isActive={type === "withdraw"}
              onClick={() => setType("withdraw")}
              type="button"
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </S.RadioBox>
          </S.TransactionsTypeContainer>
          <input
            {...register("category", { required: true })}
            placeholder="Categoria"
          />

          <button type="submit">Cadastrar</button>
        </S.Container>
      </S.ModalCustom>
    </>
  );
}
