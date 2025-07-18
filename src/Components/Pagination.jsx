import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';


const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div className='fixed bottom-0 inset-x-0 bg-white py-4 border-t border-gray-200 shadow-lg'>
      <div className='flex items-center justify-between max-w-4xl mx-auto px-4'>
        <div className='flex items-center gap-x-3'>
          {
            page > 1 &&
            (<button 
              className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium' 
              onClick={() => handlePageChange(page - 1)}
            >
              ← Previous
            </button>)
          }
          {
            page < totalPages &&
            (<button 
              className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium' 
              onClick={() => handlePageChange(page + 1)}
            >
              Next →
            </button>)
          }
        </div>
        <p className='text-sm font-semibold text-gray-600'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination;