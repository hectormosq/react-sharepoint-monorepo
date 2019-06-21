export interface IthProps {
  key: string;
  title: string;
}
export interface ITableContainerProps {
  thProps?: IthProps[] | undefined;
  bodyComponent: React.ReactNode;
}
