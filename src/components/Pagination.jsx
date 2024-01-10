import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
       pageNumbers.push(i);
    }
  return (
    <>
    <nav>
      <ul className="flex justify-center space-x-2 mt-4 mb-10">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}
             className="bg-gray-300 hover:bg-red-600 hover:text-white px-5 py-3 rounded">{number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    </>
  )
}

export default Pagination