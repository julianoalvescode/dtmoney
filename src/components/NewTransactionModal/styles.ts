import styled, { css } from "styled-components";

import Modal from "react-modal";

import { darken } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &:placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ModalCustom = styled(Modal)`
  background-color: #fff;
`;

export const TransactionsTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

type RadioProps = {
  isActive?: boolean;
  activeColor: "green" | "red";
};

const colors = {
  green: "#33cc9533",
  red: "#e52e4d33",
};

export const RadioBox = styled.button<RadioProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: transparent;

  ${({ isActive, activeColor }) =>
    isActive &&
    css`
      background-color: ${colors[activeColor]};
    `}

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-in;

  &:hover {
    border-color: ${darken(0.2, "#d7d7d7")};
  }

  img {
    width: 28px;
    height: 28px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text);
  }
`;
