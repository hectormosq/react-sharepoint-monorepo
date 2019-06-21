export interface IChoiceGroupProps {
  choiceGroupConfig: {
    required: boolean;
    options: {
      key: string;
      text: string;
    }[];
  };
}
