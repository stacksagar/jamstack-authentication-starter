interface Props {
  children?: React.ReactNode;
}

export default function RegularTableFooter({}: Props) {
  return (
    <div className="py-1 px-4">
      <nav className="flex items-center space-x-2">
        <a
          className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
          href="#"
        >
          <span aria-hidden="true">«</span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
          href="#"
          aria-current="page"
        >
          1
        </a>
        <a
          className="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
          href="#"
        >
          2
        </a>
        <a
          className="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
          href="#"
        >
          3
        </a>
        <a
          className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
          href="#"
        >
          <span className="sr-only">Next</span>
          <span aria-hidden="true">»</span>
        </a>
      </nav>
    </div>
  );
}
