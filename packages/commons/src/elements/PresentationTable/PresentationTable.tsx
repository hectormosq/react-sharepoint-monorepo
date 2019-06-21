import React from 'react';
import { IPresentationTableProps } from './IPresentationTableProps';
import { PresentationTableTypes } from './PresentationTable.model';
import styles from './PresentationTable.module.scss';

// tslint:disable-next-line:no-submodule-imports
const { List } = require('office-ui-fabric-react/lib/List');

function PresentationTable({ data }: IPresentationTableProps) {

  function _renderPresentation(item: any) {
    const representation = {
      [PresentationTableTypes.TEXT]: _renderText(item),
    };
    return representation[item.type] || representation[PresentationTableTypes.TEXT];
  }

  return (
    <div className={styles.presentationTable}>
      <List items={data} onRenderCell={_renderPresentation} />
    </div>
  );

  function _renderText(item: any) {
    return (
      <div>
        <div className={`${styles['ms-Grid-col']} ${styles['ms-sm6']} ${styles['ms-md3']}`}>{item.key}</div>
        <div className={`${styles['ms-Grid-col']} ${styles['ms-sm6']} ${styles['ms-md3']}`}>{item.value}</div>
      </div>
    );
  }
}

export default PresentationTable;
