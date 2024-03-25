import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";

export const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex min-h-screen w-full flex-col">{children}</div>
    </ErrorBoundary>
  );
};
