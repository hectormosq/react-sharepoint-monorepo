import { IComboBoxOption } from './IComboBoxInputProps';

export function setComboBoxOptions(sourceArray: any[], key: string, text: string): IComboBoxOption[]{
  let comboBox: IComboBoxOption[] = [];
  sourceArray.map((item) => {
    comboBox.push({
      key: item[key],
      text: item[text]
    })
  });
  return comboBox;
}