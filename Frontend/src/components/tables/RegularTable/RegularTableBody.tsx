import TableHead from "./TableHead";

interface Props {
  allCheckHandler?: React.ChangeEventHandler<HTMLInputElement>;
  headings: string[];
  children: React.ReactNode;
}

export default function RegularTableBody({
  headings,
  children,
  allCheckHandler,
}: Props) {
  return (
    <div className="overflow-hidden ">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <TableHead headings={headings} allCheckHandler={allCheckHandler} />
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {children}
        </tbody>
      </table>
    </div>
  );
}
