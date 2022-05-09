import { useCallback, useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { UseTableProps, UseTableReturn } from './types';

export const useTableInstance = <T,>({
  take,
  queryConfig,
  totalItemsByServer,
}: UseTableProps): UseTableReturn<T> => {
  const [filters, setFilters] = useState<Record<string, any>>({ take: take, skip: 0 });
  const page = filters.skip / filters.take;
  const [enableRequest, setEnableRequest] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const query = useQuery<T>(
    [queryConfig.key, filters],
    () => queryConfig.queryFn({ queryKey: [queryConfig.key, filters], params: filters }),
    { enabled: enableRequest, cacheTime: 0 },
  );

  useEffect(() => {
    if (query.data || !enableRequest) {
      const parseData = query.data as any;
      const totalItems = enableRequest ? parseData?.totalItems : totalItemsByServer;
      setTotalPages(Math.ceil((totalItems || 0) / filters.take));
    }
  }, [filters.take, query.data, totalItemsByServer, enableRequest]);

  const onPageChange = useCallback(
    (nextPage: number) => {
      if (nextPage !== page) {
        setFilters((prev) => ({ ...prev, skip: nextPage * filters.take }));
        setEnableRequest(true);
      }
      return nextPage;
    },
    [filters.take, page],
  );
  return {
    pagination: {
      pageIndex: page,
      onPageChange,
      totalPages: totalPages,
    },
    query,
    setFilters: (filters) => setFilters({ ...filters, skip: 0, take }),
    setEnableRequest,
    enableRequest,
  };
};
