import { usePagination } from './usePagination';
import { Select } from '../input/select/select.component';

export function Pagination({
  currentPage,
  total,
  onChangePage,
  pageSize,
  onChangePageSize,
}) {
  const { lastPage, isAllPageSize, pageSizeOptions } = usePagination({
    onChangePageSize,
    pageSize,
    total,
  });

  return (
    <div className='mt-5 flex items-center justify-between text-[0.875rem] text-alternativeFont w-full max-[900px]:mb-5'>
      <div className='flex items-center gap-4 text-text'>
        <div>
          <p className='text-sm'>Por página</p>
        </div>

        <div className='w-fit'>
          <Select
            name="pageSize"
            options={pageSizeOptions}
            defaultValue={pageSizeOptions.find((value) => parseInt(value.value) === pageSize)
              ?.label}
            placeholder="3"
            onChangeWithoutControl={(data) => onChangePageSize(data.value)} 
            control={undefined} 
            maxMenuHeight={undefined} 
            onBlur={undefined} 
            isClearable={undefined} 
            extraClasses={undefined}          
          />
        </div>
      </div>

      {total && (
        <span className='flex items-center ml-[10px]'>
          {!isAllPageSize && currentPage !== 1 && (
            <>
              {currentPage - 2 > 0 && (
                <button className='h-16 w-full text-[20px] bg-white text-text px-1 py-3 font-bold border-0 rounded-xl flex items-center justify-center gap-2 transition-opacity duration-300 hover:opacity-60'
                  onClick={() => {
                    onChangePage(1);
                  }}
                >
                  1
                </button>
              )}

              {currentPage - 2 > 1 && (
                <button
                    className='h-16 w-full text-[20px] bg-white text-text px-1 py-3 font-bold border-0 rounded-xl flex items-center justify-center gap-2 transition-opacity duration-300 hover:opacity-60'
                >
                  ...
                </button>
              )}

              <button
                className='h-16 w-full text-[20px] bg-white text-text px-1 py-3 font-bold border-0 rounded-xl flex items-center justify-center gap-2 transition-opacity duration-300 hover:opacity-60'
                onClick={() => {
                  onChangePage(currentPage - 1);
                }}
              >
                {`${currentPage - 1}`}
              </button>
            </>
          )}

          <p className='px-[5px] text-primary text-[20px] font-bold'>{isAllPageSize ? 1 : currentPage}</p>

          {!isAllPageSize && currentPage !== lastPage && (
            <>
              <button
                className='h-16 w-full text-[20px] bg-white text-text px-1 py-3 font-bold border-0 rounded-xl flex items-center justify-center gap-2 transition-opacity duration-300 hover:opacity-60'
                onClick={() => {
                  onChangePage(currentPage + 1);
                }}
              >
                {`${currentPage + 1}`}
              </button>

              {currentPage + 1 !== lastPage && (
                <>
                  {currentPage + 2 !== lastPage && (
                    <button
                      className='h-16 w-full text-[20px] bg-white text-text px-1 py-3 font-bold border-0 rounded-xl flex items-center justify-center gap-2 transition-opacity duration-300 hover:opacity-60'
                    >
                      ...
                    </button>
                  )}

                  <button
                    className='h-16 w-full text-[20px] bg-white text-text px-1 py-3 font-bold border-0 rounded-xl flex items-center justify-center gap-2 transition-opacity duration-300 hover:opacity-60'
                    onClick={() => {
                      onChangePage(lastPage);
                    }}
                  >
                    {`${lastPage}`}
                  </button>
                </>
              )}
            </>
          )}
        </span>
      )}
    </div>
  );
}