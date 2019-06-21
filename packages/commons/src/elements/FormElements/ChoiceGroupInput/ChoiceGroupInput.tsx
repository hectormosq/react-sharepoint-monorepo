import { FieldProps } from 'formik';
import { IChoiceGroupOption } from 'office-ui-fabric-react';
import React, { Component } from 'react';
import styles from './ChoiceGroupInput.module.scss';
import { IChoiceGroupProps } from './IChoiceGroupProps';

const { ChoiceGroup } = require('office-ui-fabric-react');

export default class ChoiceGroupInput extends Component<IChoiceGroupProps & FieldProps, any> {
  public render() {
    return (
      <ChoiceGroup
        selectedKey={this.props.field.value}
        className={styles.autoEmit__choiceField}
        options={this.props.choiceGroupConfig.options}
        onChange={(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption) => {
          this.props.form.setFieldTouched(this.props.field.name);
          this.props.form.setFieldValue(this.props.field.name, option.key);
        }}
        required={this.props.choiceGroupConfig.required}
      />
    );
  }
}
