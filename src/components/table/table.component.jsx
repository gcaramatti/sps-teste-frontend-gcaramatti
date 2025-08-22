import { useTable } from "./useTable";


export function ResponsiveTable({
  columns,
  data,
  renderActions,
}) {
  const hookData = useTable();
  return (
    <div className="overflow-x-auto w-full rounded-[5px]">
      <table className="min-w-full divide-y divide-text">
        <thead className="bg-secondary">
          <tr>
            {columns.map((col) => (
              <th
                key={col.header}
                className="px-4 py-2 text-center text-sm font-medium text-text"
              >
                {col.header}
              </th>
            ))}
            {renderActions && (
              <th className="px-4 py-2 text-center text-sm font-medium text-text">
                Ações
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-text">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-secondary text-center hover:bg-secondary"
            >
              {columns.map((col) => (
                <td
                  key={String(col.accessor)}
                  className="px-4 py-2 text-sm text-text"
                >
                  {String(hookData.getValueByPath(row, col.accessor) ?? "")}
                </td>
              ))}
              {renderActions && (
                <td className="px-4 py-2 text-sm text-text">
                  {renderActions(row)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
