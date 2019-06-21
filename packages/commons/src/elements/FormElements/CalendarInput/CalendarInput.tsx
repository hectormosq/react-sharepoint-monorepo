import { FieldProps } from 'formik';
import React, { Component } from 'react';
import { DatePickerContainer, ErrorContainer } from '../../ContainerElements';
import styles from './CalendarInput.module.scss';
import { ICalendarInputProps } from './ICalendarInputProps';

const { DatePicker } = require('office-ui-fabric-react');
export default class CalendarInput extends Component<ICalendarInputProps & FieldProps> {
  constructor(props: ICalendarInputProps & FieldProps) {
    super(props);
    this.onSelectDateHandler = this.onSelectDateHandler.bind(this);
  }
  public render() {
    return (
      <div className={styles.calendarInputContainer}>
        <ErrorContainer {...this.props} elementClass='msDatePicker'>
          <DatePickerContainer
            placeholder='dd/mm/aaaa'
            label={this.props.label}
            ariaLabel={this.props.label}
            value={this.props.field.value}
            strings={this.props.strings}
            // tslint:disable-next-line:jsx-no-multiline-js
            onSelectDate={this.onSelectDateHandler}
          />
        </ErrorContainer>
      </div>
    );
  }
  private onSelectDateHandler(date: Date | null | undefined) {
    this.props.form.setFieldValue(this.props.field!.name, date);
    this.props.form.setFieldTouched(this.props.field!.name, true, false);
  }
}
