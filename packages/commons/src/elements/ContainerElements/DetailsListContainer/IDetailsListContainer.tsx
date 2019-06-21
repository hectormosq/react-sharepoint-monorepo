import { IDetailsListProps } from 'office-ui-fabric-react';

export interface columnProperties {
  [key: string]: {
    name: string
    render?: (item: any, index?: number) => void
  }
}

export interface IDetailsListContainer extends IDetailsListProps {
  columnProperties: columnProperties;
}
