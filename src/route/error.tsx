import { useRouteError } from "react-router-dom";
import { ErrorResponsePage } from "./type";
export default function ErrorBoundary() {
  const error = useRouteError() as ErrorResponsePage;
  console.dir(error.message);
  return (
    <div id="error-page">
      <h1>Hey, Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
