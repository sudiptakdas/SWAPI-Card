import React from 'react';

interface Props {
  currentPage: number;
  paginate: any;
}

const Pagination: React.FC<Props> = ({ currentPage, paginate }) => {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <nav aria-label='Page navigation example'>
      <ul className='inline-flex -space-x-px text-base h-10'>
        <li>
          <a
            href='#'
            onClick={() =>
              currentPage !== 1 && paginate((prev: number) => prev - 1)
            }
            className='flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Previous
          </a>
        </li>

        {pageNumbers?.map((number) => (
          <li key={number}>
            <a
              href='#'
              onClick={() => paginate(number)}
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === number ? 'bg-blue-200' : 'bg-white'
              }`}
            >
              {number}
            </a>
          </li>
        ))}

        <li>
          <a
            href='#'
            onClick={() => {
              currentPage !== 9 && paginate((prev: number) => prev + 1);
            }}
            className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
