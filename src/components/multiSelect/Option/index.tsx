import { OptionProps } from "./type";

export const Option = ({ children, ...props }: OptionProps) => (
  <button
    type="button"
    {...props}
  >
    {children}
  </button>
);
