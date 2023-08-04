import { ReactNode } from "react";

interface MultiSelectProps {
    children: ReactNode
}
export const MultiSelectRoot = ({ children }: MultiSelectProps) => (
  <div>{children}</div>
);
