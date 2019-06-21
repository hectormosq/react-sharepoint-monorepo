// tslint:disable-next-line:no-submodule-imports
import 'office-ui-fabric-react/dist/sass/Fabric.scss';
import React from 'react';
import { ITableContainerProps, IthProps } from './ITableContainerProps';
import styles from './TableContainer.module.scss';

function TableContainer({ thProps, bodyComponent }: ITableContainerProps) {
  const mapTh = thProps ? _renderHeader(thProps) : null;
  return (
    <div>
      <div className={styles.tableContainer}>
        <table>
          <thead>{mapTh}</thead>
          <tbody>{bodyComponent}</tbody>
        </table>
      </div>
    </div>
  );
}

function _renderHeader(header: IthProps[]) {
  return (
    <tr>
      {header.map((item: any) => (
        <th key={item.key}>
          {item.title}
        </th>
      ))}
    </tr>
  );
}

export default TableContainer;
