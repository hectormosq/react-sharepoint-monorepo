import React from 'react';
import { IMenuListProps } from './IMenuListProps';
import { MenuListStyles } from './MenuList.styles';

const { Nav } = require('office-ui-fabric-react');

function MenuList({ groups, selectedKey }: IMenuListProps) {
  return (
  <div>
    <Nav groups={groups} getStyles={MenuListStyles} selectedKey={selectedKey} />
  </div>
  );
}

export default MenuList;
