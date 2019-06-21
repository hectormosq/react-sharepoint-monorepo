import { IDatePickerProps } from 'office-ui-fabric-react';
import * as React from 'react';
import { IDatePickerContainer } from './IDatePickerContainer';

const { DatePicker } = require('office-ui-fabric-react');

export function DatePickerContainer(props: IDatePickerContainer & IDatePickerProps) {

  return (
    <DatePicker
      strings={props.strings}
      placeholder='dd/mm/aaaa'
      label={props.label}
      ariaLabel={props.label}
      value={props.value}
      onSelectDate={props.onSelectDate}
    />
  );
}
