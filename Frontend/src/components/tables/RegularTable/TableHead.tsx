import { uid } from "uid";
import Checkbox from "../../common/Forms/Checkbox";

interface Props {
  allCheckHandler: any;
  headings: string[];
}

const TableHead = ({ allCheckHandler, headings }: Props) => {
  return (
    <thead className="bg-gray-50 dark:bg-gray-700">
      <tr>
        {allCheckHandler ? (
          <th scope="col" className="p-4">
            <div className="flex items-center justify-center">
              <Checkbox onChange={allCheckHandler} />
            </div>
          </th>
        ) : null}

        {headings.map((heading) => (
          <th
            key={heading + uid()}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
