import { ChipProps } from "./type";
import styles from './Chip.module.scss';


export const Chip = ({ children, ...props }: ChipProps) => (
  <span
    className={styles['chip']}

    {...props}
  >
    {children}
  </span>
);
