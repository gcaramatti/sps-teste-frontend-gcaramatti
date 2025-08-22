export function usePagination({
    total,
    pageSize,
    onChangePageSize,
  }) {
    const lastPage = pageSize ? Math.ceil(total / pageSize) : 1;
  
    const isAllPageSize = pageSize === 0;
  
    function handleChangePageSize(value) {
      if (value?.value === 'all') {
        onChangePageSize('all');
        return;
      }
  
      onChangePageSize(value?.value);
    }
  
    const pageSizeOptions = [
      { value: '3', label: '3' },
      {
        value: '6',
        label: '6',
      },
      {
        value: '10',
        label: '10',
      },
      {
        value: '20',
        label: '20',
      },
      { 
        value: '1000', 
        label: '1000' 
      },
    ];
  
    return {
      isAllPageSize,
      lastPage,
      handleChangePageSize,
      pageSizeOptions,
    };
  }