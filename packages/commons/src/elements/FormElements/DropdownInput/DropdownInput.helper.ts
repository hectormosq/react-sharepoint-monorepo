import { IDropdownOptions } from './IDropdownInputProps';

export function setDropdownOptions(sourceArray: any[], key: string, text: string): IDropdownOptions[] {
  const dropDownOptions: IDropdownOptions[] = [];
  sourceArray.map((item) => {
    dropDownOptions.push({
      key: item[key],
      text: item[text],
    });
  });
  return dropDownOptions;
}
