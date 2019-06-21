import { FieldProps } from 'formik';
import React, { Component } from 'react';
import styles from './FileInput.module.scss';
import { IFileInputProps } from './IFileInputProps';

const { Icon } = require('office-ui-fabric-react');

export default class FileInput extends Component<IFileInputProps & FieldProps, any> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      message: this.props.fileInputConfig.placeholder || 'Seleccione un archivo',
    };
  }

  public render() {
    // const fileType = this.props.fileInputConfig.fileType || "*"
    const iconPlaceholder = this.props.fileInputConfig.iconPlaceholder || 'FileCode';

    return (
      <div className={styles.fileInput__fieldGroup}>
        <input
          type='file'
          id='img_file'
          className={styles.fileInput__input}
          onChange={(e) => this.handleChange(e.target.files)}
        />
        <label
          htmlFor='img_file'
          className={`${styles.fileInput__input_placeholderText}`}
        >
          {this.state.message}
        </label>
        <span className={`${styles.fileInput__input_placeholderIcon}`}>
          <Icon iconName={iconPlaceholder} className='ms-IconFile' />
        </span>
      </div>
    );
  }

  private handleChange(selectorFiles: FileList | null) {
    if (selectorFiles) {
      const file = selectorFiles[0];
      this.setState({ message: file.name });
      this.props.form.setFieldValue(this.props.field.name, file);
    }
  }
}
