export interface IMultiSelectFieldInputProps {
  multiSelectInputConfig: {
    label?: string;
    placeholder?: string;
    selectedKeys?: string[];
    selections: {
      key: string;
      text: string;
      disabled?: boolean;
      itemType?: number;
    }[];
  };
}
