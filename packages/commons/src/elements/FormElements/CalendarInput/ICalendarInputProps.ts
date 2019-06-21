import { IDatePickerStrings } from 'office-ui-fabric-react';
export interface ICalendarInputProps {
  label?: string;
  onSelectDate?: (date: Date | null | undefined) => any;
  value?: any;
  strings?: IDatePickerStrings;
}
