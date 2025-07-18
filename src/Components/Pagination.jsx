import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  
  if (!totalPages || totalPages <= 1) return null;
  
  return (
    <div className='fixed bottom-0 inset-x-0 bg-white py-3 sm:py-4 border-t border-gray-200 shadow-lg z-10'>
      <div className='flex items-center justify-between max-w-4xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center gap-x-2 sm:gap-x-3'>
          {
            page > 1 &&
            (<button 
              className='px-3 sm:px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium text-sm sm:text-base' 
              onClick={() => handlePageChange(page - 1)}
            >
              <span className="hidden sm:inline">← Previous</span>
              <span className="sm:hidden">← Prev</span>
            </button>)
          }
          {
            page < totalPages &&
            (<button 
              className='px-3 sm:px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium text-sm sm:text-base' 
              onClick={() => handlePageChange(page + 1)}
            >
              <span className="hidden sm:inline">Next →</span>
              <span className="sm:hidden">Next →</span>
            </button>)
          }
        </div>
        <p className='text-xs sm:text-sm font-semibold text-gray-600'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination;