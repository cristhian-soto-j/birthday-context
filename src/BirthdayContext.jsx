import { QueryClient, QueryClientProvider } from "react-query";
import { NewsList } from "./components/NewsList";
import { ReactQueryDevtools } from "react-query/devtools";
import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient();

export const BirthdayContext = ({ month, year }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsList month={month} year={year} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
