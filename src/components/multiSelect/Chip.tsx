import { ButtonHTMLAttributes, ReactNode } from "react";

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Chip = ({ children, ...props }: ChipProps) => (
  <button
    type="button"
    style={{ display: "flex", marginTop: "10px" }}
    {...props}
  >
    {children}
  </button>
);
