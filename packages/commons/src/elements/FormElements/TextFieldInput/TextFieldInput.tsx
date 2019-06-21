import { FieldProps } from 'formik';
import React, { Component } from 'react';
import { ErrorContainer } from '../../ContainerElements/ErrorContainer';
import { ITextFieldInputProps } from './ITextFieldInputProps';

// tslint:disable-next-line:no-submodule-imports
const { ResponsiveMode } = require('office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode');
const { TextField } = require('office-ui-fabric-react');

export default class TextFieldInput extends Component<ITextFieldInputProps & FieldProps, any> {
  public render() {
    return (
      <ErrorContainer {...this.props} elementClass='msTextField'>
        <TextField
          value={this.props.textFieldInputConfig.noDefaultValue ? undefined : this.props.field.value}
          label={this.props.textFieldInputConfig.label}
          multiline={this.props.textFieldInputConfig.multiline || false}
          rows={this.props.textFieldInputConfig.rows}
          onBeforeChange={(newValue: string) => {
            this.props.form.setFieldValue(this.props.field.name, newValue);
          }}
          onBlur={() => {
            this.props.form.setFieldTouched(this.props.field.name);
          }}
          responsiveMode={ResponsiveMode.large}
          required={this.props.textFieldInputConfig.required}
        />
      </ErrorContainer>
    );
  }
}
