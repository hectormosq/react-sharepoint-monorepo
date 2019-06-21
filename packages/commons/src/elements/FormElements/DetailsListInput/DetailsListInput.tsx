import { FieldProps } from 'formik';
import { findIndex } from 'lodash';
import { ISelection } from 'office-ui-fabric-react';
import * as React from 'react';
import { DetailsListContainer, IDetailsListContainer } from '../../ContainerElements/DetailsListContainer';
import { ErrorMessage } from '../ErrorMessage';

const { getIn } = require('formik');
const { Selection, SelectionMode } = require('office-ui-fabric-react');

export interface IDetailsListInput extends IDetailsListContainer {
  fieldHelper: FieldProps;
}

export class DetailsListInput extends React.Component<IDetailsListInput, {}> {
  private selection: ISelection;
  private selected: any[];

  constructor(props: any) {
    super(props);
    // Gets the current selected fields in the form to apply it to the DetailsList model
    const fieldValues = props.fieldHelper.form.values[props.fieldHelper.field.name];
    if (fieldValues) {
      this.selected = fieldValues.map((selected: any) => {
        const index = findIndex(props.items, (item) => JSON.stringify(item) === JSON.stringify(selected));
        if (index >= 0) {
          return index;
        }
        return false;
      });
    }

    this.selection = new Selection({
      onSelectionChanged: () => {
        props.fieldHelper.form.setFieldValue(props.fieldHelper.field.name, this.selection.getSelection());
      },
    });
    this._initializeSelectedItems();
  }

  public render() {
    const getError = this.props.fieldHelper.form.touched[this.props.fieldHelper.field.name]
      ? getIn(this.props.fieldHelper.form.errors, this.props.fieldHelper.field.name)
      : '';
    return (
      <div>
        {getError && <ErrorMessage errorMessage={getError} />}
        <DetailsListContainer
          items={this.props.items}
          columns={this.props.columns}
          columnProperties={this.props.columnProperties}
          selectionMode={SelectionMode.multiple}
          setKey='detailsListInput'
          selection={this.selection}
          selectionPreservedOnEmptyClick={true}
          onItemInvoked={this.props.onItemInvoked}
          enterModalSelectionOnTouch={true}
        />
      </div>
    );
  }

  private _initializeSelectedItems() {
    if (this.selected) {
      this.selection.setChangeEvents(false, true);
      this.selection.setItems(this.props.items, true);
      this.selected.map((selectedIndex) => {
        this.selection.setKeySelected(selectedIndex, true, false);
      });
      this.selection.setChangeEvents(true, true);
    }
  }
}

export default DetailsListInput;
