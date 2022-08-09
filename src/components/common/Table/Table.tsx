/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-case-declarations */
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Table as CTable,
  TableProps as CTableProps,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Box,
  Flex,
  IconButton,
  Text,
  Tooltip,
  Center,
  Spinner,
  StyleProps,
} from '@chakra-ui/react';
import { ReactNode, useMemo } from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { useTable, useSortBy, usePagination, Column, useExpanded, Row } from 'react-table';

export type TableP<T extends Record<string, any>> = {
  data?: T[];
  columns: readonly Column<T>[];
  manualPagination?: {
    onPageChange: (page: number) => number;
    pageIndex: number;
    totalPages: number;
  };
  isLoading?: boolean;
  $headerProps?: StyleProps;
  disablePagination?: boolean;
  additionalRow?: (props: { row: Row<T>; index: number }) => ReactNode;
} & CTableProps;

export const Table = <T extends Record<string, any>>({
  data = [],
  columns,
  manualPagination,
  isLoading,
  $headerProps,
  disablePagination,
  additionalRow,
  ...props
}: TableP<T>) => {
  const memorizedColumns = useMemo(() => columns, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns: memorizedColumns as any,
      data: data || [],
      manualPagination: !!manualPagination,
      ...(manualPagination
        ? {
            initialState: { pageIndex: manualPagination?.pageIndex },
            pageCount: manualPagination.totalPages,
            stateReducer: (nextState, action) => {
              switch (action.type) {
                case 'gotoPage':
                  const nextPage = manualPagination.onPageChange(nextState.pageIndex);
                  return { ...nextState, pageIndex: nextPage };
                default:
                  return nextState;
              }
            },
          }
        : {}),
    },
    useSortBy,
    useExpanded,
    usePagination,
  );

  return (
    <>
      <Box overflow="auto" h="calc(100% - 6rem)" bg="white" borderRadius="xl" pr="1rem" {...props}>
        <Box py={0} px={2}>
          {isLoading ? (
            <Center height="40vh">
              <Spinner color="primary.500" size="lg" />
            </Center>
          ) : (
            data && (
              <CTable {...getTableProps()}>
                <Thead position="sticky" top={0} zIndex={1} textTransform="uppercase">
                  {headerGroups.map((headerGroup, indexGroup) => (
                    <Tr {...headerGroup.getHeaderGroupProps()} key={indexGroup} bg="transparent">
                      {headerGroup.headers.map((column, indexHeader) => (
                        <Th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          color="white.400"
                          fontSize="1rem"
                          key={indexHeader}
                          px="1rem"
                          py="1.5rem"
                          fontWeight="500"
                          bg="secondary.500"
                          sx={{
                            ':first-child': {
                              'border-radius': '0.9rem 0rem 0rem 0.9rem',
                            },
                            ':last-child': {
                              borderRadius: '0rem 0.9rem 0.9rem 0rem',
                            },
                            ':last-child div': {
                              borderRight: 'none',
                            },
                          }}
                          {...$headerProps}
                        >
                          <Flex
                            py={2}
                            alignItems="center"
                            borderColor="white.400"
                            borderRight="solid 0.1rem"
                          >
                            {column.render('Header')}

                            <chakra.span pl="4" d="inline-block">
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <GoTriangleUp aria-label="sorted descending" />
                                ) : (
                                  <GoTriangleDown aria-label="sorted ascending" />
                                )
                              ) : null}
                            </chakra.span>
                          </Flex>
                        </Th>
                      ))}
                    </Tr>
                  ))}
                </Thead>
                <Tbody {...getTableBodyProps()} overflow="auto">
                  <Tr>
                    <Td colSpan={50} borderBottom="none">
                      &nbsp;
                    </Td>
                  </Tr>
                  {page?.map((row, index) => {
                    prepareRow(row);
                    return (
                      <>
                        <Tr {...row.getRowProps()} key={index}>
                          {row.cells.map((cell, index) => (
                            <Td px={5} py={3} {...cell.getCellProps()} key={index}>
                              {cell.render('Cell')}
                            </Td>
                          ))}
                        </Tr>

                        {row.isExpanded &&
                          additionalRow &&
                          additionalRow({ row: row as any, index })}
                      </>
                    );
                  })}
                </Tbody>
              </CTable>
            )
          )}
        </Box>
      </Box>
      {!disablePagination && (
        <Box background="white" py="1rem" h="6rem" borderRadius="md">
          <Flex justifyContent="flex-end" alignItems="center">
            <Flex alignItems="center">
              {data?.length > 0 && (
                <Flex alignItems="center" color="black.400">
                  <Text mr={1}>
                    <Text
                      fontWeight="bold"
                      fontSize="1.6rem"
                      opacity="0.4"
                      as="span"
                      lineHeight="4rem"
                    >
                      {`${pageIndex + 1} de ${pageCount || 1}`}
                    </Text>
                  </Text>
                </Flex>
              )}
              <Tooltip label="Página anterior" alignSelf="center">
                <IconButton
                  aria-label="Página anterior"
                  onClick={previousPage}
                  isDisabled={!canPreviousPage}
                  icon={<ChevronLeftIcon h="4rem" w="4rem" />}
                />
              </Tooltip>
              <Flex>
                <Tooltip label="Next Page">
                  <IconButton
                    aria-label="Próxima Página"
                    onClick={nextPage}
                    isDisabled={!canNextPage}
                    icon={<ChevronRightIcon h="4rem" w="4rem" />}
                  />
                </Tooltip>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};
