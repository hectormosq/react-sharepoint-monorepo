import { FieldProps } from 'formik';
import React, { Component } from 'react';
import { ErrorContainer } from '../../ContainerElements/ErrorContainer';
import { ComboBoxCaretStyles, ComboBoxInputStyles } from './ComboBoxInput.styles';
import { IComboBoxInputProps } from './IComboBoxInputProps';

const { ComboBox } = require('office-ui-fabric-react');

export default class ComboBoxInput extends Component<IComboBoxInputProps & FieldProps | any, any> {
  public render() {
    return (
      <ErrorContainer {...this.props} elementClass='msComboBox'>
        <ComboBox
          text={this.props.field.value}
          label={this.props.comboBoxConfig.label}
          id={this.props.comboBoxConfig.id}
          autoComplete='on'
          options={this.props.comboBoxConfig.options}
          // tslint:disable-next-line:jsx-no-multiline-js
          onChanged={(item: any) => {
            if (item) {
              this.props.form.setFieldValue(this.props.field.name, item.key);
            } else {
              this.props.form.setFieldError(this.props.field.name, 'Location not found');
            }
            this.props.form.setFieldTouched(this.props.field.name, true, false);
          }}
          styles={ComboBoxInputStyles}
          caretDownButtonStyles={ComboBoxCaretStyles}
          buttonIconProps={this.props.comboBoxConfig.icon}
          useComboBoxAsMenuWidth={true}
        />
      </ErrorContainer>
    );
  }
}
