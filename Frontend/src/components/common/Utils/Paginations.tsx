import classNames from "classnames";
import { useState } from "react";
import Icons, { Icon } from "../Icons/Icons";

const Btn = ({ children, page, currentPage, ...props }: any) => (
  <button
    {...props}
    className={classNames(
      "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm cursor-pointer transform transition-all hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
      {
        "bg-blue-600 text-white": currentPage === page,
        "scale-120 sm:text-lg": currentPage === page,
        "bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:dark:bg-blue-500":
          currentPage !== page,
      }
    )}
  >
    {children}
  </button>
);

const Pagination = ({
  currentPage,
  totalPages,
  changePagination,
  className,
  defaultShowPerPage,
}: {
  currentPage: any;
  totalPages: any;
  changePagination: any;
  className?: string;
  defaultShowPerPage?: number;
}) => {
  const isFirstPage = currentPage === 1 || 0;
  const isLastPage = currentPage === totalPages || currentPage > totalPages;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const [showPerPage, setShowPerPage] = useState(defaultShowPerPage || 10);

  function handleShowPerPage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    changePagination(currentPage, showPerPage);
  }

  const handlePageChange = (page: any) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    changePagination(page, showPerPage);
  };

  return (
    <div
      className={`p-4 bg-white dark:bg-gray-800 flex flex-col-reverse sm:flex-row gap-2 items-center justify-between ${className}`}
    >
      <form
        onSubmit={handleShowPerPage}
        className="flex flex-col items-center gap-0.5 text-sm"
      >
        <span>Show Per Page:</span>
        <div className="w-24 h-8 flex items-center">
          <input
            title="Show Per Page"
            className="h-full w-full rounded-sm bg-gray-100 dark:bg-gray-800 p-1"
            type="number"
            value={showPerPage}
            onChange={(e) =>
              setShowPerPage(
                Number(e.target.value) < 1 ? 1 : Number(e.target.value)
              )
            }
          />
          <button
            className="h-full w-10 focus:ring-1 hover:bg-blue-500 bg-blue-600 text-white shadow flex justify-center items-center text-lg"
            title="Submit"
          >
            <Icon I={Icons.faCheck} />
          </button>
        </div>
      </form>

      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-1">
        <Btn
          onClick={() => handlePageChange(currentPage - 2)}
          disabled={isFirstPage || currentPage < 3}
          page={null}
          currentPage={currentPage}
        >
          <Icon I={Icons.faChevronLeft} />
          <Icon I={Icons.faChevronLeft} />
        </Btn>

        <Btn
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage}
          page={null}
          currentPage={currentPage}
        >
          <Icon I={Icons.faChevronLeft} />
        </Btn>

        {currentPage > 20 ? (
          <Btn
            onClick={() => handlePageChange(1)}
            page={1}
            currentPage={currentPage}
          >
            1
          </Btn>
        ) : null}

        {pages
          .filter((_, i) => i < currentPage + 2)
          .filter((_, i) => i > currentPage - 2)
          .map((page) =>
            page === totalPages ? null : (
              <Btn
                key={page}
                onClick={() => handlePageChange(page)}
                page={page}
                currentPage={currentPage}
              >
                {page}
              </Btn>
            )
          )}

        <Btn
          onClick={() => handlePageChange(totalPages)}
          page={totalPages}
          currentPage={currentPage}
        >
          {totalPages}
        </Btn>

        {/* next 1 */}
        <Btn
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLastPage}
          page={null}
          currentPage={currentPage}
        >
          <Icon I={Icons.faChevronRight} />
        </Btn>

        {/* next 2 */}
        <Btn
          onClick={() => handlePageChange(currentPage + 2)}
          disabled={isLastPage || currentPage === totalPages - 1}
          page={null}
          currentPage={currentPage}
        >
          <Icon I={Icons.faChevronRight} />
          <Icon I={Icons.faChevronRight} />
        </Btn>
      </div>
    </div>
  );
};

export default Pagination;
