export type TableColumn = {
  header: string;
  accessor: string;
};

export interface ResponsiveTableProps<T> {
  columns: TableColumn[];
  data: T[];
  renderActions?: (row: T) => React.ReactNode;
};
