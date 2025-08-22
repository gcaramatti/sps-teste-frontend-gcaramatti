import type { Control, FieldValues } from 'react-hook-form';
import type { MenuPlacement, SingleValue } from 'react-select';

export interface ISelectProps<T extends FieldValues> {
  isSearchable?: boolean;
  name: string;
  maxMenuHeight?: number;
  isClearable?: boolean;
  placeholder: string;
  label?: string;
  control?: Control<T>;
  disabled?: boolean;
  isMulti?: boolean;
  options: { label: string; value: string | number }[];
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;
  onBlur?: () => void;
  menuPlacement?: MenuPlacement | undefined;
  onChangeWithoutControl?: (
    e: SingleValue<{ label: string; value: string | number }>
  ) => void;
  extraClasses?: string;
}

export interface ISelectOption {
  value: string;
  label: string;
}