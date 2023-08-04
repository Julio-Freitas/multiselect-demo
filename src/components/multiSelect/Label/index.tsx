import { LabelProps } from "./types";
import styles from './Label.module.scss';

export const Label = ({ children }: LabelProps) => (
  <label className={styles['label']}>{children}</label>
);
