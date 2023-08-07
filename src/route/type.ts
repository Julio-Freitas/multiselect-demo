import { ReactNode } from "react";

export interface RoutesProps {
  children: ReactNode;
}
export interface ErrorResponsePage {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: Record<string, string>;
  message: string
}
