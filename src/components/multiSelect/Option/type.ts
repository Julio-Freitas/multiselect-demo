import { ButtonHTMLAttributes, ReactNode } from "react";

export interface OptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}