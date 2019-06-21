import { FieldProps } from 'formik';
import React, { Component } from 'react';
import { IMultiSelectFieldInputProps } from './IMultiSelectFieldInputProps';

// tslint:disable-next-line:no-submodule-imports
const { ResponsiveMode } = require('office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode');
const { Dropdown } = require('office-ui-fabric-react');

export default class MultiSelectFieldInput extends Component<IMultiSelectFieldInputProps & FieldProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedItems: [],
    };
  }

  public render() {
    return (
      <div>
        <Dropdown
          placeholder={this.props.multiSelectInputConfig.placeholder ?
            this.props.multiSelectInputConfig.placeholder : 'Seleccione'}
          label={this.props.multiSelectInputConfig.label}
          selectedKeys={this.props.field.value}
          onFocus={() => this.props.form.setFieldValue(this.props.field.name, this.state.selectedItems)}
          onChanged={this.onChangeMultiSelect}
          multiSelect={true}
          responsiveMode={ResponsiveMode.large}
          options={this.props.multiSelectInputConfig.selections}
        />
      </div>
    );
  }

  private onChangeMultiSelect = (item: any): void => {
    const updatedSelectedItem = this.state.selectedItems ? this.state.selectedItems.slice() : [];
    if (item.selected) {
      updatedSelectedItem.push(item.key);
    } else {
      const currIndex = updatedSelectedItem.indexOf(item.key);
      if (currIndex > -1) {
        updatedSelectedItem.splice(currIndex, 1);
      }
    }
    this.setState({
      selectedItems: updatedSelectedItem,
    });
  }

}
