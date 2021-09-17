import React from "react";
import { Props } from "react-modal";

export interface PropsModal extends Props {
  children?: React.ReactChild | React.ReactChildren;
  onClose: (args: boolean) => void;
}

export type Data = {
  amount: string;
  title: string;
  category: string;
};
