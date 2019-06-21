export interface IDropdownOptions {
  key: string;
  text: string;
  disabled?: boolean;
}
export interface IDropdownInputProps {
  dropdownConfig: {
    label?: string;
    placeholder?: string;
    selectedKey?: string;
    selections: IDropdownOptions[];
  };
}
