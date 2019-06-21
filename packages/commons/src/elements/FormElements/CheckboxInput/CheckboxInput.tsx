import { FieldProps } from 'formik';
import React, { Component } from 'react';
import { ICheckboxInputProps } from './ICheckboxInputProps';

const { Checkbox } = require('office-ui-fabric-react');

export default class CheckboxInput extends Component<ICheckboxInputProps & FieldProps | any, any> {

  public render() {
    return (
      <div>
        <Checkbox
          label={this.props.checkboxConfig.label}
          checked={this.props.field.value}
          onChange={this.onChangeHandler}
        />
      </div>
    );
  }

  private onChangeHandler = (ev: React.ChangeEvent<HTMLSelectElement>, isChecked: boolean) => {
    this.props.form.setFieldValue(this.props.field.name, isChecked);
  }
}
