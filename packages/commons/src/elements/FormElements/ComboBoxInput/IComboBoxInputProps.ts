export interface IComboBoxOption{
  key: string;
  text: string;
}
export interface IComboBoxInputProps {
  comboBoxConfig: {
    id: string;
    label?: string;
    icon?: { iconName: string };
    placeholder?: string;
    defaultSelectedKey?: string;
    options: IComboBoxOption[];
  };
}
