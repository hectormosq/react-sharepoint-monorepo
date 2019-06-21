import React from 'react';
import { IMessagePanel } from './IMessagePanel';

const { MessageBar } = require('office-ui-fabric-react');

export function MessagePanel(props: IMessagePanel): JSX.Element {
  const panel = props.message
    ? props.message.map((message: any, index: any) => {
        return (
          <MessageBar key={index} messageBarType={message.type} isMultiline={false} onDismiss={console.log}>
            {message.text}
          </MessageBar>
        );
      })
    : null;

  return <div>{panel}</div>;
}
