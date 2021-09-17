// eslint-disable-next-line import/no-anonymous-default-export
export const currencyFormat = (arg: number) => {
  if (arg) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(arg);
  } else {
    return "";
  }
};
