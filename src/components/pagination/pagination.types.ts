import type { SingleValue } from 'react-select';

export type PaginationType = '10' | '20' | '50' | '100' | '1000';

export interface IPaginationProps {
  currentPage: number;
  total: number;
  onChangePage: (page: number) => void;
  pageSize?: number;
  onChangePageSize: (pageSize: string) => void;
}

export type UsePaginationParamsType = Pick<
  IPaginationProps,
  'total' | 'onChangePageSize' | 'pageSize'
>;

export interface IUsePagination {
  isAllPageSize: boolean;
  lastPage: number;
  handleChangePageSize: (
    value: SingleValue<{ label: string; value: string | number }>
  ) => void;
  pageSizeOptions: Array<{ value: string; label: string }>;
}