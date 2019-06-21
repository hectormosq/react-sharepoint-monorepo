export interface ISubMenuListProps {
  /**
   * Array item list
   */
  items: ISubMenuListItem[];
}

export interface ISubMenuListItem {
  /**
  * The link active selection
  */
  key?: string;

  /**
   * Main text or the list item
   */
  name: string;

  /**
   * Click handler callback
   */
  onClick: (ev?: React.MouseEvent<HTMLElement>) => void;

  /**
   * Custom icon  for list item
   * @default ChevronLeft | ChevronRight
   */
  iconName?: string;

  /**
   * Sub text for the list item
   */
  subName?: string;

  /**
  * If it applies Url
  * @default '''
  */
 url?: string;

  /**
   * Custom separator between main text and sub text
   * @default -
   */
  separator?: string;
}
