import { OptionProps } from "./type";
import styles from './Option.module.scss';

export const Option = ({ children, ...props }: OptionProps) => (
  <button
    type="button"
    className={styles['option']}
    {...props}
  >
    {children}
  </button>
);
