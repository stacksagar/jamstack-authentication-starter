import { uid } from "uid";

interface Props {
  checkbox?: React.ReactNode;
  rows: string[];
}
export default function TableRow({ checkbox, rows }: Props) {
  return (
    <tr>
      {checkbox ? (
        <td className="p-4">
          <div className="flex items-center justify-center">{checkbox}</div>
        </td>
      ) : null}

      {rows.map((row) => (
        <td
          key={row + uid()}
          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          {row}
        </td>
      ))}
    </tr>
  );
}
