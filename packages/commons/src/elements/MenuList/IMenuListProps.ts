import { INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

export interface IMenuListProps {
  /** Array of links and sublinks needed with actions */
  groups: INavLinkGroup[] | string | null;
  /** The value of the key (link) selected for css props */
  selectedKey?: string;
}
