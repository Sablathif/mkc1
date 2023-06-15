import { QueryClient } from '@tanstack/react-query';
export const SEARCH_PAGE = '/search';
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  },
});
