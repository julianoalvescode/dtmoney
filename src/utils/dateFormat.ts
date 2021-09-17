// eslint-disable-next-line import/no-anonymous-default-export
export const dateFormat = (arg: Date | string) => {
  if (arg) {
    return new Intl.DateTimeFormat("pt-BR").format(new Date(arg));
  } else {
    return "";
  }
};
