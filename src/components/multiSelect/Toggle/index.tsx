import { ReactNode } from "react";

interface ToggleProps {
  children: ReactNode;
  open?: boolean;
}

export const Toggle = ({ open, children }: ToggleProps) => {
  return <div>{open && children}</div>;
};
