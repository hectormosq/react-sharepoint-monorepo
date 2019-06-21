import { MessageBarType } from 'office-ui-fabric-react';

export interface IMessage {
  type: MessageBarType;
  text: string;
}

export interface IMessagePanel {
  message: IMessage[];
}
