import React from 'react';

import { ComplexText } from '../ComplexText';
import { ISubMenuListProps } from './ISubMenuListProps';
import styles from './SubMenuList.module.scss';

const { Icon, FocusZone, FocusZoneDirection, List,  getRTL } = require('office-ui-fabric-react');

function SubMenuList(props: ISubMenuListProps) {
    return (
      <FocusZone direction={FocusZoneDirection.vertical}>
        <div className={styles.subMenuList__container} data-is-scrollable={true}>
          <List items={props.items} onRenderCell={_onRenderCell} />
        </div>
      </FocusZone>
    );
}

function _onRenderCell(item: any): JSX.Element {
  return (
    <div onClick={item.onClick} className={styles.subMenuList__itemCell} data-is-focusable={false}>
      <div className={styles.subMenuList__itemContent}>
        <div className={styles.subMenuList__itemName}>
          <ComplexText complexText={item.name} complexSubText={item.subName} complexTextSeparator={item.separator} />
        </div>
      </div>
      <Icon className={styles.subMenuList__listIcon} iconName={_buildIcon(item.iconName)} />
    </div>
  );
}

function _buildIcon(iconName: string) {
  return iconName ? iconName : getRTL() ? 'ChevronLeft' : 'ChevronRight';
}

export default SubMenuList;
