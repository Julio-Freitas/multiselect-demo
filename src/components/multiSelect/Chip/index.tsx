import { ChipProps } from "./type";

export const Chip = ({ children, ...props }: ChipProps) => (
  <span {...props}
  >
    {children}
  </span>
);
