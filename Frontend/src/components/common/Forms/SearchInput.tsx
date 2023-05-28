import FIcons, { Icon } from "../Icons/FIcons";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput({ ...props }: Props) {
  return (
    <div className="relative max-w-xs">
      <label htmlFor="hs-table-with-pagination-search" className="sr-only">
        Search
      </label>
      <input
        {...props}
        type="text"
        name="hs-table-with-pagination-search"
        className="p-3 pl-10 border focus:ring-1 focus:outline-none block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
        <Icon I={FIcons.faSearch} />
      </div>
    </div>
  );
}
