import { MultiSelectProps } from "./types";

export const MultiSelectRoot = ({ children, ...props }: MultiSelectProps) => (
  <div {...props}>{children}</div>
);
