import { InputHTMLAttributes } from "react"

interface SearchProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder?: string
}
export const Search = ({...props}:SearchProps) => <input {...props} />
