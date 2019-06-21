import { IColumn } from 'office-ui-fabric-react';
import * as React from 'react';
import styles from './DetailsListContainer.module.scss';
import { IDetailsListContainer } from './IDetailsListContainer';

const { buildColumns, DetailsList, DetailsListLayoutMode } = require('office-ui-fabric-react');

export function DetailsListContainer(props: IDetailsListContainer | any) {
  const _buildColumns = (columns: IColumn[]) => {
    return buildColumns(columns, true)
      .filter((column: IColumn) => props.columnProperties[column.key])
      .map((column: IColumn) => {
        column.minWidth = _setColumnMinWidth(props.columnProperties[column.key]);
        column.maxWidth = _setColumnMaxWidth(props.columnProperties[column.key]);
        column.name = _setColumnName(column.key);
        column.onRender = _onRenderItemColumn;
        return column;
      });
  };

  const _setColumnName = (columnKey: any) => {
    return props.columnProperties[columnKey].name || '';
  };

  const _onRenderItemColumn = (item: any, index: number, column: IColumn) => {
    const render = props.columnProperties[column.key].render;
    return render ? render(item, index) : item[column.key];
  };

  const _setColumnMinWidth = (columnProperty: any) => {
    return columnProperty.minWidth ? columnProperty.minWidth : 100;
  };

  const _setColumnMaxWidth = (columnProperty: any) => {
    return columnProperty.maxWidth ? columnProperty.maxWidth : 150;
  };

  return (
    <div className={styles.detailsListContainer}>
      <DetailsList
        enableShimmer={true}
        items={props.items}
        columns={_buildColumns(props.items)}
        selectionMode={props.selectionMode}
        setKey={props.setKey}
        selection={props.selection}
        selectionPreservedOnEmptyClick={true}
        onItemInvoked={props.onItemInvoked}
        enterModalSelectionOnTouch={true}
        layoutMode={DetailsListLayoutMode.fixedColumns}
      />
    </div>
  );
}
