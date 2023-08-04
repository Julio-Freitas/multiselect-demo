import { ReactNode } from "react";

interface MultiSelectProps {
  children: ReactNode;
}
export const Label = ({ children }: MultiSelectProps) => (
  <label>{children}</label>
);
