import { SearchProps } from "./types";
import styles from './Search.module.scss';
export const Search = ({ ...props }: SearchProps) => <input {...props} className={styles['search']} />
