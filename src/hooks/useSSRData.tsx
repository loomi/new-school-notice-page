import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
export type UseSSRDataProps<T> = {
  ssrData: T;
  queryData?: T;
  onQueryChange?: (filters: Record<string, any>) => void;
};

export type UseSSRDataPayload<T> = {
  data: T;
  setQueryFilters: (newFilters: Record<string, any>) => void;
};
export const useSSRData = <T,>({
  ssrData,
  queryData,
  onQueryChange,
}: UseSSRDataProps<T>): UseSSRDataPayload<T> => {
  const [data, setData] = useState<T>(ssrData);
  const { query: filters, replace, route } = useRouter();

  useEffect(() => {
    if (onQueryChange) {
      onQueryChange(filters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    if (queryData) {
      setData(queryData);
    }
  }, [queryData]);

  useEffect(() => {
    setData(ssrData);
  }, [ssrData]);

  const setQueryFilters = useCallback(
    (newFilters: Record<string, any>) => {
      replace({ query: { ...filters, ...newFilters }, pathname: route });
    },
    [filters, replace, route],
  );

  return { setQueryFilters, data };
};
