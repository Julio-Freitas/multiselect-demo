import { LabelProps } from "./types";

export const Label = ({ children, ...props}: LabelProps) => (
  <label {...props}>{children}</label>
);
