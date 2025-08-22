import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';

export function Select({
  control,
  options,
  name,
  maxMenuHeight,
  disabled = false,
  isMulti = false,
  errorMessage = '',
  placeholder,
  isSearchable = true,
  onBlur,
  defaultValue,
  label = '',
  isClearable,
  onChangeWithoutControl,
  menuPlacement = undefined,
  extraClasses,
}) {
  let selectedValue = {
    label: '',
    value: '',
  };

  return (
    <div className='flex items-start flex-col text-sm'>
      {label && <label>{label}</label>}
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <ReactSelect
              onBlur={onBlur}
              name={name}
              menuPosition="fixed"
              isMulti={isMulti}
              options={options}
              maxMenuHeight= {maxMenuHeight}
              isClearable = {isClearable}
              isDisabled={disabled}
              isSearchable={isSearchable}
              menuPlacement={menuPlacement}
              defaultInputValue={defaultValue}
              className={extraClasses ? extraClasses : 'w-full'}
              onChange={(newValue) => {
                if (isMulti && Array.isArray(newValue)) {
                  const selectedValues = newValue.map(
                    (option) => option.value
                  );
                  onChange(selectedValues);
                } else {
                  const typedNewValue = newValue;
                  onChange(typedNewValue?.value ? typedNewValue.value : '');
                }
              }}
              value={
                isMulti && options && value
                  ? options?.filter((option) => value.includes(option.value)) ??
                    null
                  : options?.find(
                      (option) => option.value === (value)
                    ) ?? null
              }
              classNamePrefix="react-select"
              placeholder={placeholder}
            />
          )}
        />
      ) : (
        <>
          {onChangeWithoutControl && (
            <ReactSelect
              placeholder={placeholder}
              classNamePrefix="react-select"
              options={options}
              menuPosition="fixed"
              isSearchable={false}
              menuPlacement={menuPlacement}
              defaultValue={defaultValue}
              className={extraClasses ? extraClasses : ''}
              onChange={(value) => {
                selectedValue = value;
                onChangeWithoutControl(selectedValue);
              }}
            />
          )}
        </>
      )}

      {errorMessage !== '' && <label className='text-destroy text-sm'>{errorMessage}</label>}
    </div>
  );
}