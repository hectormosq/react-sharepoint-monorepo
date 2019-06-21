import { IMessage } from '../MessagePanel';
export interface IFrameContainerProps {
  children?: React.ReactNode;
  title: string;
  message?: IMessage[];
  isLoading?: boolean;
  loadingLabel?: string;
}
