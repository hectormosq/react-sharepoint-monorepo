import { FieldProps } from 'formik';
import React, { Component } from 'react';
import { ErrorContainer } from '../../ContainerElements/ErrorContainer';
import styles from './DropdownInput.module.scss';
import { IDropdownInputProps } from './IDropdownInputProps';

// tslint:disable-next-line:no-submodule-imports
const { ResponsiveMode } = require('office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode');
const { Dropdown } = require('office-ui-fabric-react');

export class DropdownInput extends Component<IDropdownInputProps & FieldProps, any> {
  public render() {
    return (
      <div className={styles.dropDownInputContainer}>
        <ErrorContainer {...this.props} elementClass='msDropDown'>
          <Dropdown
            label={this.props.dropdownConfig.label}
            selectedKey={this.props.field.value}
            placeHolder={this.props.dropdownConfig.placeholder ? this.props.dropdownConfig.placeholder : 'Seleccione'}
            options={this.props.dropdownConfig.selections}
            responsiveMode={ResponsiveMode.large}
            onChanged={(item: any) => this.props.form.setFieldValue(this.props.field.name, item.key)}
          />
        </ErrorContainer>
      </div>
    );
  }
}
