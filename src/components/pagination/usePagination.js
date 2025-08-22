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
      { value: '1', label: '1' },
      {
        value: '3',
        label: '3',
      },
      {
        value: '5',
        label: '5',
      },
      {
        value: '10',
        label: '10',
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