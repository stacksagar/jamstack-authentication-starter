interface Props {
  children: React.ReactNode;
}

export default function RegularTableLayout({ children }: Props) {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-gray-800">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
