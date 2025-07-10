'use client';

import { TinaMarkdown } from 'tinacms/dist/rich-text';

const CellContent = ({ cell }: { cell: any }) => {
  switch (cell.__typename) {
    case 'PageBlocksTable_blockRowsCellsText_cell':
      return <p className="text-sm font-medium">{cell?.text}</p>;

    case 'PageBlocksTable_blockRowsCellsRich_text_cell':
      return (
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <TinaMarkdown content={cell.body} />
        </div>
      );

    default:
      return null;
  }
};

export const TableBlock = ({
  tableColumns,
  rows,
}: {
  tableColumns: string[];
  rows: { cells: any[] }[];
}) => {
  return (
    <div className="overflow-auto my-8">
      <table className="w-full table-auto border border-black rounded-md shadow-sm text-center text-sm">
        <thead className="">
          <tr>
            {tableColumns && tableColumns?.map((col, idx) => (
              <th key={idx} className="p-4 border border-b-2 border-black  font-bold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows && rows?.map((row, rowIdx) => (
            <tr key={rowIdx} className="">
              {row.cells.map((cell, cellIdx) => (
                <td key={cellIdx} className="p-4 border border-black align-top">
                  <CellContent cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
